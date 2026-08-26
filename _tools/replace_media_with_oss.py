# -*- coding: utf-8 -*-
"""
replace_media_with_oss.py
=========================
将 LULU AI STUDIO 项目中的图片/视频本地相对路径引用，替换为 OSS 线上 URL。

数据来源：
  D:\\data\\user_01\\lulu-ai-studio\\lulu-ai-studio-static-excel\\*.csv  （也可读 .xlsx/.xls）
  每个表格：
    A 列 (object)：URL 编码的文件对象路径（如 %E5%BD%B1...%2Fxxx.mp4）→ 解码后为中文路径
    B 列 (url)   ：该对象在 OSS 上的完整访问 URL

替换方式：
  1. 读取每个表格，把 A 列解码为中文，得到 {中文对象路径: OSS URL} 注册表。
  2. 依据 MEDIA_MAP（项目媒体文件 → CSV 中文对象路径）在项目源码
     （index.html / script.js / 其它含引用的文本文件）中做字符串替换。
  3. 替换后项目里的作品图片/视频全部指向 OSS 绝对 URL，不再有本地相对路径。

用法：
  python replace_media_with_oss.py            # 直接执行替换（先自动备份原文件）
  python replace_media_with_oss.py --dry-run  # 只预览将发生哪些替换，不写文件
"""
import argparse
import csv
import os
import re
import shutil
import sys
import urllib.parse
from datetime import datetime

# ---------------------------------------------------------------------------
# 路径配置（使用绝对路径）
# ---------------------------------------------------------------------------
PROJECT_ROOT = r"D:\data\user_01\lulu-ai-studio"
EXCEL_DIR = os.path.join(PROJECT_ROOT, "lulu-ai-studio-static-excel")

# 需要被改写的内容文件（覆盖所有出现作品媒体引用的文本文件）
TARGET_FILES = [
    os.path.join(PROJECT_ROOT, "index.html"),
    os.path.join(PROJECT_ROOT, "script.js"),
]

# 备份目录
BACKUP_DIR = os.path.join(PROJECT_ROOT, "_tools", "backup_" + datetime.now().strftime("%Y%m%d_%H%M%S"))

# ---------------------------------------------------------------------------
# 项目媒体文件(相对路径) → CSV 对象路径(A列解码后的中文路径)
# 说明：项目里作品的本地文件名是英文 slug，CSV 里是中文对象路径，
#       两者按作品内容一一对应（如 别克昂科威Plus 2026 = AI TVC广告）。
#       如需调整对应关系，改这里的键值即可。
# ---------------------------------------------------------------------------
MEDIA_MAP = {
    # 别克昂科威Plus 2026  ← AI TVC广告
    "assets/videos/ai-tvc-buick-envision-plus-2026.mp4": "影视作品集/AI TVC广告/AI_TVC广告.mp4",
    "assets/images/ai-tvc-buick-envision-plus-2026-cover.jpg": "影视作品集/AI TVC广告/AI_TVC广告封面.jpg",
    # 哭包人鱼（AI漫剧）  ← AI短剧
    "assets/videos/ai-drama-mermaid-romance.mp4": "影视作品集/AI短剧/AI短剧_哭包人鱼_捡漏恋爱短剧_99s.mp4",
    "assets/images/ai-drama-mermaid-romance-cover.png": "影视作品集/AI短剧/AI短剧_哭包人鱼_捡漏恋爱短剧_99s封面.png",
    # 五粮液传统品牌广告  ← TVC广告
    "assets/videos/tvc-wuliangye-brand-film.mp4": "影视作品集/TVC广告/TVC广告_五粮液_传统品牌广告_.mp4",
    "assets/images/tvc-wuliangye-brand-film-cover.jpg": "影视作品集/TVC广告/TVC广告_五粮液_传统品牌广告_封面.jpg",
    # 天和玖玺项目宣传片  ← 地产广告（CSV 中写为“天和珺玺”，系同一项目）
    "assets/videos/real-estate-tianhe-jiuxi-film.mp4": "影视作品集/地产广告/地产广告_天和玖玺_项目宣传片_.mp4",
    "assets/images/real-estate-tianhe-jiuxi-note.png": "影视作品集/地产广告/地产广告_天和玖玺_项目宣传片_封面.png",
    # 吹风机产品种草短片  ← 抖音短视频
    "assets/videos/douyin-hairdryer-product-film.mp4": "影视作品集/抖音短视频/抖音短视频_吹风机_产品种草短片_.mp4",
    "assets/images/douyin-hairdryer-product-film-cover.png": "影视作品集/抖音短视频/抖音短视频_吹风机_产品种草短片_封面.png",
}


# ---------------------------------------------------------------------------
# 读取表格：支持 .csv（自动识别编码）与 .xlsx / .xls（需要 openpyxl / xlrd）
# 返回 [(object_path, oss_url), ...]，object_path 为 A 列解码后的中文路径
# ---------------------------------------------------------------------------
def detect_encoding(path):
    for enc in ("utf-8-sig", "utf-8", "gb18030", "gbk"):
        try:
            with open(path, "rb") as f:
                f.read()
            with open(path, encoding=enc) as f:
                f.read(2000)
            return enc
        except Exception:
            continue
    return "utf-8"


