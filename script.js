document.documentElement.classList.add("js");

const projects = [
  {
    slug: "buick-envision-plus",
    title: "别克昂科威Plus 2026",
    type: "AI TVC广告",
    category: "ai-tvc",
    duration: "30 sec",
    intro: "以AI影像完成汽车品牌的速度、空间与产品气质表达。",
    detail:
      "围绕智能出行与城市未来感组织镜头，通过统一的光影、车辆姿态和商业广告节奏，完成一支可直接观看的AI汽车TVC样片。",
    role: "AI视觉开发 / 镜头设计 / 剪辑",
    focus: "汽车广告的镜头连续性与品牌质感",
    highlights: ["统一车辆视觉与场景光影", "以速度感组织镜头节奏", "完成品牌广告级成片结构"],
    media: "https://zhy-video-bucket.oss-cn-beijing.aliyuncs.com/%E5%BD%B1%E8%A7%86%E4%BD%9C%E5%93%81%E9%9B%86/AI%20TVC%E5%B9%BF%E5%91%8A/AI_TVC%E5%B9%BF%E5%91%8A.mp4",
    poster: "https://zhy-video-bucket.oss-cn-beijing.aliyuncs.com/%E5%BD%B1%E8%A7%86%E4%BD%9C%E5%93%81%E9%9B%86/AI%20TVC%E5%B9%BF%E5%91%8A/AI_TVC%E5%B9%BF%E5%91%8A%E5%B0%81%E9%9D%A2.jpg",
    layout: "hero",
  },
  {
    slug: "mermaid-romance",
    title: "哭包人鱼",
    type: "AI漫剧",
    category: "ai-drama",
    duration: "99 sec",
    intro: "奇幻恋爱短剧，以角色关系和情绪钩子推动叙事。",
    detail:
      "围绕人鱼角色、奇幻场景和恋爱冲突搭建短剧片段，强调角色辨识、情绪递进与竖屏内容的快速进入。",
    role: "角色设定 / 剧情视觉 / AI视频",
    focus: "角色一致性与短剧开场钩子",
    highlights: ["建立可辨识的奇幻角色", "用近景强化情绪关系", "适配短内容观看节奏"],
    media: "https://zhy-video-bucket.oss-cn-beijing.aliyuncs.com/%E5%BD%B1%E8%A7%86%E4%BD%9C%E5%93%81%E9%9B%86/AI%E7%9F%AD%E5%89%A7/AI%E7%9F%AD%E5%89%A7_%E5%93%AD%E5%8C%85%E4%BA%BA%E9%B1%BC_%E6%8D%A1%E6%BC%8F%E6%81%8B%E7%88%B1%E7%9F%AD%E5%89%A7_99s.mp4",
    poster: "https://zhy-video-bucket.oss-cn-beijing.aliyuncs.com/%E5%BD%B1%E8%A7%86%E4%BD%9C%E5%93%81%E9%9B%86/AI%E7%9F%AD%E5%89%A7/AI%E7%9F%AD%E5%89%A7_%E5%93%AD%E5%8C%85%E4%BA%BA%E9%B1%BC_%E6%8D%A1%E6%BC%8F%E6%81%8B%E7%88%B1%E7%9F%AD%E5%89%A7_99s%E5%B0%81%E9%9D%A2.png",
    layout: "portrait",
  },
  {
    slug: "wuliangye-brand-film",
    title: "五粮液传统品牌广告",
    type: "TVC广告",
    category: "tvc",
    duration: "55 sec",
    intro: "传统文化语境下的品牌叙事与高端视觉表达。",
    detail:
      "通过产品、文化符号与仪式感场景组织TVC结构，让品牌价值、画面质感和节奏形成一致的观看体验。",
    role: "后期制作 / 节奏设计 / 品牌表达",
    focus: "传统品牌的现代影像语言",
    highlights: ["保持高端品牌调性", "建立完整TVC叙事结构", "强化产品与文化记忆点"],
    media: "https://zhy-video-bucket.oss-cn-beijing.aliyuncs.com/%E5%BD%B1%E8%A7%86%E4%BD%9C%E5%93%81%E9%9B%86/TVC%E5%B9%BF%E5%91%8A/TVC%E5%B9%BF%E5%91%8A_%E4%BA%94%E7%B2%AE%E6%B6%B2_%E4%BC%A0%E7%BB%9F%E5%93%81%E7%89%8C%E5%B9%BF%E5%91%8A_.mp4",
    poster: "https://zhy-video-bucket.oss-cn-beijing.aliyuncs.com/%E5%BD%B1%E8%A7%86%E4%BD%9C%E5%93%81%E9%9B%86/TVC%E5%B9%BF%E5%91%8A/TVC%E5%B9%BF%E5%91%8A_%E4%BA%94%E7%B2%AE%E6%B6%B2_%E4%BC%A0%E7%BB%9F%E5%93%81%E7%89%8C%E5%B9%BF%E5%91%8A_%E5%B0%81%E9%9D%A2.jpg",
    layout: "wide",
  },
  {
    slug: "tianhe-jiuxi",
    title: "天和玖玺项目宣传片",
    type: "地产广告",
    category: "real-estate",
    duration: "46 sec",
    intro: "用空间、建筑与生活想象构建地产项目价值。",
    detail:
      "从项目气质出发组织建筑、环境与生活方式画面，以稳定的镜头节奏完成地产传播所需要的品质感与空间感。",
    role: "后期制作 / 视觉节奏 / 项目包装",
    focus: "空间氛围与项目价值的同步表达",
    highlights: ["建立建筑与生活场景关系", "控制高端地产视觉节奏", "适配项目宣传与提案使用"],
    media: "https://zhy-video-bucket.oss-cn-beijing.aliyuncs.com/%E5%BD%B1%E8%A7%86%E4%BD%9C%E5%93%81%E9%9B%86/%E5%9C%B0%E4%BA%A7%E5%B9%BF%E5%91%8A/%E5%9C%B0%E4%BA%A7%E5%B9%BF%E5%91%8A_%E5%A4%A9%E5%92%8C%E7%8E%96%E7%8E%BA_%E9%A1%B9%E7%9B%AE%E5%AE%A3%E4%BC%A0%E7%89%87_.mp4",
    poster: "https://zhy-video-bucket.oss-cn-beijing.aliyuncs.com/%E5%BD%B1%E8%A7%86%E4%BD%9C%E5%93%81%E9%9B%86/%E5%9C%B0%E4%BA%A7%E5%B9%BF%E5%91%8A/%E5%9C%B0%E4%BA%A7%E5%B9%BF%E5%91%8A_%E5%A4%A9%E5%92%8C%E7%8E%96%E7%8E%BA_%E9%A1%B9%E7%9B%AE%E5%AE%A3%E4%BC%A0%E7%89%87_%E5%B0%81%E9%9D%A2.png",
    layout: "standard",
  },
  {
    slug: "hairdryer-douyin",
    title: "吹风机产品种草短片",
    type: "抖音短视频",
    category: "douyin",
    duration: "94 sec",
    intro: "以产品卖点、使用场景和短视频节奏承接观看兴趣。",
    detail:
      "面向抖音内容场景梳理信息密度，用直接的产品画面、节奏变化和使用利益点完成一支种草向短片。",
    role: "内容剪辑 / 卖点组织 / 短视频包装",
    focus: "产品信息与平台节奏的平衡",
    highlights: ["快速建立产品使用场景", "以镜头承接核心卖点", "适配移动端内容节奏"],
    media: "https://zhy-video-bucket.oss-cn-beijing.aliyuncs.com/%E5%BD%B1%E8%A7%86%E4%BD%9C%E5%93%81%E9%9B%86/%E6%8A%96%E9%9F%B3%E7%9F%AD%E8%A7%86%E9%A2%91/%E6%8A%96%E9%9F%B3%E7%9F%AD%E8%A7%86%E9%A2%91_%E5%90%B9%E9%A3%8E%E6%9C%BA_%E4%BA%A7%E5%93%81%E7%A7%8D%E8%8D%89%E7%9F%AD%E7%89%87_.mp4",
    poster: "https://zhy-video-bucket.oss-cn-beijing.aliyuncs.com/%E5%BD%B1%E8%A7%86%E4%BD%9C%E5%93%81%E9%9B%86/%E6%8A%96%E9%9F%B3%E7%9F%AD%E8%A7%86%E9%A2%91/%E6%8A%96%E9%9F%B3%E7%9F%AD%E8%A7%86%E9%A2%91_%E5%90%B9%E9%A3%8E%E6%9C%BA_%E4%BA%A7%E5%93%81%E7%A7%8D%E8%8D%89%E7%9F%AD%E7%89%87_%E5%B0%81%E9%9D%A2.png?x-oss-process=image/resize,w_900",
    layout: "portrait",
  },
  {
    slug: "ae-city-composite",
    title: "城市合成 · 视觉包装",
    type: "AE作品",
    category: "ae",
    duration: "28 sec",
    intro: "基于AE完成城市场景的多层合成与视觉包装，构建未来感城市氛围。",
    detail:
      "通过AE多层合成、光影调整、粒子叠加与动态图形包装，将城市素材加工为具有未来感的视觉场景，完成从素材到成片的全流程后期制作。",
    role: "AE合成 / 视觉包装 / 动态图形",
    focus: "多层合成与未来感视觉氛围",
    highlights: ["城市场景多层合成与光影重塑", "粒子与动态图形视觉包装", "完成未来感成片输出"],
    media: "https://zhy-video-bucket.oss-cn-beijing.aliyuncs.com/%E5%BD%B1%E8%A7%86%E4%BD%9C%E5%93%81%E9%9B%86/AE%E4%BD%9C%E5%93%81/2/%E5%9F%8E%E5%B8%82%E5%90%88%E6%88%90.mp4",
    poster: "https://zhy-video-bucket.oss-cn-beijing.aliyuncs.com/%E5%BD%B1%E8%A7%86%E4%BD%9C%E5%93%81%E9%9B%86/AE%E4%BD%9C%E5%93%81/2/%E5%9F%8E%E5%B8%82%E5%90%88%E6%88%90%E5%B0%81%E9%9D%A2.jpg",
    layout: "wide",
  },
  {
    slug: "ae-e3d-title",
    title: "E3D立体字 · 动态片头",
    type: "AE作品",
    category: "ae",
    duration: "18 sec",
    intro: "Element 3D三维立体字动画，配合镜头运动完成品牌片头演绎。",
    detail:
      "使用AE Element 3D插件制作三维立体字，通过摄像机运动、材质光效与动态模糊，实现具有冲击力的品牌片头级文字动画。",
    role: "E3D制作 / 三维动画 / 片头包装",
    focus: "三维立体字的镜头运动与光效表现",
    highlights: ["Element 3D三维立体字建模", "摄像机运动与材质光效", "品牌片头级动态演绎"],
    media: "https://zhy-video-bucket.oss-cn-beijing.aliyuncs.com/%E5%BD%B1%E8%A7%86%E4%BD%9C%E5%93%81%E9%9B%86/AE%E4%BD%9C%E5%93%81/1/E3D%E7%AB%8B%E4%BD%93%E5%AD%97.mp4",
    poster: "https://zhy-video-bucket.oss-cn-beijing.aliyuncs.com/%E5%BD%B1%E8%A7%86%E4%BD%9C%E5%93%81%E9%9B%86/AE%E4%BD%9C%E5%93%81/1/E3D%E7%AB%8B%E4%BD%93%E5%AD%97%E5%B0%81%E9%9D%A2.jpg",
    layout: "standard",
  },
  {
    slug: "ae-3d-flythrough",
    title: "三维穿梭 · 空间动效",
    type: "AE作品",
    category: "ae",
    duration: "22 sec",
    intro: "AE三维空间场景制作，摄像机运动与粒子效果实现沉浸式穿梭。",
    detail:
      "在AE中搭建三维空间场景，通过摄像机路径运动、粒子拖尾、景深与光效叠加，营造具有速度感和沉浸感的空间穿梭视觉体验。",
    role: "三维场景 / 摄像机动画 / 粒子特效",
    focus: "空间穿梭的速度感与沉浸感",
    highlights: ["AE三维空间场景搭建", "摄像机路径运动与景深", "粒子拖尾与光效叠加"],
    media: "https://zhy-video-bucket.oss-cn-beijing.aliyuncs.com/%E5%BD%B1%E8%A7%86%E4%BD%9C%E5%93%81%E9%9B%86/AE%E4%BD%9C%E5%93%81/3/%E4%B8%89%E7%BB%B4%E7%A9%BF%E6%A2%AD.mp4",
    poster: "https://zhy-video-bucket.oss-cn-beijing.aliyuncs.com/%E5%BD%B1%E8%A7%86%E4%BD%9C%E5%93%81%E9%9B%86/AE%E4%BD%9C%E5%93%81/3/%E4%B8%89%E7%BB%B4%E7%A9%BF%E6%A2%AD%E5%B0%81%E9%9D%A2.jpg",
    layout: "wide",
  },
];

