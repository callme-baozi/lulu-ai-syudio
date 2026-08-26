# LULU AI STUDIO

AI影视个人作品网站，以小型影视工作室的方式呈现作品、能力与合作入口。纯静态 HTML / CSS / JavaScript 构建，动画由 Anime.js 驱动（无框架、无 npm 依赖）。

## 网站内容

- 碳黑 × 银色液态玻璃首屏、全幅视频背景、BorderGlow 描边光与全局鼠标光晕
- 9 个真实视频项目，支持 7 类作品筛选
- React Bits 风格的 DepthCarousel（3D 深度轮播），支持拖拽、滚轮、键盘、自动播放与项目文本框联动
- 项目详情弹窗、原生视频播放、创作角色与项目亮点
- About、Capabilities、Contact 完整页面模块
- 桌面与移动端响应式布局、移动菜单、键盘焦点和减少动态效果支持

## 设计语言

视觉体系（字体 / 颜色 / 圆角 / 缝隙 / 动效令牌）统一由 `design-system/tokens.css` 驱动，组件规范见 `design-system/`（含预览页 showcase.html 与 README）。

## 本地预览

```powershell
cd "D:\data\user_01\lulu-ai-studio"
node server.js
```

然后打开：

```text
http://127.0.0.1:4173/
```

必须通过上面的本地地址预览，不要直接双击 `index.html`（视频走 Range 流式请求）。如端口被占用：

```powershell
$env:PORT=4174
node server.js
```

## 素材结构

- `assets/videos`：作品视频素材（部分已本地移除，页面回退到 CDN 源）
- `assets/images`：封面、背景和个人介绍区域图片
- `assets/vendor/anime.min.js`：本地 Anime.js 动画运行时
- `script.js`：作品数据、分类筛选、项目详情弹层
- `styles.css`：视觉样式和移动端适配
- `design-system/`：设计令牌与组件库（tokens.css / components.css / showcase.html）
- `server.js`：原生 Node 静态服务器（http + fs，无第三方依赖）

## 部署

见 `TENCENT-CLOUD-DEPLOY.md`（腾讯云 COS 静态托管）。