def read_workbook_rows(path):
    ext = os.path.splitext(path)[1].lower()
    rows = []  # (col_a_raw, col_b)
    if ext == ".csv":
        enc = detect_encoding(path)
        with open(path, encoding=enc, newline="") as f:
            reader = csv.reader(f)
            for line_no, row in enumerate(reader, 1):
                if not row or not any(c.strip() for c in row):
                    continue
                if line_no == 1 and str(row[0]).strip().lower() in ("object", "名称", "文件名", "path"):
                    continue  # 表头
                a = row[0].strip() if len(row) > 0 else ""
                b = row[1].strip() if len(row) > 1 else ""
                if a or b:
                    rows.append((a, b))
    elif ext in (".xlsx", ".xls"):
        try:
            import openpyxl
        except ImportError:
            print("[WARN] 未安装 openpyxl，无法读取 %s，跳过。" % os.path.basename(path))
            return rows
        wb = openpyxl.load_workbook(path, read_only=True, data_only=True)
        for ws in wb.worksheets:
            for line_no, row in enumerate(ws.iter_rows(values_only=True), 1):
                if not row or all(c is None or str(c).strip() == "" for c in row):
                    continue
                if line_no == 1 and str(row[0] or "").strip().lower() in ("object", "名称", "文件名", "path"):
                    continue
                a = str(row[0]).strip() if row[0] is not None else ""
                b = str(row[1]).strip() if len(row) > 1 and row[1] is not None else ""
                if a or b:
                    rows.append((a, b))
        wb.close()
    else:
        print("[WARN] 不支持的文件类型：%s" % os.path.basename(path))
    return rows


def decode_object(raw):
    """A 列可能是完整 URL 编码，也可能是 URL；提取出可读中文对象路径。"""
    s = raw.strip()
    # 若整串是一个 http URL，取其中路径部分解码
    if s.lower().startswith("http"):
        parsed = urllib.parse.urlparse(s)
        s = urllib.parse.unquote(parsed.path).lstrip("/")
    else:
        s = urllib.parse.unquote(s)
    return s


def build_registry(excel_dir):
    """读取每个表格，返回 {中文对象路径: OSS URL} 与统计信息。"""
    registry = {}
    info = []
    if not os.path.isdir(excel_dir):
        print("[ERROR] 表格目录不存在：%s" % excel_dir)
        return registry, info
    files = sorted(
        f for f in os.listdir(excel_dir)
        if os.path.splitext(f)[1].lower() in (".csv", ".xlsx", ".xls")
    )
    if not files:
        print("[WARN] %s 下未找到任何 .csv/.xlsx/.xls 文件" % excel_dir)
        return registry, info

    for fn in files:
        path = os.path.join(excel_dir, fn)
        rows = read_workbook_rows(path)
        if not rows:
            continue
        file_rows = []
        for a, b in rows:
            obj = decode_object(a)
            url = b
            if not url:
                print("  [WARN] %s 第 %s 行 B 列(url)为空，跳过：%s" % (fn, "?", obj))
                continue
            if obj in registry and registry[obj] != url:
                print("  [WARN] %s 与已有条目冲突，覆盖为新值：%s" % (fn, obj))
            registry[obj] = url
            file_rows.append((obj, url))
        info.append((fn, file_rows))

    # 打印读取结果
    print("=" * 78)
    print("已读取表格（A列解码中文 → B列OSS URL）：")
    for fn, file_rows in info:
        print("  --- %s (%d 行) ---" % (fn, len(file_rows)))
        for obj, url in file_rows:
            print("    %s" % obj)
            print("      -> %s" % url)
    print("=" * 78)
    return registry, info


# ---------------------------------------------------------------------------
# 执行替换
# ---------------------------------------------------------------------------
def apply_replacements(registry, dry_run=False):
    # 收集要做的替换：项目媒体相对路径 → OSS URL
    replacements = []  # (relpath, object_path, oss_url)
    for relpath, obj in MEDIA_MAP.items():
        if obj not in registry:
            print("[WARN] 表格中没有找到对象：%s （%s 将保持原样）" % (obj, relpath))
            continue
        replacements.append((relpath, obj, registry[obj]))

    # 需要读写的文件
    changed = []
    for path in TARGET_FILES:
        if not os.path.isfile(path):
            print("[WARN] 目标文件不存在，跳过：%s" % path)
            continue
        with open(path, encoding="utf-8", newline="") as f:
            content = f.read()

        original = content
        per_file = []
        for relpath, obj, url in replacements:
            # 兼容 ./assets/... 与 assets/... 两种写法
            for variant in ("./" + relpath, relpath):
                if variant in content:
                    n = content.count(variant)
                    content = content.replace(variant, url)
                    per_file.append((variant, url, n))
        if content != original:
            changed.append((path, per_file, original, content))

    # 预览 / 写入
    if dry_run:
        print("\n[DRY-RUN] 以下替换将被执行（未写文件）：")
        for path, per_file, _, _ in changed:
            print("  FILE: %s" % os.path.basename(path))
            for variant, url, n in per_file:
                print("    x%-3d  %s" % (n, variant))
                print("         -> %s" % url)
        print("\n[DRY-RUN] 共 %d 个文件将被修改。" % len(changed))
        return changed

    if not changed:
        print("\n[INFO] 没有需要替换的内容（可能已替换过）。")
        return changed

    # 备份原文件
    os.makedirs(BACKUP_DIR, exist_ok=True)
    for path, _, _, _ in changed:
        shutil.copy2(path, os.path.join(BACKUP_DIR, os.path.basename(path)))
    print("\n[BACKUP] 原文件已备份到：%s" % BACKUP_DIR)

    for path, per_file, _, content in changed:
        with open(path, "w", encoding="utf-8", newline="") as f:
            f.write(content)
        print("  [OK] 已更新 %s（%d 处替换）" % (os.path.basename(path), sum(n for _, _, n in per_file)))
    return changed