const workGrid = document.querySelector("#workGrid");
const workModules = document.querySelector("#workModules");
const filters = [...document.querySelectorAll(".filter-button")];
const dialog = document.querySelector("#projectDialog");
const dialogBody = document.querySelector("#dialogBody");
const dialogClose = document.querySelector("#dialogClose");
const heroVideo = document.querySelector("#heroVideo");
const heroSound = document.querySelector("#heroSound");
const siteHeader = document.querySelector("#siteHeader");
const menuButton = document.querySelector("#menuButton");
const siteNav = document.querySelector("#siteNav");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
let activeCarousel = null;

function tweenValue({ start, end, duration, onUpdate, onComplete }) {
  let frame = null;
  let killed = false;
  const startedAt = Date.now();

  function tick() {
    if (killed) return;
    const progress = Math.min((Date.now() - startedAt) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    onUpdate(start + (end - start) * eased);
    if (progress < 1) frame = window.requestAnimationFrame(tick);
    else onComplete?.();
  }

  frame = window.requestAnimationFrame(tick);
  return {
    kill() {
      killed = true;
      window.cancelAnimationFrame(frame);
    },
  };
}

/* 主站展示顺序：所有作品竖向排列，左右布局按此顺序交替 */
const orderedProjects = [
  "buick-envision-plus",
  "mermaid-romance",
  "wuliangye-brand-film",
  "tianhe-jiuxi",
  "hairdryer-douyin",
  "ae-city-composite",
  "ae-e3d-title",
  "ae-3d-flythrough",
]
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter(Boolean);

function escapeAttr(value) {
  return String(value).replace(/"/g, "&quot;");
}

function projectSlide(project, index, count) {
  const poster = project.poster ? ' poster="' + escapeAttr(project.poster) + '"' : "";
  const isPortrait = project.layout === "portrait" && !!project.poster;
  const backdrop =
    isPortrait && project.poster
      ? '<img class="depth-carousel__backdrop" src="' + escapeAttr(project.poster) + '" alt="" aria-hidden="true" />'
      : "";
  return [
    '<button class="depth-carousel__card',
    isPortrait ? " is-portrait" : "",
    '" type="button" data-carousel-card data-index="',
    index,
    '" data-slug="',
    project.slug,
    '" aria-label="',
    index + 1,
    " / ",
    count,
    "，",
    project.title,
    '">',
    backdrop,
    '<video class="depth-carousel__media" muted playsinline preload="metadata"',
    poster,
    ' aria-hidden="true"><source src="',
    escapeAttr(project.media),
    '" type="video/mp4" /></video>',
    '<span class="depth-carousel__tint" aria-hidden="true"></span>',
    '<span class="media-status" aria-hidden="true">Media unavailable</span>',
    "</button>",
  ].join("");
}

function carouselMarkup(items) {
  const arrows =
    items.length > 1
      ? [
          '<button class="depth-carousel__arrow depth-carousel__arrow--prev glow-chip" type="button" data-carousel-prev aria-label="上一个项目">',
          '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>',
          "</button>",
          '<button class="depth-carousel__arrow depth-carousel__arrow--next glow-chip" type="button" data-carousel-next aria-label="下一个项目">',
          '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>',
          "</button>",
        ].join("")
      : "";

  const dots =
    items.length > 1
      ? items
          .map(
            (project, index) =>
              '<button class="depth-carousel__dot' +
              (index === 0 ? " is-active" : "") +
              '" type="button" role="tab" data-carousel-dot data-index="' +
              index +
              '" aria-label="切换到' +
              project.title +
              '" aria-selected="' +
              String(index === 0) +
              '"></button>',
          )
          .join("")
      : "";

  return [
    '<div class="work-showcase reveal">',
    '<article class="work-info glow-card" aria-labelledby="activeProjectTitle">',
    '<div class="work-info__meta"><span data-project-count></span><span data-project-type></span></div>',
    '<h3 id="activeProjectTitle" data-project-title></h3>',
    '<p data-project-intro></p>',
    '<dl class="work-info__facts"><div><dt>Role</dt><dd data-project-role></dd></div><div><dt>Duration</dt><dd data-project-duration></dd></div></dl>',
    '<button class="text-link" type="button" data-open-active>查看项目详情</button>',
    "</article>",
    '<div class="depth-carousel" data-depth-carousel role="group" aria-roledescription="carousel" aria-label="作品深度轮播" tabindex="0">',
    '<div class="depth-carousel__stage">',
    items.map((project, index) => projectSlide(project, index, items.length)).join(""),
    "</div>",
    arrows,
    '<div class="depth-carousel__dots" role="tablist" aria-label="作品列表">',
    dots,
    "</div></div></div>",
  ].join("");
}

function projectModule(project, index, total) {
  const flip = index % 2 === 1 ? " work-module--flip" : "";
  const poster = project.poster ? ' poster="' + escapeAttr(project.poster) + '"' : "";
  const isPortrait = project.layout === "portrait" && !!project.poster;
  const num = String(index + 1).padStart(2, "0");
  const backdrop =
    isPortrait && project.poster
      ? '<img class="work-module__backdrop" src="' + escapeAttr(project.poster) + '" alt="" aria-hidden="true" />'
      : "";
  return [
    '<article class="work-module reveal',
    flip,
    isPortrait ? " is-portrait" : "",
    '" id="module-',
    project.slug,
    '" aria-labelledby="moduleTitle-',
    project.slug,
    '">',
    '<div class="work-module__media">',
    backdrop,
    '<video class="work-module__video" muted playsinline preload="metadata"',
    poster,
    ' aria-hidden="true"><source src="',
    escapeAttr(project.media),
    '" type="video/mp4" /></video>',
    "</div>",
    '<div class="work-module__copy glow-card">',
    '<div class="work-module__meta"><span>',
    num,
    " / ",
    String(total).padStart(2, "0"),
    "</span><span>",
    project.type,
    "</span></div>",
    '<h3 id="moduleTitle-',
    project.slug,
    '">',
    project.title,
    "</h3>",
    '<p class="work-module__intro">',
    project.intro,
    "</p>",
    '<dl class="work-module__facts"><div><dt>Role</dt><dd>',
    project.role,
    "</dd></div><div><dt>Duration</dt><dd>",
    project.duration,
    "</dd></div></dl>",
    '<button class="text-link" type="button" data-open-video="',
    project.slug,
    '">查看项目详情</button>',
    "</div>",
    "</article>",
  ].join("");
}

function revealElements(root = document) {
  const elements = [...root.querySelectorAll(".reveal:not(.is-visible)")];
  if (reduceMotion.matches || !("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.01 },
  );

  elements.forEach((element) => observer.observe(element));
}

function initializeHeroEntrance() {
  if (reduceMotion.matches || !window.anime) return;

  const ease = "easeOutCubic";
  anime({
    targets: ".hero-stage .hero-video",
    scale: [1.06, 1],
    duration: 1450,
    easing: ease,
  });

  anime
    .timeline({ easing: ease })
    .add({ targets: ".hero-stage .hero-grade", opacity: [0, 0.86], duration: 900 }, 0)
    .add({ targets: ".hero-stage .hero-liquid-brand", translateY: [-10, 0], opacity: [0, 1], duration: 550 }, 40)
    .add({ targets: ".hero-stage .hero-lockup", translateY: [22, 0], opacity: [0, 1], duration: 900 }, 160)
    .add({ targets: ".hero-stage .hero-summary", translateY: [18, 0], opacity: [0, 1], duration: 900 }, 280)
    .add({ targets: ".hero-stage .hero-liquid-toolbar", translateY: [10, 0], opacity: [0, 1], duration: 700 }, 200)
    .add({ targets: ".hero-stage .hero-ecosystem", translateY: [16, 0], opacity: [0, 1], duration: 750 }, 300)
    .add({ targets: ".hero-stage .hero-feature-stack", translateY: [18, 0], opacity: [0, 1], duration: 900 }, 400);
}

function initializeSectionEntrance() {
  if (reduceMotion.matches || !window.anime) return;

  const section = document.querySelector(".work-section");
  if (!section) return;

  let started = false;
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry.isIntersecting || started) return;
      started = true;
      observer.disconnect();
      const title = section.querySelector(".section-title");
      const frame = section.querySelector(".work-border-glow");
      [title, frame].filter(Boolean).forEach((element) => element.classList.add("is-visible"));
      const ease = "easeOutCubic";
      const timeline = anime.timeline({ easing: ease });
      if (title) timeline.add({ targets: title, translateY: [22, 0], opacity: [0, 1], duration: 800 }, 0);
      if (frame) timeline.add({ targets: frame, translateY: [28, 0], opacity: [0, 1], duration: 1000 }, 80);
    },
    { threshold: 0.01 },
  );

  observer.observe(section);
}

