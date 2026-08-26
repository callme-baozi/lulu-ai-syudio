# LULU AI STUDIO — Design System v2

统一网页组件设计语言。**碳黑 × 银色液态玻璃**，严格灰度，真实影像负责提供颜色。
确认本设计语言后，再整体应用到主站（`index.html` / `styles.css` / `script.js`）。

## 目录

| 文件 | 作用 |
|------|------|
| `tokens.css` | **唯一事实来源**：颜色、字体、字号、字重、圆角、线条、间距、缝隙、控件尺寸、动效、液态玻璃参数 |
| `components.css` | 全部组件样式（液态玻璃、卡片、按钮、标签、输入、开关、进度、面板、BorderGlow、Spotlight、光晕、联动） |
| `showcase.html` | 设计语言预览页：令牌实时渲染 + 组件展示 + 鼠标交互 + Anime.js 动效演示 |
| `assets/anime.min.js` | Anime.js v3.2.2（UMD，17KB），替代 GSAP |

## 设计决策

### 1. 颜色 — 表面层级（暗→亮）
- `bg → surface → raised`：三级灰阶，层级只靠亮度区分，不引入彩色。
- 玻璃表面用**半透明白**（`hsl(0 0% 100% / .05/.09)`），叠在影像上呈现"流动"质感。
- 高光白统一为 `--color-glass-highlight`，BorderGlow / Spotlight / 玻璃内高光共用。

### 2. 字体 / 字号 / 字重
- 字体沿用 Poppins（拉丁）+ 系统中文字体，`letter-spacing: 0`，层级全靠大小与粗细。
- 大字号用 `clamp()` 流体缩放（display / h1 / h2），正文与标签用固定值。
- 字重四档：400 / 500 / 600 / 700。

### 3. 圆角 — 一卡一控
- 大卡片 `12px`、面板 `10px`、内嵌元素 `6px`、胶囊控件 `999px`。
- 主站旧版散落的 8px / 4px / 2px 统一收敛到这四个令牌。

### 4. 线条粗细与亮暗
- 常规描边 / 分隔线 `1px` 半透明；强调描边 `1px` 更亮；焦点 `2px` 纯白。

### 5. 缝隙 — 4pt 网格
- 组件间标准缝隙 `16px`、紧凑缝隙 `12px`、标签缝隙 `8px`、按钮组缝隙 `8px`。
- 卡片内边距 `24px`、面板 `20px`、区块纵向间距 `clamp(72px, 10vw, 128px)`。
- 页面左右留白 `clamp(18px, 4vw, 32px)`。

### 6. 保留：透明流动 CSS 效果
- 液态玻璃（`glass` / `glass-strong`）：backdrop-blur + 半透明表面 + 顶部内高光 + 细描边。
- BorderGlow：conic-gradient 描边光随指针角度旋转，靠近边缘增强。
- Spotlight：径向聚光跟随指针。

### 7. 新增：鼠标交互连贯性
- **全局鼠标光晕**（Cursor Halo）：360px 半透明光晕随指针跨组件连续移动。
- **相邻组件递进联动**（Hover Chain）：悬停一个成员，组内非悬停成员轻微退让（下压 + 变暗 + 降饱和）。
- 所有组件 hover 上浮 2~3px、按压回缩，动效统一 `--dur-fast/base` + `--ease-out`。

### 8. 动画库：Anime.js 替代 GSAP
- 体积 17KB（GSAP 约 70KB+），UMD 全局 `anime`，无需打包器。
- 入场揭示、滚动 Reveal、数字滚动、轮播位移等全部由其驱动。
- 尊重 `prefers-reduced-motion`。

## 应用方式（确认后执行）
1. `tokens.css` 变量注入主站 `styles.css` 的 `:root`（或独立引入）。
2. 主站组件类名逐步映射到 `components.css` 语义（`.button → .btn` 等，或保留类名改值）。
3. `script.js` 中 `gsap` 调用改为 `anime` 等价实现。
4. `index.html` 引入 `anime.min.js` 替换 `gsap.min.js`。

## 预览
通过主站服务器访问：

```text
http://127.0.0.1:4173/design-system/showcase.html
```