# ---------------------------------------------------------------------------
# 校验：替换后项目里不应再残留作品类的本地相对引用
# ---------------------------------------------------------------------------
def verify_no_relative(registry):
    print("\n" + "=" * 78)
    print("校验：替换后仍存在的 ./assets/ 引用（应仅剩未提供 OSS 的素材）：")
    media_hint = re.compile(r"assets/(videos|images)/", re.IGNORECASE)
    leftovers = []
    for path in TARGET_FILES:
        if not os.path.isfile(path):
            continue
        with open(path, encoding="utf-8", errors="replace") as f:
            for line_no, line in enumerate(f, 1):
                for m in media_hint.finditer(line):
                    start = max(line.rfind('"', 0, m.start()), line.rfind("'", 0, m.start()))
                    if start < 0:
                        continue
                    end = line.find(line[start], start + 1)
                    tok = line[start + 1:end] if end > 0 else line[m.start():m.start() + 80]
                    leftovers.append((os.path.basename(path), line_no, tok))
    if leftovers:
        for fn, ln, tok in sorted(set(leftovers)):
            print("  %s L%d  %s" % (fn, ln, tok))
    else:
        print("  （无残留）")
    print("=" * 78)
    return leftovers


# ---------------------------------------------------------------------------
# 报告
# ---------------------------------------------------------------------------
def report(registry, info, changed, dry_run):
    print("\n" + "=" * 78)
    print("汇总")
    print("=" * 78)
    applied = {}
    for _, per_file, _, _ in changed:
        for variant, url, n in per_file:
            applied[variant] = (url, n)
    print("已替换（%d 项映射）：" % len(MEDIA_MAP))
    for relpath, obj in MEDIA_MAP.items():
        url = registry.get(obj)
        hit = applied.get(relpath) or applied.get("./" + relpath)
        if url and hit:
            print("  [已替换 x%d] %s" % (hit[1], relpath))
            print("      中文对象：%s" % obj)
            print("      OSS URL ：%s" % url)
        else:
            reason = "CSV 中无该对象" if url is None else "目标文件中未找到该引用"
            print("  [未替换] %s  （%s）" % (relpath, reason))

    # 未被使用的 CSV 条目
    used_objs = set(MEDIA_MAP.values())
    print("\nCSV 中未被项目引用、因此未应用的条目：")
    unused = [obj for obj in registry if obj not in used_objs]
    if unused:
        for obj in sorted(unused):
            print("  - %s" % obj)
    else:
        print("  （无）")

    # 未被替换的项目媒体（没有 OSS URL 可用的作品素材）
    print("\n项目里仍保留本地相对路径、且 CSV 未提供 OSS URL 的素材（保持原样）：")
    known_work_media = set()
    for relpath in MEDIA_MAP:
        known_work_media.add(re.sub(r"^[./]+", "", relpath))
    keep = []
    for path in TARGET_FILES:
        if not os.path.isfile(path):
            continue
        with open(path, encoding="utf-8", errors="replace") as f:
            for line in f:
                for m in re.finditer(r"[./]?assets/(videos|images)/[\w.\-]+", line):
                    tok = re.sub(r"^[./]+", "", m.group(0))
                    if tok not in known_work_media and tok not in keep:
                        keep.append(tok)
    if keep:
        for tok in sorted(set(keep)):
            print("  - %s" % tok)
    else:
        print("  （无）")


def main():
    ap = argparse.ArgumentParser(description="把项目媒体相对路径替换为 OSS URL")
    ap.add_argument("--dry-run", action="store_true", help="只预览不写入")
    args = ap.parse_args()

    registry, info = build_registry(EXCEL_DIR)
    if not registry:
        print("[ERROR] 未读取到任何表格数据，退出。")
        sys.exit(1)

    changed = apply_replacements(registry, dry_run=args.dry_run)
    if not args.dry_run:
        verify_no_relative(registry)
    report(registry, info, changed, args.dry_run)


if __name__ == "__main__":
    main()