function scrollToModule(slug) {
  const target = document.getElementById("module-" + slug);
  if (!target) return;
  target.scrollIntoView({ behavior: reduceMotion.matches ? "auto" : "smooth", block: "start" });
}

function renderProjects(filter = "all") {
  const visible = filter === "all" ? orderedProjects : orderedProjects.filter((project) => project.category === filter);

  activeCarousel?.destroy();
  activeCarousel = null;

  if (!visible.length) {
    workGrid.innerHTML = '<p class="empty-state">该分类暂时没有可公开作品。</p>';
    return;
  }

  workGrid.innerHTML = carouselMarkup(visible);
  const carousels = [...workGrid.querySelectorAll("[data-depth-carousel]")]
    .map((root) => initializeDepthCarousel(root, visible))
    .filter(Boolean);
  activeCarousel = {
    pause() {
      carousels.forEach((carousel) => carousel.pause());
    },
    resume() {
      carousels.forEach((carousel) => carousel.resume());
    },
    destroy() {
      carousels.forEach((carousel) => carousel.destroy());
    },
  };
  revealElements(workGrid);
}

function renderModules(filter = "all") {
  const visible = filter === "all" ? orderedProjects : orderedProjects.filter((project) => project.category === filter);
  const total = visible.length;
  workModules.innerHTML = [
    '<div class="work-modules">',
    visible.map((project, index) => projectModule(project, index, total)).join(""),
    "</div>",
  ].join("");

  workModules.querySelectorAll("[data-open-video]").forEach((button) => {
    button.addEventListener("click", () => openProject(button.dataset.openVideo));
  });

  revealElements(workModules);
}

