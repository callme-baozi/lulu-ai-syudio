# -*- coding: utf-8 -*-
"""Scan project source files for media references (relative asset paths and URLs)."""
import os
import re

ROOT = r"D:\data\user_01\lulu-ai-studio"

TEXT_EXTS = {".html", ".js", ".css", ".md", ".json", ".jsx", ".ts", ".vue", ".txt"}
MEDIA_HINT = re.compile(r"(assets/|\.mp4|\.jpg|\.jpeg|\.png|\.webp|\.gif|\.mov|\.m4v)", re.IGNORECASE)

for root, dirs, files in os.walk(ROOT):
    # Skip the excel directory, vendor assets, and the tools dir itself
    dirs[:] = [d for d in dirs if d not in ("lulu-ai-studio-static-excel", "vendor", "_tools", "node_modules")]
    for fn in files:
        p = os.path.join(root, fn)
        ext = os.path.splitext(fn)[1].lower()
        if ext not in TEXT_EXTS:
            continue
        with open(p, encoding="utf-8", errors="replace") as f:
            content = f.read()
        rels = []
        urls = []
        for line_no, line in enumerate(content.splitlines(), 1):
            for m in MEDIA_HINT.finditer(line):
                # extract the nearest quoted token
                start = max(line.rfind('"', 0, m.start()), line.rfind("'", 0, m.start()))
                q = line[start] if start >= 0 else None
                if q is None:
                    continue
                end = line.find(q, start + 1)
                if end < 0:
                    continue
                tok = line[start + 1:end]
                if tok.startswith("http"):
                    urls.append((line_no, tok))
                elif "assets/" in tok or tok.startswith("./") or tok.startswith("../") or tok.startswith("/"):
                    rels.append((line_no, tok))
        if rels or urls:
            print("=" * 80)
            print("FILE:", os.path.relpath(p, ROOT))
            for ln, tok in sorted(set(rels)):
                print("  REL L%-5d %s" % (ln, tok))
            for ln, tok in sorted(set(urls)):
                print("  URL L%-5d %s" % (ln, tok))
