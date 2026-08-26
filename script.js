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
    poster: "https://zhy-video-bucket.oss-cn-beijing.aliyuncs.com/%E5%BD%B1%E8%A7%86%E4%BD%9C%E5%93%81%E9%9B%86/%E6%8A%96%E9%9F%B3%E7%9F%AD%E8%A7%86%E9%A2%91/%E6%8A%96%E9%9F%B3%E7%9F%AD%E8%A7%86%E9%A2%91_%E5%90%B9%E9%A3%8E%E6%9C%BA_%E4%BA%A7%E5%93%81%E7%A7%8D%E8%8D%89%E7%9F%AD%E7%89%87_%E5%B0%81%E9%9D%A2.png",
    layout: "portrait",
  },
  {
    slug: "mstudioarts-fashion",
    title: "MStudioArts 时尚艺术片",
    type: "音效设计",
    category: "sound",
    duration: "76 sec",
    intro: "用声音层次与节奏点强化时尚影像的身体感。",
    detail:
      "围绕画面运动、材质和剪辑节点设计声音，通过氛围、冲击与留白，让时尚艺术片获得更明确的空间和力度。",
    role: "声音概念 / 音效设计 / 节奏包装",
    focus: "声音与视觉动作的精确咬合",
    highlights: ["建立材质化声音语言", "强化动作与转场节点", "保持时尚影像的留白"],
    media: "./assets/videos/sound-mstudioarts-fashion-film.mp4",
    layout: "wide",
  },
  {
    slug: "lg-cinebeam",
    title: "LG CineBeam 投影产品广告",
    type: "音效设计",
    category: "sound",
    duration: "69 sec",
    intro: "围绕空间体验构建科技产品的沉浸式声音。",
    detail:
      "以投影产品的空间体验为核心，让电子质感、环境声和场景变化共同服务产品的高级感与沉浸感。",
    role: "音效设计 / 场景氛围 / 产品声音",
    focus: "科技产品的空间化听觉体验",
    highlights: ["设计克制的科技声音", "连接产品与空间变化", "保持广告级声音完成度"],
    media: "./assets/videos/sound-lg-cinebeam-product-ad.mp4",
    layout: "standard",
  },
  {
    slug: "existence-dance",
    title: "存在",
    type: "音效设计",
    category: "sound",
    duration: "51 sec",
    intro: "舞蹈艺术片的动作声音、空间回响与情绪张力。",
    detail:
      "从身体运动出发设计声音层级，使动作、空间和画面节奏彼此回应，强化舞蹈影像的张力与呼吸。",
    role: "动作音效 / 空间设计 / 情绪节奏",
    focus: "身体动作与空间回响的关系",
    highlights: ["捕捉动作力度变化", "塑造具有距离感的声场", "用留白承接舞蹈呼吸"],
    media: "./assets/videos/sound-existence-dance-film.mp4",
    layout: "portrait",
  },
  {
    slug: "forest-emotion",
    title: "森系情绪广告",
    type: "音效设计",
    category: "sound",
    duration: "92 sec",
    intro: "以自然声场和情绪化节奏构建森系广告氛围。",
    detail:
      "通过风、环境与细微质感建立自然声场，再以音乐和剪辑节点控制情绪推进，让画面保持轻盈和呼吸感。",
    role: "环境声 / 情绪设计 / 广告声音",
    focus: "自然氛围与商业影像节奏",
    highlights: ["建立连续自然声场", "控制声音密度与留白", "以情绪变化推动观看"],
    media: "./assets/videos/sound-forest-emotion-ad.mp4",
    layout: "standard",
  },
];

const workGrid = document.querySelector("#workGrid");
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

/* 主站展示顺序：第一个为音效设计，其余保持原顺序，左右布局按此顺序交替 */
const orderedProjects = [
  "mstudioarts-fashion",
  "buick-envision-plus",
  "mermaid-romance",
  "wuliangye-brand-film",
  "tianhe-jiuxi",
  "hairdryer-douyin",
  "lg-cinebeam",
  "existence-dance",
  "forest-emotion",
]
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter(Boolean);

function escapeAttr(value) {
  return String(value).replace(/"/g, "&quot;");
}

function collectionCard(project, index, total) {
  const poster = project.poster ? ' poster="' + escapeAttr(project.poster) + '"' : "";
  const num = String(index + 1).padStart(2, "0");
  return [
    '<button class="work-collection__card" type="button" data-collection-card data-slug="',
    project.slug,
    '" aria-label="查看',
    project.title,
    '项目详情">',
    '<span class="work-collection__cover">',
    '<video class="work-collection__video" muted playsinline preload="metadata"',
    poster,
    ' aria-hidden="true"><source src="',
    escapeAttr(project.media),
    '" type="video/mp4" /></video>',
    '<span class="work-collection__index" aria-hidden="true">',
    num,
    "</span>",
    "</span>",
    '<span class="work-collection__body">',
    '<span class="work-collection__type">',
    project.type,
    "</span>",
    '<span class="work-collection__title">',
    project.title,
    "</span>",
    '<span class="work-collection__cta">查看项目详情</span>',
    "</span>",
    "</button>",
  ].join("");
}

function projectModule(project, index, total) {
  const flip = index % 2 === 1 ? " work-module--flip" : "";
  const poster = project.poster ? ' poster="' + escapeAttr(project.poster) + '"' : "";
  const num = String(index + 1).padStart(2, "0");
  return [
    '<article class="work-module reveal',
    flip,
    '" id="module-',
    project.slug,
    '" aria-labelledby="moduleTitle-',
    project.slug,
    '">',
    '<div class="work-module__media">',
    '<video class="work-module__video" muted playsinline preload="metadata"',
    poster,
    ' aria-hidden="true"><source src="',
    escapeAttr(project.media),
    '" type="video/mp4" /></video>',
    '<span class="work-module__play" aria-hidden="true"></span>',
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
    '">查看作品</button>',
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

function renderWork() {
  const total = orderedProjects.length;
  workGrid.innerHTML = [
    '<div class="work-collection reveal">',
    '<div class="work-collection__head">',
    "<h3>作品集合集</h3>",
    "<p>视频仅展示封面；点击「查看项目详情」可快速跳转到下方对应作品模块。</p>",
    "</div>",
    '<div class="work-collection__grid">',
    orderedProjects.map((project, index) => collectionCard(project, index, total)).join(""),
    "</div>",
    "</div>",
    '<div class="work-modules">',
    orderedProjects.map((project, index) => projectModule(project, index, total)).join(""),
    "</div>",
  ].join("");

  workGrid.querySelectorAll("[data-collection-card]").forEach((card) => {
    card.addEventListener("click", () => {
      const target = document.getElementById("module-" + card.dataset.slug);
      if (!target) return;
      target.scrollIntoView({ behavior: reduceMotion.matches ? "auto" : "smooth", block: "start" });
    });
  });

  workGrid.querySelectorAll("[data-open-video]").forEach((button) => {
    button.addEventListener("click", () => openProject(button.dataset.openVideo));
  });

  revealElements(workGrid);
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
  heroSound.textContent = heroVideo.muted ? "Sound off" : "Sound on";
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

renderWork();
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