function setFilter(filter) {
  filters.forEach((button) => {
    const active = button.dataset.filter === filter;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  /* tag仅作视觉标识，点击滚动到对应分类的第一个作品模块 */
  if (filter === "all") {
    document.getElementById("work").scrollIntoView({ behavior: reduceMotion.matches ? "auto" : "smooth", block: "start" });
  } else {
    const target = orderedProjects.find((project) => project.category === filter);
    if (target) {
      const el = document.getElementById("module-" + target.slug);
      if (el) el.scrollIntoView({ behavior: reduceMotion.matches ? "auto" : "smooth", block: "start" });
    }
  }
}

function initializeDepthCarousel(root, items) {
  const cards = [...root.querySelectorAll("[data-carousel-card]")];
  const dots = [...root.querySelectorAll("[data-carousel-dot]")];
  const videos = cards.map((card) => card.querySelector("video"));
  const countLabel = workGrid.querySelector("[data-project-count]");
  const typeLabel = workGrid.querySelector("[data-project-type]");
  const title = workGrid.querySelector("[data-project-title]");
  const intro = workGrid.querySelector("[data-project-intro]");
  const role = workGrid.querySelector("[data-project-role]");
  const duration = workGrid.querySelector("[data-project-duration]");
  const openButton = workGrid.querySelector("[data-open-active]");
  const previousButton = root.querySelector("[data-carousel-prev]");
  const nextButton = root.querySelector("[data-carousel-next]");
  let position = 0;
  let activeIndex = 0;
  let tween = null;
  let wheelTimer = null;
  let autoplayTimer = null;
  let paused = false;
  let inView = true;
  let suppressClick = false;
  let drag = null;
  let dragFrame = null;

  function config() {
    const mobile = root.clientWidth < 720;
    const cardWidth = cards[0]?.offsetWidth || 420;
    return {
      cardWidth,
      depth: mobile ? 110 : 210,
      spread: mobile ? 36 : 92,
      tilt: mobile ? 5 : 10,
      visibleCards: mobile ? 2 : 3,
      falloff: mobile ? 0.28 : 0.23,
      blur: mobile ? 2 : 5,
    };
  }

  /* 合集轮播只展示封面：所有视频保持暂停，不自动播放 */
  function updatePlayback() {
    videos.forEach((video) => {
      if (!video) return;
      if (video.readyState === 0) video.load();
      video.pause();
    });
  }

  function updateInfo(index) {
    const project = items[index];
    if (!project) return;
    activeIndex = index;
    countLabel.textContent = String(index + 1).padStart(2, "0") + " / " + String(items.length).padStart(2, "0");
    typeLabel.textContent = project.type;
    title.textContent = project.title;
    intro.textContent = project.intro;
    role.textContent = project.role;
    duration.textContent = project.duration;
    cards.forEach((card, cardIndex) => {
      const active = cardIndex === index;
      card.classList.toggle("is-active", active);
      card.setAttribute("aria-current", active ? "true" : "false");
    });
    dots.forEach((dot, dotIndex) => {
      const active = dotIndex === index;
      dot.classList.toggle("is-active", active);
      dot.setAttribute("aria-selected", String(active));
    });
    updatePlayback();
  }

  function layout(value) {
    const settings = config();
    cards.forEach((card, index) => {
      let distance = index - value;
      if (items.length > 1) {
        distance = ((distance % items.length) + items.length) % items.length;
        if (distance > items.length / 2) distance -= items.length;
      }
      const behind = Math.max(0, distance);
      const visible = Math.abs(distance) <= settings.visibleCards + 0.5;
      const translateZ = -settings.depth * distance;
      const translateX = settings.spread * distance;
      const rotateY = settings.tilt * Math.min(Math.max(distance, 0), 1);
      let opacity = distance < 0 ? Math.max(0, 1 + distance) : 1;
      if (!visible) opacity = 0;
      const brightness = Math.max(0.2, 1 - behind * settings.falloff);
      const blur = Math.min(settings.blur, (behind / Math.max(1, settings.visibleCards)) * settings.blur);
      card.style.transform =
        "translate(-50%, -50%) translateX(" +
        translateX.toFixed(2) +
        "px) translateZ(" +
        translateZ.toFixed(2) +
        "px) rotateY(" +
        rotateY.toFixed(2) +
        "deg)";
      card.style.opacity = opacity.toFixed(3);
      card.style.filter = "brightness(" + brightness.toFixed(3) + ") blur(" + blur.toFixed(2) + "px)";
      card.style.zIndex = String(Math.round(2000 - distance * 20));
      card.style.pointerEvents = visible && opacity > 0.05 ? "auto" : "none";
      const tint = card.querySelector(".depth-carousel__tint");
      if (tint) tint.style.opacity = Math.min(behind * settings.falloff, 0.72).toFixed(3);
    });
  }

  function tweenTo(target, animate = true) {
    tween?.kill();
    if (!animate || reduceMotion.matches) {
      position = target;
      layout(position);
      return;
    }
    if (window.anime) {
      const proxy = { position };
      const anim = anime({
        targets: proxy,
        position: target,
        duration: 700,
        easing: "easeOutCubic",
        update: () => {
          position = proxy.position;
          layout(position);
        },
        complete: () => {
          position = ((position % items.length) + items.length) % items.length;
          layout(position);
        },
      });
      tween = {
        kill() {
          anim.pause();
        },
      };
    } else {
      tween = tweenValue({
        start: position,
        end: target,
        duration: 700,
        onUpdate: (value) => {
          position = value;
          layout(position);
        },
        onComplete: () => {
          position = ((position % items.length) + items.length) % items.length;
          layout(position);
        },
      });
    }
  }

  function setFocus(rawIndex, animate = true) {
    if (!items.length) return;
    const index = ((rawIndex % items.length) + items.length) % items.length;
    let delta = index - position;
    if (items.length > 1) {
      delta = ((delta % items.length) + items.length) % items.length;
      if (delta > items.length / 2) delta -= items.length;
    }
    tweenTo(position + delta, animate);
    updateInfo(index);
  }

  function navigate(step) {
    setFocus(activeIndex + step, true);
  }

  function stopAutoplay() {
    window.clearInterval(autoplayTimer);
    autoplayTimer = null;
  }

  function startAutoplay() {
    stopAutoplay();
    if (items.length < 2 || reduceMotion.matches || paused || !inView) return;
    autoplayTimer = window.setInterval(() => navigate(1), 5200);
  }

  cards.forEach((card, index) => {
    const video = videos[index];
    const markReady = () => card.classList.add("is-ready");
    const markError = () => card.classList.add("has-error");
    video?.addEventListener("loadeddata", markReady, { once: true });
    video?.addEventListener("error", markError, { once: true });
    if (video?.readyState >= 2) markReady();
    card.addEventListener("click", () => {
      if (suppressClick) return;
      if (index === activeIndex) scrollToModule(items[index].slug);
      else setFocus(index, true);
    });
  });

  dots.forEach((dot, index) => dot.addEventListener("click", () => setFocus(index, true)));
  previousButton?.addEventListener("click", () => navigate(-1));
  nextButton?.addEventListener("click", () => navigate(1));
  openButton.addEventListener("click", () => scrollToModule(items[activeIndex].slug));

  root.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      navigate(-1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      navigate(1);
    }
  });

  root.addEventListener(
    "wheel",
    (event) => {
      if (items.length < 2) return;
      const horizontalIntent = Math.abs(event.deltaX) > Math.abs(event.deltaY) || event.shiftKey;
      if (!horizontalIntent) return;
      event.preventDefault();
      const delta = event.deltaX || event.deltaY;
      position += Math.max(-0.55, Math.min(0.55, delta / Math.max(config().cardWidth * 0.9, 1)));
      layout(position);
      window.clearTimeout(wheelTimer);
      wheelTimer = window.setTimeout(() => setFocus(Math.round(position), true), 130);
    },
    { passive: false },
  );

  root.addEventListener("pointerdown", (event) => {
    if (items.length < 2 || event.target.closest("button:not([data-carousel-card])")) return;
    tween?.kill();
    drag = { startX: event.clientX, startPosition: position, id: event.pointerId, moved: false };
  });

  root.addEventListener("pointermove", (event) => {
    if (!drag) return;
    const delta = event.clientX - drag.startX;
    if (!drag.moved && Math.abs(delta) > 5) {
      drag.moved = true;
      root.setPointerCapture(drag.id);
    }
    if (!drag.moved) return;
    drag.delta = delta;
    if (dragFrame) return;
    dragFrame = window.requestAnimationFrame(() => {
      dragFrame = null;
      if (!drag) return;
      position = drag.startPosition - drag.delta / Math.max(config().cardWidth * 0.62, 80);
      layout(position);
    });
  });

  function finishDrag() {
    if (!drag) return;
    if (dragFrame) {
      window.cancelAnimationFrame(dragFrame);
      dragFrame = null;
    }
    const moved = drag.moved;
    drag = null;
    if (!moved) return;
    suppressClick = true;
    window.setTimeout(() => {
      suppressClick = false;
    }, 80);
    setFocus(Math.round(position), true);
  }

  root.addEventListener("pointerup", finishDrag);
  root.addEventListener("pointercancel", finishDrag);
  root.addEventListener("mouseenter", stopAutoplay);
  root.addEventListener("mouseleave", startAutoplay);
  root.addEventListener("focusin", stopAutoplay);
  root.addEventListener("focusout", startAutoplay);

  const resizeObserver = new ResizeObserver(() => layout(position));
  const visibilityObserver = "IntersectionObserver" in window
    ? new IntersectionObserver(([entry]) => {
        inView = entry.isIntersecting;
        if (inView) {
          updatePlayback();
          startAutoplay();
        } else {
          stopAutoplay();
          updatePlayback();
        }
      }, { threshold: 0.08 })
    : null;
  resizeObserver.observe(root);
  visibilityObserver?.observe(root);
  updateInfo(0);
  layout(0);
  startAutoplay();

  return {
    pause() {
      paused = true;
      stopAutoplay();
      updatePlayback();
    },
    resume() {
      paused = false;
      updatePlayback();
      startAutoplay();
    },
    destroy() {
      tween?.kill();
      if (dragFrame) window.cancelAnimationFrame(dragFrame);
      stopAutoplay();
      window.clearTimeout(wheelTimer);
      resizeObserver.disconnect();
      visibilityObserver?.disconnect();
      videos.forEach((video) => video?.pause());
    },
  };
}

