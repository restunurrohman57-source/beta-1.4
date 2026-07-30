/* ============================================================================
   DAFTAR ISI
   0.  DATA           — SKILLS, LANGUAGES, CERTS, FIELDS, CONTACTS
   1.  BAHASA (i18n)
   2.  TEMA GELAP/TERANG
   3.  MASKOT ROBOT
   4.  INTRO MOBIL — sekali putar otomatis (tidak scroll-linked, tanpa blur)
   5.  HERO — starfield + reveal
   6.  HEADER (scroll shadow)
   7.  MENU HAMBURGER
   8.  SLIDESHOW KENANGAN
   9.  MARQUEE SKILL
   10. RENDER PROJECT, KONTAK, BAHASA, SERTIFIKAT, BIDANG
   11. REVEAL ON SCROLL
   ============================================================================ */
(function () {
  "use strict";

  /* ==========================================================================
     0. DATA
     ========================================================================== */
  var SKILLS = [
    { key: "html", name: "HTML", level: 95, trend: [40, 55, 78, 95], badge: { bg: "#E34F26", fg: "#fff", label: "5" } },
    { key: "css", name: "CSS", level: 90, trend: [35, 50, 70, 90], badge: { bg: "#2965F1", fg: "#fff", label: "3" } },
    { key: "js", name: "JavaScript", level: 85, trend: [20, 40, 65, 85], badge: { bg: "#F0DB4F", fg: "#1a1a1a", label: "JS" } },
    { key: "ts", name: "TypeScript", level: 70, trend: [10, 30, 50, 70], badge: { bg: "#3178C6", fg: "#fff", label: "TS" } },
    { key: "py", name: "Python", level: 80, trend: [15, 35, 55, 80], badge: { bg: "#3776AB", fg: "#fff", label: "Py" } },
    { key: "java", name: "Java", level: 65, trend: [10, 25, 45, 65], badge: { bg: "#ED8B00", fg: "#fff", label: "J" } },
    { key: "c", name: "C", level: 60, trend: [10, 25, 40, 60], badge: { bg: "#A8B9CC", fg: "#1a1a1a", label: "C" } },
    { key: "cpp", name: "C++", level: 55, trend: [10, 20, 38, 55], badge: { bg: "#00599C", fg: "#fff", label: "C++" } },
    { key: "csharp", name: "C#", level: 50, trend: [8, 20, 35, 50], badge: { bg: "#68217A", fg: "#fff", label: "C#" } },
    { key: "php", name: "PHP", level: 55, trend: [10, 22, 38, 55], badge: { bg: "#777BB4", fg: "#fff", label: "php" } },
    { key: "ruby", name: "Ruby", level: 40, trend: [5, 15, 28, 40], badge: { bg: "#CC342D", fg: "#fff", label: "Rb" } },
    { key: "go", name: "Go", level: 45, trend: [5, 18, 30, 45], badge: { bg: "#00ADD8", fg: "#fff", label: "Go" } },
    { key: "rust", name: "Rust", level: 35, trend: [5, 12, 22, 35], badge: { bg: "#DEA584", fg: "#1a1a1a", label: "Rs" } },
    { key: "swift", name: "Swift", level: 40, trend: [5, 15, 26, 40], badge: { bg: "#FA7343", fg: "#fff", label: "Sw" } },
    { key: "kotlin", name: "Kotlin", level: 45, trend: [5, 16, 30, 45], badge: { bg: "#7F52FF", fg: "#fff", label: "K" } },
    { key: "dart", name: "Dart", level: 40, trend: [5, 14, 26, 40], badge: { bg: "#0175C2", fg: "#fff", label: "Dt" } },
    { key: "sql", name: "SQL", level: 70, trend: [15, 32, 52, 70], badge: { bg: "#4479A1", fg: "#fff", label: "DB" } },
  ];

  // Bahasa asing (bukan bahasa pemrograman) — level cuma contoh, sesuaikan.
  var LANGUAGES = [
    { flag: "🇮🇩", name: "Indonesia", level: 100 },
    { flag: "🇬🇧", name: "English", level: 60 },
    { flag: "🇯🇵", name: "日本語 (Jepang)", level: 25 },
  ];

  // Placeholder — ganti/hapus sesuai sertifikat asli yang kamu punya.
  var CERTS = [
    { icon: "📜", name: "Contoh: JLPT N5", issuer: "Ganti dengan sertifikat aslimu" },
  ];

  // Placeholder chip bidang/minat kerja.
  var FIELDS = ["Web Developer", "IT Support", "Database", "Otomasi"];

  var CONTACTS = [
    { icon: "💬", label: "WhatsApp", value: "0878-1756-7212", href: "https://wa.me/6287817567212" },
    { icon: "✉️", label: "Email", value: "restunurrohman57@gmail.com", href: "mailto:restunurrohman57@gmail.com" },
    { icon: "📸", label: "Instagram", value: "@restunurrokhman", href: "https://www.instagram.com/restunurrokhman?igsh=MTZmaGh6dDdvOTlnaA==" },
  ];

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ==========================================================================
     1. BAHASA (i18n)
     ========================================================================== */
  var TRANSLATIONS = {
    id: {
      flag: "🇮🇩",
      scrollHint: "Scroll untuk melihat lebih ↓",
      navHero: "Beranda",
      heroBadge: "Terbuka untuk Kolaborasi",
      heroGreeting: "Selamat datang, gw",
      heroRolePrefix: "Saya seorang",
      heroRole: "Pelajar IT",
      heroDesc: "Belajar membangun web modern, dari tampilan sampai logikanya.",
      heroBtnProject: "Lihat Project →",
      heroBtnContact: "Hubungi Saya",
      heroSocialLabel: "KONEKSI:",
      eyebrowBackground: "Latar",
      headingBackground: "Jejak & cerita",
      eyebrowSkill: "Kemampuan",
      headingSkill: "Skill",
      subheadProgramming: "Bahasa Pemrograman",
      subheadLanguage: "Bahasa",
      subheadCert: "Sertifikat Bahasa",
      subheadField: "Job / Bidang",
      skillHint: "Klik salah satu ikon atau kartu untuk menyorotnya di tengah.",
      skillLevelLabel: "Tingkatan",
      eyebrowProject: "Hasil karya",
      headingProject: "Project",
      eyebrowMoto: "Moto",
      motoQuote: "“Diam bukan perilaku yang buruk, tapi sedang mencari kesempatan untuk kesuksesan, seperti sedang mengasah pedang sampai tidak sadar membelah lautan.”",
      eyebrowKontak: "Kontak",
      headingKontak: "Mari terhubung",
      footerNote: "© 2026 Restu Nurrokhman — dibangun dengan HTML, CSS &amp; JS.",
      projectLinkLabel: "Lihat project →",
      projects: [
        { title: "Project Satu", desc: "Deskripsi singkat project pertamamu — apa yang dibangun dan teknologi yang dipakai.", link: "https://" },
        { title: "Project Dua", desc: "Deskripsi singkat project kedua. Ganti judul, deskripsi, dan link sesuai karya aslimu.", link: "https://" },
        { title: "Project Tiga", desc: "Tambah atau kurangi kartu project dengan mengedit array projects di TRANSLATIONS.", link: "https://" },
      ],
    },
    en: {
      flag: "🇬🇧",
      scrollHint: "Scroll to see more ↓",
      navHero: "Home",
      heroBadge: "Open for Collaboration",
      heroGreeting: "Welcome, I'm",
      heroRolePrefix: "I'm a",
      heroRole: "IT Student",
      heroDesc: "Learning to build modern web apps, from the interface down to the logic.",
      heroBtnProject: "View Projects →",
      heroBtnContact: "Contact Me",
      heroSocialLabel: "CONNECT:",
      eyebrowBackground: "Background",
      headingBackground: "Journey & story",
      eyebrowSkill: "Skills",
      headingSkill: "Skills",
      subheadProgramming: "Programming Languages",
      subheadLanguage: "Languages",
      subheadCert: "Language Certificates",
      subheadField: "Job / Field",
      skillHint: "Click an icon or card to bring it to the center.",
      skillLevelLabel: "Level",
      eyebrowProject: "Work",
      headingProject: "Projects",
      eyebrowMoto: "Motto",
      motoQuote: "“Silence isn't a bad habit — it's a search for the opportunity to succeed, like sharpening a sword without noticing it has already parted the sea.”",
      eyebrowKontak: "Contact",
      headingKontak: "Let's connect",
      footerNote: "© 2026 Restu Nurrokhman — built with HTML, CSS &amp; JS.",
      projectLinkLabel: "View project →",
      projects: [
        { title: "Project One", desc: "A short description of your first project — what you built and the tech you used.", link: "https://" },
        { title: "Project Two", desc: "A short description of your second project. Swap the title, description, and link.", link: "https://" },
        { title: "Project Three", desc: "Add or remove project cards by editing the projects array inside TRANSLATIONS.", link: "https://" },
      ],
    },
    ja: {
      flag: "🇯🇵",
      scrollHint: "スクロールして見る ↓",
      navHero: "ホーム",
      heroBadge: "コラボレーション募集中",
      heroGreeting: "ようこそ、僕は",
      heroRolePrefix: "職業:",
      heroRole: "IT学生",
      heroDesc: "見た目からロジックまで、モダンなWebアプリの作り方を学んでいます。",
      heroBtnProject: "プロジェクトを見る →",
      heroBtnContact: "連絡する",
      heroSocialLabel: "つながる:",
      eyebrowBackground: "背景",
      headingBackground: "軌跡と物語",
      eyebrowSkill: "スキル",
      headingSkill: "スキル",
      subheadProgramming: "プログラミング言語",
      subheadLanguage: "言語",
      subheadCert: "語学認定資格",
      subheadField: "職種 / 分野",
      skillHint: "アイコンまたはカードをクリックすると中央に表示されます。",
      skillLevelLabel: "レベル",
      eyebrowProject: "実績",
      headingProject: "プロジェクト",
      eyebrowMoto: "モットー",
      motoQuote: "「沈黙は悪い態度ではなく、成功の機会を探しているだけ。まるで剣を研ぎ続けるうちに、気づかぬまま海を切り開くように。」",
      eyebrowKontak: "連絡先",
      headingKontak: "つながりましょう",
      footerNote: "© 2026 Restu Nurrokhman — HTML、CSS、JSで制作。",
      projectLinkLabel: "プロジェクトを見る →",
      projects: [
        { title: "プロジェクト1", desc: "最初のプロジェクトの簡単な説明 — 何を作り、どんな技術を使ったか。", link: "https://" },
        { title: "プロジェクト2", desc: "2つ目のプロジェクトの説明。タイトル・説明・リンクを実際の作品に合わせて変更してください。", link: "https://" },
        { title: "プロジェクト3", desc: "TRANSLATIONS内のprojects配列を編集してカードを増減できます。", link: "https://" },
      ],
    },
    zh: {
      flag: "🇨🇳",
      scrollHint: "向下滚动查看更多 ↓",
      navHero: "首页",
      heroBadge: "欢迎合作",
      heroGreeting: "欢迎，我是",
      heroRolePrefix: "我是一名",
      heroRole: "IT专业学生",
      heroDesc: "正在学习构建现代网页应用，从界面到逻辑。",
      heroBtnProject: "查看项目 →",
      heroBtnContact: "联系我",
      heroSocialLabel: "联系方式:",
      eyebrowBackground: "背景",
      headingBackground: "足迹与故事",
      eyebrowSkill: "技能",
      headingSkill: "技能",
      subheadProgramming: "编程语言",
      subheadLanguage: "语言",
      subheadCert: "语言证书",
      subheadField: "职业 / 领域",
      skillHint: "点击图标或卡片可将其居中显示。",
      skillLevelLabel: "级别",
      eyebrowProject: "作品",
      headingProject: "项目",
      eyebrowMoto: "座右铭",
      motoQuote: "「沉默不是坏习惯,而是在寻找成功的机会,就像不断磨剑,不知不觉间劈开了大海。」",
      eyebrowKontak: "联系方式",
      headingKontak: "保持联系",
      footerNote: "© 2026 Restu Nurrokhman — 使用 HTML、CSS 和 JS 构建。",
      projectLinkLabel: "查看项目 →",
      projects: [
        { title: "项目一", desc: "第一个项目的简短介绍 — 做了什么、用了什么技术。", link: "https://" },
        { title: "项目二", desc: "第二个项目的简短介绍。请替换成你真实作品的标题、描述和链接。", link: "https://" },
        { title: "项目三", desc: "在 TRANSLATIONS 里的 projects 数组中增减项目卡片。", link: "https://" },
      ],
    },
  };

  var currentLang = "id";

  function applyLanguage(lang) {
    var t = TRANSLATIONS[lang];
    if (!t) return;
    currentLang = lang;
    document.documentElement.setAttribute("lang", lang);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (t[key] != null) el.innerHTML = t[key];
    });
    document.querySelectorAll("[data-i18n-title]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-title");
      if (t[key] != null) el.setAttribute("title", t[key]);
    });

    document.getElementById("lang-current-flag").textContent = t.flag;
    document.querySelectorAll(".lang-option").forEach(function (btn) {
      btn.classList.toggle("is-active", btn.dataset.lang === lang);
    });
    document.querySelectorAll(".skill-progress-label").forEach(function (el) {
      el.textContent = t.skillLevelLabel + " — " + el.dataset.level + "%";
    });

    renderProjects(t.projects, t.projectLinkLabel);
    try { localStorage.setItem("portfolio-lang", lang); } catch (e) {}
  }

  var langToggleBtn = document.getElementById("lang-toggle");
  var langMenu = document.getElementById("lang-menu");
  langToggleBtn.addEventListener("click", function () { langMenu.classList.toggle("is-open"); });
  langMenu.querySelectorAll(".lang-option").forEach(function (btn) {
    btn.addEventListener("click", function () {
      applyLanguage(btn.dataset.lang);
      langMenu.classList.remove("is-open");
    });
  });
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".lang-switcher")) langMenu.classList.remove("is-open");
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") langMenu.classList.remove("is-open");
  });

  function initLanguage() {
    var saved = null;
    try { saved = localStorage.getItem("portfolio-lang"); } catch (e) {}
    applyLanguage(saved && TRANSLATIONS[saved] ? saved : "id");
  }

  /* ==========================================================================
     2. TEMA GELAP/TERANG
     ========================================================================== */
  var root = document.documentElement;
  var themeToggleBtn = document.getElementById("theme-toggle");
  var iconDark = document.getElementById("theme-icon-dark");
  var iconLight = document.getElementById("theme-icon-light");

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    iconDark.hidden = theme !== "dark";
    iconLight.hidden = theme === "dark";
    try { localStorage.setItem("portfolio-theme", theme); } catch (e) {}
  }
  (function initTheme() {
    var saved = null;
    try { saved = localStorage.getItem("portfolio-theme"); } catch (e) {}
    if (saved === "light" || saved === "dark") applyTheme(saved);
    else applyTheme(window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
  })();
  themeToggleBtn.addEventListener("click", function () {
    applyTheme(root.getAttribute("data-theme") === "dark" ? "light" : "dark");
  });

  /* ==========================================================================
     3. MASKOT ROBOT
     ========================================================================== */
  var mascot = document.getElementById("robot-mascot");
  mascot.addEventListener("click", function () {
    mascot.style.animation = "none";
    mascot.style.transform = "rotate(0deg) scale(1.3)";
    window.setTimeout(function () { mascot.style.transform = ""; mascot.style.animation = ""; }, 260);
  });

  /* ==========================================================================
     4. INTRO MOBIL — sekali putar otomatis
     ----------------------------------------------------------------------------
     Bukan lagi discroll-scrub: canvas full-layar memutar 240 frame dari
     terurai ke terpasang dalam waktu tetap (~2.2 detik), lalu overlay-nya
     hilang dan halaman utama (Hero) langsung kelihatan. Hanya diputar SEKALI
     per sesi browser (sessionStorage) — reload/scroll ke atas tidak akan
     memutarnya lagi.
     ========================================================================== */
  var carIntro = document.getElementById("carIntro");
  var canvas = document.getElementById("intro-canvas");
  var ctx = canvas.getContext("2d");
  var TOTAL_FRAMES = 240;
  var PLAY_DURATION = 2200; // ms

  function framePath(i) {
    return "assets/frames/frame-" + String(i + 1).padStart(4, "0") + ".jpg";
  }

  var images = new Array(TOTAL_FRAMES).fill(null);
  var lastGoodBitmap = null;

  function loadFrame(index) {
    return new Promise(function (resolve) {
      if (images[index]) return resolve();
      var img = new Image();
      img.decoding = "async";
      img.src = framePath(index);
      function finish() { images[index] = img; resolve(); }
      if (img.decode) img.decode().then(finish).catch(finish);
      else { img.onload = finish; img.onerror = finish; }
    });
  }
  function getFrame(index) {
    var clamped = Math.max(0, Math.min(TOTAL_FRAMES - 1, index));
    if (images[clamped]) return images[clamped];
    for (var o = 1; o < TOTAL_FRAMES; o++) {
      var lo = clamped - o, hi = clamped + o;
      if (lo >= 0 && images[lo]) return images[lo];
      if (hi < TOTAL_FRAMES && images[hi]) return images[hi];
    }
    return null;
  }
  async function preload() {
    await loadFrame(239);
    await loadFrame(0);
    var queue = [];
    for (var i = 1; i < 239; i++) queue.push(i);
    var cursor = 0;
    async function worker() { while (cursor < queue.length) await loadFrame(queue[cursor++]); }
    await Promise.all([worker(), worker(), worker(), worker()]);
  }

  function resizeCanvas() {
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.floor(window.innerWidth * dpr);
    canvas.height = Math.floor(window.innerHeight * dpr);
  }

  function drawFrame(index) {
    var bitmap = getFrame(index);
    if (bitmap && bitmap.naturalWidth) lastGoodBitmap = bitmap;
    var toDraw = bitmap && bitmap.naturalWidth ? bitmap : lastGoodBitmap;
    var w = canvas.width, h = canvas.height;
    ctx.fillStyle = "#05060a";
    ctx.fillRect(0, 0, w, h);
    if (toDraw) {
      var isPortrait = h > w;
      var scale = isPortrait
        ? Math.min(w / toDraw.naturalWidth, h / toDraw.naturalHeight)
        : Math.max(w / toDraw.naturalWidth, h / toDraw.naturalHeight);
      var dw = toDraw.naturalWidth * scale, dh = toDraw.naturalHeight * scale;
      ctx.drawImage(toDraw, (w - dw) / 2, (h - dh) / 2, dw, dh);
    }
  }

  function finishIntro() {
    carIntro.style.transition = "opacity 500ms ease";
    carIntro.style.opacity = "0";
    window.setTimeout(function () {
      carIntro.classList.add("is-done");
      document.body.style.overflow = "";
    }, 520);
    try { sessionStorage.setItem("intro-played", "1"); } catch (e) {}
  }

  function playIntroOnce() {
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    document.body.style.overflow = "hidden";

    var startTs = null;
    function step(ts) {
      if (startTs === null) startTs = ts;
      var elapsed = ts - startTs;
      var progress = Math.min(1, elapsed / PLAY_DURATION);
      var index = Math.round((1 - progress) * 239);
      drawFrame(index);
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        window.setTimeout(finishIntro, 250); // jeda sebentar di frame utuh
      }
    }
    preload();
    requestAnimationFrame(step);
  }

  var alreadyPlayed = false;
  try { alreadyPlayed = sessionStorage.getItem("intro-played") === "1"; } catch (e) {}

  if (reduced || alreadyPlayed) {
    carIntro.classList.add("is-done");
  } else {
    playIntroOnce();
  }

  /* ==========================================================================
     5. HERO — starfield bergerak ke kiri
     ========================================================================== */
  (function starfield() {
    var sf = document.getElementById("starfield");
    var sctx = sf.getContext("2d");
    var stars = [];
    var STAR_COUNT = 140;

    function resize() {
      var dpr = Math.min(window.devicePixelRatio || 1, 2);
      sf.width = sf.parentElement.clientWidth * dpr;
      sf.height = sf.parentElement.clientHeight * dpr;
      if (!stars.length) {
        for (var i = 0; i < STAR_COUNT; i++) {
          stars.push({
            x: Math.random() * sf.width,
            y: Math.random() * sf.height,
            r: Math.random() * 1.6 + 0.4,
            speed: Math.random() * 0.4 + 0.15,
            twinkle: Math.random() * Math.PI * 2,
          });
        }
      }
    }
    resize();
    window.addEventListener("resize", resize);

    function frame() {
      sctx.clearRect(0, 0, sf.width, sf.height);
      stars.forEach(function (s) {
        s.x -= s.speed; // bergerak ke kiri
        if (s.x < -2) s.x = sf.width + 2;
        s.twinkle += 0.02;
        var alpha = 0.4 + Math.sin(s.twinkle) * 0.35;
        sctx.beginPath();
        sctx.fillStyle = "rgba(237,232,224," + Math.max(0.1, alpha) + ")";
        sctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        sctx.fill();
      });
      if (!reduced) requestAnimationFrame(frame);
    }
    frame();
  })();

  /* ==========================================================================
     6. HEADER — shadow saat scroll
     ========================================================================== */
  var header = document.getElementById("site-header");
  var scrollScheduled = false;
  window.addEventListener("scroll", function () {
    if (scrollScheduled) return;
    scrollScheduled = true;
    requestAnimationFrame(function () {
      scrollScheduled = false;
      header.classList.toggle("is-scrolled", window.scrollY > 40);
    });
  }, { passive: true });

  /* ==========================================================================
     7. MENU HAMBURGER
     ========================================================================== */
  var hamburgerBtn = document.getElementById("hamburger-btn");
  var panel = document.getElementById("hamburger-panel");
  var overlay = document.getElementById("panel-overlay");
  function openPanel() {
    panel.classList.add("is-open");
    overlay.classList.add("is-open");
    hamburgerBtn.classList.add("hamburger-btn-active");
    panel.setAttribute("aria-hidden", "false");
  }
  function closePanel() {
    panel.classList.remove("is-open");
    overlay.classList.remove("is-open");
    hamburgerBtn.classList.remove("hamburger-btn-active");
    panel.setAttribute("aria-hidden", "true");
  }
  hamburgerBtn.addEventListener("click", function () {
    panel.classList.contains("is-open") ? closePanel() : openPanel();
  });
  overlay.addEventListener("click", closePanel);
  panel.querySelectorAll("[data-close-panel]").forEach(function (l) { l.addEventListener("click", closePanel); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closePanel(); });

  /* ==========================================================================
     8. SLIDESHOW KENANGAN
     ========================================================================== */
  var slides = Array.prototype.slice.call(document.querySelectorAll(".memory-slide"));
  var dotsWrap = document.getElementById("slideshow-dots");
  var slideIndex = 0;
  slides.forEach(function (_, i) {
    var dot = document.createElement("span");
    if (i === 0) dot.classList.add("is-active");
    dotsWrap.appendChild(dot);
  });
  var dots = Array.prototype.slice.call(dotsWrap.children);
  function showSlide(i) {
    slides[slideIndex].classList.remove("is-active");
    dots[slideIndex].classList.remove("is-active");
    slideIndex = i % slides.length;
    slides[slideIndex].classList.add("is-active");
    dots[slideIndex].classList.add("is-active");
  }
  if (slides.length > 1 && !reduced) {
    window.setInterval(function () { showSlide(slideIndex + 1); }, 4500);
  }

  /* ==========================================================================
     9. MARQUEE SKILL
     ========================================================================== */
  function buildChartSVG(trend) {
    var max = Math.max.apply(null, trend), min = Math.min.apply(null, trend);
    var range = Math.max(1, max - min);
    var padX = 4, padY = 8, W = 100, H = 56;
    var pts = trend.map(function (v, i) {
      var x = padX + (i / (trend.length - 1)) * (W - padX * 2);
      var y = H - padY - ((v - min) / range) * (H - padY * 2);
      return [x, y];
    });
    var d = "M" + pts[0][0] + "," + pts[0][1];
    for (var i = 0; i < pts.length - 1; i++) {
      var p0 = pts[i - 1] || pts[i], p1 = pts[i], p2 = pts[i + 1], p3 = pts[i + 2] || p2;
      var c1x = p1[0] + (p2[0] - p0[0]) / 6, c1y = p1[1] + (p2[1] - p0[1]) / 6;
      var c2x = p2[0] - (p3[0] - p1[0]) / 6, c2y = p2[1] - (p3[1] - p1[1]) / 6;
      d += " C" + c1x + "," + c1y + " " + c2x + "," + c2y + " " + p2[0] + "," + p2[1];
    }
    var areaD = d + " L" + pts[pts.length - 1][0] + "," + H + " L" + pts[0][0] + "," + H + " Z";
    var dots2 = pts.map(function (p) { return '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="2.4" style="fill:var(--accent)" />'; }).join("");
    var uid = "sg" + Math.random().toString(36).slice(2, 8);
    return (
      '<svg class="skill-chart" viewBox="0 0 100 56" preserveAspectRatio="none">' +
      '<defs><linearGradient id="' + uid + '" x1="0" y1="0" x2="0" y2="1">' +
      '<stop offset="0%" style="stop-color:var(--accent)" stop-opacity="0.35" />' +
      '<stop offset="100%" style="stop-color:var(--accent)" stop-opacity="0" />' +
      "</linearGradient></defs>" +
      '<path d="' + areaD + '" fill="url(#' + uid + ')" stroke="none" />' +
      '<path d="' + d + '" fill="none" style="stroke:var(--accent)" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />' +
      dots2 + "</svg>"
    );
  }
  function buildSkillCard(skill) {
    var el = document.createElement("div");
    el.className = "skill-card";
    el.dataset.skill = skill.key;
    el.innerHTML =
      "<h3>" + skill.name + "</h3>" +
      '<div class="skill-progress-track"><div class="skill-progress-fill" style="width:' + skill.level + '%"></div></div>' +
      '<span class="skill-progress-label" data-level="' + skill.level + '">' + TRANSLATIONS[currentLang].skillLevelLabel + " — " + skill.level + "%</span>" +
      buildChartSVG(skill.trend);
    return el;
  }

  var track = document.getElementById("skill-track");
  var marqueeWrap = document.getElementById("skill-marquee-wrap");
  var iconRow = document.getElementById("skill-icon-row");
  var REPEATS = 3;
  var allCards = [];
  for (var r = 0; r < REPEATS; r++) {
    SKILLS.forEach(function (skill) {
      var el = buildSkillCard(skill);
      track.appendChild(el);
      allCards.push({ el: el, key: skill.key });
    });
  }
  SKILLS.forEach(function (skill) {
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "skill-icon";
    btn.dataset.skill = skill.key;
    btn.innerHTML = '<span class="skill-icon-logo" style="background:' + skill.badge.bg + ";color:" + skill.badge.fg + '">' + skill.badge.label + "</span><span>" + skill.name + "</span>";
    iconRow.appendChild(btn);
    function press() { btn.classList.add("is-pressed"); }
    function release() { btn.classList.remove("is-pressed"); }
    btn.addEventListener("mousedown", press);
    btn.addEventListener("mouseup", release);
    btn.addEventListener("mouseleave", release);
    btn.addEventListener("touchstart", press, { passive: true });
    btn.addEventListener("touchend", release);
    btn.addEventListener("touchcancel", release);
  });

  var setWidth = 0;
  function measureSetWidth() {
    if (allCards.length > SKILLS.length) setWidth = allCards[SKILLS.length].el.offsetLeft - allCards[0].el.offsetLeft;
  }
  measureSetWidth();
  window.addEventListener("resize", measureSetWidth);

  var pos2 = 0, playing = !reduced, activeSkill = null, lastTs = null, SPEED = 34;
  function applyTransform() { track.style.transform = "translateX(" + pos2.toFixed(1) + "px)"; }
  function wrapPos() {
    if (!setWidth) return;
    var lower = -3 * setWidth, upper = -2 * setWidth;
    while (pos2 < lower) pos2 += setWidth;
    while (pos2 > upper) pos2 -= setWidth;
  }
  function tick(ts) {
    if (lastTs === null) lastTs = ts;
    var dt = (ts - lastTs) / 1000;
    lastTs = ts;
    if (playing && setWidth) { pos2 -= SPEED * dt; wrapPos(); applyTransform(); }
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);

  function setActiveSkill(key) {
    iconRow.querySelectorAll(".skill-icon").forEach(function (b) { b.classList.toggle("is-active", b.dataset.skill === key); });
    allCards.forEach(function (c) { c.el.classList.toggle("is-highlighted", c.key === key); });
  }
  function centerOnSkill(key) {
    if (!setWidth) measureSetWidth();
    var wrapWidth = marqueeWrap.getBoundingClientRect().width;
    var viewportCenter = wrapWidth / 2;
    var best = null, bestDelta = Infinity;
    allCards.forEach(function (c) {
      if (c.key !== key) return;
      var cardCenter = c.el.offsetLeft + c.el.offsetWidth / 2;
      var target = viewportCenter - cardCenter;
      var delta = Math.abs(target - pos2);
      if (delta < bestDelta) { bestDelta = delta; best = target; }
    });
    if (best === null) return;
    track.classList.add("is-centering");
    pos2 = best;
    applyTransform();
    window.setTimeout(function () { track.classList.remove("is-centering"); }, 650);
  }
  function toggleSkill(key) {
    if (activeSkill === key) { activeSkill = null; playing = !reduced; setActiveSkill(null); }
    else { activeSkill = key; playing = false; centerOnSkill(key); setActiveSkill(key); }
  }
  iconRow.querySelectorAll(".skill-icon").forEach(function (btn) { btn.addEventListener("click", function () { toggleSkill(btn.dataset.skill); }); });
  allCards.forEach(function (c) { c.el.addEventListener("click", function () { toggleSkill(c.key); }); });
  marqueeWrap.addEventListener("mouseenter", function () { if (!activeSkill) playing = false; });
  marqueeWrap.addEventListener("mouseleave", function () { if (!activeSkill) playing = !reduced; });

  /* ==========================================================================
     10. RENDER PROJECT, KONTAK, BAHASA, SERTIFIKAT, BIDANG, SOSIAL HERO
     ========================================================================== */
  function renderProjects(projects, linkLabel) {
    var grid = document.getElementById("project-grid");
    if (!grid) return;
    grid.innerHTML = "";
    projects.forEach(function (p) {
      var el = document.createElement("div");
      el.className = "project-card reveal";
      el.innerHTML = "<h3>" + p.title + "</h3><p>" + p.desc + "</p>" +
        '<a href="' + p.link + '" target="_blank" rel="noopener">' + linkLabel + "</a>";
      grid.appendChild(el);
      observeReveal(el);
    });
  }

  var contactGrid = document.getElementById("contact-grid");
  CONTACTS.forEach(function (c) {
    var el = document.createElement("a");
    el.className = "contact-item reveal";
    el.href = c.href; el.target = "_blank"; el.rel = "noopener";
    el.innerHTML = '<span class="contact-icon">' + c.icon + "</span>" +
      '<span><span class="contact-label">' + c.label + '</span><span class="contact-value">' + c.value + "</span></span>";
    contactGrid.appendChild(el);
    observeReveal(el);
  });

  // Ikon koneksi kecil di Hero, pakai data CONTACTS yang sama.
  var heroSocial = document.getElementById("heroSocial");
  CONTACTS.forEach(function (c) {
    var a = document.createElement("a");
    a.className = "hero-social-icon";
    a.href = c.href; a.target = "_blank"; a.rel = "noopener";
    a.textContent = c.icon;
    a.title = c.label;
    heroSocial.appendChild(a);
  });

  var langGrid = document.getElementById("langSkillGrid");
  LANGUAGES.forEach(function (l) {
    var el = document.createElement("div");
    el.className = "lang-skill-card reveal";
    el.innerHTML =
      '<div class="lang-skill-top"><span class="lang-skill-flag">' + l.flag + '</span><span class="lang-skill-name">' + l.name + "</span></div>" +
      '<div class="skill-progress-track"><div class="skill-progress-fill" style="width:' + l.level + '%"></div></div>' +
      '<span class="lang-skill-level">' + l.level + "%</span>";
    langGrid.appendChild(el);
    observeReveal(el);
  });

  var certList = document.getElementById("certList");
  CERTS.forEach(function (c) {
    var el = document.createElement("div");
    el.className = "cert-item reveal";
    el.innerHTML = '<span class="cert-icon">' + c.icon + '</span><span><span class="cert-name">' + c.name + '</span><br/><span class="cert-issuer">' + c.issuer + "</span></span>";
    certList.appendChild(el);
    observeReveal(el);
  });

  var fieldRow = document.getElementById("fieldChipRow");
  FIELDS.forEach(function (f) {
    var el = document.createElement("span");
    el.className = "field-chip reveal";
    el.textContent = f;
    fieldRow.appendChild(el);
    observeReveal(el);
  });

  /* ==========================================================================
     11. REVEAL ON SCROLL
     ========================================================================== */
  var revealObserver = "IntersectionObserver" in window
    ? new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15 })
    : null;
  function observeReveal(el) {
    el.classList.add("reveal");
    if (revealObserver) revealObserver.observe(el);
    else el.classList.add("is-visible");
  }
  document.querySelectorAll(".section .eyebrow, .section h2, .memory-slideshow").forEach(observeReveal);

  initLanguage();
})();