function openProject(slug) {
  const project = projects.find((item) => item.slug === slug);
  if (!project) return;

  dialogBody.innerHTML = [
    '<article class="video-modal">',
    '<header class="video-modal__head">',
    '<p class="video-modal__meta">',
    project.type,
    " / ",
    project.duration,
    '</p><h2 id="dialogTitle">',
    project.title,
    '</h2><p class="video-modal__lead">',
    project.detail,
    "</p></header>",
    '<div class="video-modal__media">',
    '<video controls autoplay playsinline preload="metadata" poster="',
    project.poster || "",
    '"><source src="',
    project.media,
    '" type="video/mp4" /></video>',
    "</div></article>",
  ].join("");

  heroVideo.pause();
  activeCarousel?.pause();
  dialog.showModal();
  document.body.classList.add("dialog-open");
}

function closeProject() {
  dialog.querySelector("video")?.pause();
  document.body.classList.remove("dialog-open");
  dialog.close();
}

heroSound.addEventListener("click", () => {
  heroVideo.muted = !heroVideo.muted;
  heroSound.setAttribute("aria-pressed", String(!heroVideo.muted));
  const iconOff = heroSound.querySelector(".sound-icon--off");
  const iconOn = heroSound.querySelector(".sound-icon--on");
  if (iconOff && iconOn) {
    iconOff.style.display = heroVideo.muted ? "" : "none";
    iconOn.style.display = heroVideo.muted ? "none" : "";
  }
});

menuButton.addEventListener("click", () => {
  const open = document.body.classList.toggle("menu-open");
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.textContent = open ? "Close" : "Menu";
});

siteNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("menu-open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.textContent = "Menu";
  });
});

dialogClose.addEventListener("click", closeProject);
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) closeProject();
});
dialog.addEventListener("close", () => {
  document.body.classList.remove("dialog-open");
  activeCarousel?.resume();
  if (!document.hidden) heroVideo.play().catch(() => {});
});

const mediaObserver = "IntersectionObserver" in window
  ? new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          if (entry.isIntersecting && !reduceMotion.matches) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.48 },
    )
  : null;

document.querySelectorAll("[data-autoplay-in-view]").forEach((video) => {
  if (mediaObserver) mediaObserver.observe(video);
});

const heroHeaderObserver = new IntersectionObserver(
  ([entry]) => siteHeader.classList.toggle("is-hero", entry.isIntersecting),
  { threshold: 0.35 },
);

heroHeaderObserver.observe(document.querySelector("#home"));

function initializeBorderGlow() {
  const frames = [...document.querySelectorAll("[data-border-glow]")];
  if (!frames.length) return;

  const updateGlow = (frame, event) => {
    const rect = frame.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const deltaX = x - centerX;
    const deltaY = y - centerY;
    const scaleX = deltaX === 0 ? Infinity : centerX / Math.abs(deltaX);
    const scaleY = deltaY === 0 ? Infinity : centerY / Math.abs(deltaY);
    const proximity = Math.min(Math.max(1 / Math.min(scaleX, scaleY), 0), 1);
    let angle = (Math.atan2(deltaY, deltaX) * 180) / Math.PI + 90;
    if (angle < 0) angle += 360;
    frame.style.setProperty("--edge-proximity", (proximity * 100).toFixed(3));
    frame.style.setProperty("--cursor-angle", `${angle.toFixed(3)}deg`);
  };

  const sweepFrame = (frame) => {
    if (reduceMotion.matches || !window.anime) return;
    const sweep = { edge: 0, angle: 110 };
    frame.classList.add("sweep-active");
    anime
      .timeline({
        update: () => {
          frame.style.setProperty("--edge-proximity", sweep.edge.toFixed(3));
          frame.style.setProperty("--cursor-angle", `${sweep.angle.toFixed(3)}deg`);
        },
        complete: () => frame.classList.remove("sweep-active"),
      })
      .add({ targets: sweep, edge: 76, duration: 500, easing: "easeOutCubic" })
      .add({ targets: sweep, angle: 465, duration: 2100, easing: "easeInOutQuad" }, 0)
      .add({ targets: sweep, edge: 0, duration: 1100, easing: "easeInQuad" }, 1250);
  };

  frames.forEach((frame) => {
    let glowFrame = null;
    let latestPointer = null;
    frame.addEventListener("pointermove", (event) => {
      latestPointer = event;
      if (glowFrame) return;
      glowFrame = window.requestAnimationFrame(() => {
        glowFrame = null;
        if (latestPointer) updateGlow(frame, latestPointer);
        latestPointer = null;
      });
    });
    frame.addEventListener("pointerleave", () => frame.style.setProperty("--edge-proximity", "0"));
    frame.addEventListener("focusin", () => frame.style.setProperty("--edge-proximity", "78"));
    frame.addEventListener("focusout", () => frame.style.setProperty("--edge-proximity", "0"));

    if (reduceMotion.matches) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      sweepFrame(frame);
    }, { threshold: 0.35 });
    observer.observe(frame);
  });
}

function initializeWorkBorderGlow() {
  const frame = document.querySelector("[data-work-border-glow]");
  if (!frame) return;

  function setFromPointer(event) {
    const rect = frame.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const deltaX = x - centerX;
    const deltaY = y - centerY;
    const scaleX = deltaX === 0 ? Infinity : centerX / Math.abs(deltaX);
    const scaleY = deltaY === 0 ? Infinity : centerY / Math.abs(deltaY);
    const proximity = Math.min(Math.max(1 / Math.min(scaleX, scaleY), 0), 1);
    let angle = (Math.atan2(deltaY, deltaX) * 180) / Math.PI + 90;
    if (angle < 0) angle += 360;
    frame.style.setProperty("--edge-proximity", (proximity * 100).toFixed(3));
    frame.style.setProperty("--cursor-angle", `${angle.toFixed(3)}deg`);
  }

  let glowFrame = null;
  let latestPointer = null;
  frame.addEventListener("pointermove", (event) => {
    latestPointer = event;
    if (glowFrame) return;
    glowFrame = window.requestAnimationFrame(() => {
      glowFrame = null;
      if (latestPointer) setFromPointer(latestPointer);
      latestPointer = null;
    });
  });
  frame.addEventListener("pointerleave", () => frame.style.setProperty("--edge-proximity", "0"));
  frame.addEventListener("focusin", () => {
    frame.style.setProperty("--edge-proximity", "78");
    frame.style.setProperty("--cursor-angle", "90deg");
  });
  frame.addEventListener("focusout", (event) => {
    if (!frame.contains(event.relatedTarget)) frame.style.setProperty("--edge-proximity", "0");
  });

  if (reduceMotion.matches || !window.anime) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const sweep = { edge: 0, angle: 110 };
      frame.classList.add("is-sweeping");
      anime
        .timeline({
          update: () => {
            frame.style.setProperty("--edge-proximity", sweep.edge.toFixed(3));
            frame.style.setProperty("--cursor-angle", `${sweep.angle.toFixed(3)}deg`);
          },
          complete: () => frame.classList.remove("is-sweeping"),
        })
        .add({ targets: sweep, edge: 76, duration: 450, easing: "easeOutCubic" })
        .add({ targets: sweep, angle: 465, duration: 1900, easing: "easeInOutQuad" }, 0)
        .add({ targets: sweep, edge: 0, duration: 900, easing: "easeInQuad" }, 1100);
    },
    { threshold: 0.01 },
  );

  observer.observe(frame);
}

/* 组件级边界光 + 聚光：.glow-card / .glow-chip 随鼠标亮暗跟随（事件委托，动态元素自动生效） */
function initializeComponentGlow() {
  const isGlow = (target) =>
    target instanceof Element ? target.closest(".glow-card, .glow-chip") : null;

  let raf = null;
  let latest = null;
  let hovered = null;

  const applyGlow = (el, event) => {
    const rect = el.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const deltaX = x - centerX;
    const deltaY = y - centerY;
    const scaleX = deltaX === 0 ? Infinity : centerX / Math.abs(deltaX);
    const scaleY = deltaY === 0 ? Infinity : centerY / Math.abs(deltaY);
    const proximity = Math.min(Math.max(1 / Math.min(scaleX, scaleY), 0), 1);
    let angle = (Math.atan2(deltaY, deltaX) * 180) / Math.PI + 90;
    if (angle < 0) angle += 360;
    el.style.setProperty("--edge-proximity", (proximity * 100).toFixed(3));
    el.style.setProperty("--cursor-angle", `${angle.toFixed(3)}deg`);
    el.style.setProperty("--spotlight-x", `${Math.min(Math.max((x / rect.width) * 100, 0), 100)}%`);
    el.style.setProperty("--spotlight-y", `${Math.min(Math.max((y / rect.height) * 100, 0), 100)}%`);
  };

  document.addEventListener(
    "pointermove",
    (event) => {
      latest = { el: isGlow(event.target), event };
      if (raf) return;
      raf = window.requestAnimationFrame(() => {
        raf = null;
        const current = latest;
        latest = null;
        if (!current) return;
        if (hovered && hovered !== current.el) {
          hovered.style.setProperty("--edge-proximity", "0");
          hovered = null;
        }
        if (!current.el) return;
        hovered = current.el;
        applyGlow(hovered, current.event);
      });
    },
    { passive: true },
  );

  document.addEventListener(
    "focusin",
    (event) => {
      const el = isGlow(event.target);
      if (el) el.style.setProperty("--edge-proximity", "78");
    },
    true,
  );

  document.addEventListener(
    "focusout",
    (event) => {
      const el = isGlow(event.target);
      if (el) el.style.setProperty("--edge-proximity", "0");
    },
    true,
  );
}

initializeBorderGlow();
initializeWorkBorderGlow();
initializeHeroEntrance();
initializeSectionEntrance();

filters.forEach((button) => {
  button.addEventListener("click", () => setFilter(button.dataset.filter));
});

renderModules();
initializeComponentGlow();
revealElements();

/* 全局鼠标光晕：跨组件连续跟随，增强鼠标移动连贯性 */
(function initializeCursorHalo() {
  const halo = document.getElementById("cursorHalo");
  if (!halo) return;
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  if (!finePointer || reduceMotion.matches) return;

  document.body.classList.add("halo-on");

  let haloFrame = null;
  let latestX = window.innerWidth / 2;
  let latestY = window.innerHeight / 2;
  halo.style.transform = `translate3d(${latestX}px, ${latestY}px, 0)`;

  window.addEventListener(
    "pointermove",
    (event) => {
      latestX = event.clientX;
      latestY = event.clientY;
      if (haloFrame) return;
      haloFrame = window.requestAnimationFrame(() => {
        haloFrame = null;
        halo.style.transform = `translate3d(${latestX}px, ${latestY}px, 0)`;
      });
    },
    { passive: true },
  );
})();

/* 底部视频上边缘模糊渐变：以视频上边缘为中线，向上/向下各 80px 晕开渐浅，
   中线颜色动态取样视频边缘像素（随播放画面变化实时更新） */
(function initializeBottomEdgeFade() {
  const media = document.querySelector(".contact-bottom-media");
  if (!media) return;
  const video = media.querySelector("video");
  const overlay = media.querySelector(".contact-bottom-media__edge-fade");
  if (!video || !overlay) return;

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  const SAMPLE_ROW = 4;    // 从视频内容顶部往下取样的行
  const MAX_STRIP_W = 120; // 取样宽度上限，控制成本

  /* 兜底色：优先取联系区背景色，取样被跨域画布污染时保留该渐变 */
  const fallbackRgb = (() => {
    const el = document.querySelector(".contact-section") || document.body;
    const color = getComputedStyle(el).backgroundColor;
    const m = color.match(/rgba?\(\s*(\d+)[,\s]+(\d+)[,\s]+(\d+)/);
    return m ? `${m[1]}, ${m[2]}, ${m[3]}` : "10, 10, 12";
  })();

  let lastKey = "";
  overlay.style.background =
    `linear-gradient(180deg, transparent 0%, rgba(${fallbackRgb}, 0.95) 50%, transparent 100%)`;

  function applyColor(r, g, b) {
    const key = `${r},${g},${b}`;
    if (key === lastKey) return;
    lastKey = key;
    overlay.style.background =
      `linear-gradient(180deg, transparent 0%, rgba(${r}, ${g}, ${b}, 0.95) 50%, transparent 100%)`;
  }

  function sample() {
    const vw = video.videoWidth;
    const vh = video.videoHeight;
    if (!vw || !vh || video.readyState < 2) return;
    try {
      const stripW = Math.min(vw, MAX_STRIP_W);
      canvas.width = stripW;
      canvas.height = 1;
      ctx.drawImage(video, 0, Math.min(SAMPLE_ROW, vh - 1), vw, 1, 0, 0, stripW, 1);
      const data = ctx.getImageData(0, 0, stripW, 1).data;
      let r = 0;
      let g = 0;
      let b = 0;
      for (let i = 0; i < data.length; i += 4) {
        r += data[i];
        g += data[i + 1];
        b += data[i + 2];
      }
      const n = data.length / 4;
      applyColor(Math.round(r / n), Math.round(g / n), Math.round(b / n));
    } catch (err) {
      /* 跨域视频使画布被污染时保留兜底色渐变 */
    }
  }

  ["loadedmetadata", "loadeddata", "play", "seeked", "timeupdate"].forEach((type) => {
    video.addEventListener(type, sample, { passive: true });
  });
  sample();
})();
