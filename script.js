const SOCIAL_LINKS = {
  whatsapp: "https://wa.me/6281211552756",
  linkedin: "https://www.linkedin.com/in/jonathan-sanjaya",
  github: "https://github.com/Jonathan-Sanjaya",
  instagram: "https://www.instagram.com/alascod0/"
};

/* ============ DATA ============ */
const hardSkills = [
  { group: "Programming Languages & Data", items: [
    ["C++", "devicon-cplusplus-plain"], ["Python", "devicon-python-plain"], ["MATLAB", "devicon-matlab-plain"],
    ["SQL", "fa-solid fa-database"], ["Java", "devicon-java-plain"] ] },
  { group: "Web Development", items: [
    ["HTML5", "devicon-html5-plain"], ["CSS3", "devicon-css3-plain"], ["JavaScript", "devicon-javascript-plain"],
    ["React.js", "devicon-react-original"], ["Express.js", "devicon-express-original"], ["Node.js", "devicon-nodejs-plain"],
    ["Tailwind CSS", "devicon-tailwindcss-original"], ["Bootstrap", "devicon-bootstrap-plain"] ] },
  { group: "Tools & Productivity", items: [
    ["Git", "devicon-git-plain"], ["GitHub", "devicon-github-original"],
    ["Microsoft Word", null, "W"], ["Microsoft Excel", null, "X"], ["Microsoft PowerPoint", null, "P"] ] }
];

const softSkills = ["Problem-Solving", "Critical Thinking", "Ability to Work Under Pressure", "Time Management",
  "Teamwork", "Leadership", "Teaching & Mentoring", "Adaptability"];

const projects = [
  { title: "Kantin Kirno Food Ordering App & Admin CMS", year: "2026", img: "Image/Kirno.jpeg", icon: "fa-utensils",
    url: "https://github.com/VincentWu503/kantin-kirno-order-app",
    short: "A food ordering application with customer-facing interfaces and an administrative content management system.",
    detail: "Designed and developed the user-facing interface for the homepage, order history, login, registration, password recovery, profile, order status, shopping cart, and checkout. Developed admin CMS interfaces for menu management, order lists, profile management, administrator account management, and store operating status controls. Also prepared capstone project documentation and system diagrams, including activity, class, component, sequence, state, and use case diagrams.",
    tags: ["User Interface", "Admin CMS", "System Diagrams"] },
  { title: "Ayam Ojolali Restaurant Website & Admin Dashboard", year: "2025", img: "Image/Ojolali.jpeg", icon: "fa-store",
    url: "https://github.com/DanielKA014/uas-fe-frontend",
    short: "A restaurant website paired with an admin dashboard for menu and branch address management.",
    detail: "Developed user-facing pages for the homepage, menu, customer reviews, login, registration, and password recovery, while improving the About page. Built admin dashboard interfaces that support menu CRUD operations and branch address management, allowing administrators to manage menu items and update restaurant locations.",
    tags: ["User Pages", "Admin Dashboard", "Menu CRUD"] },
  { title: "AnterIn Transportation & Delivery App UI", year: "2025", img: "Image/AnterIn.jpeg", icon: "fa-motorcycle",
    url: "https://github.com/DanielKA014/AnterIn",
    short: "A transportation and delivery application UI designed to support dummy-user testing.",
    detail: "Designed and developed user interface screens for car and motorcycle services, ride and delivery flows, messaging, voice calls, and chat. The interfaces were created to support testing with dummy users and demonstrate the application's main transportation and communication flows.",
    tags: ["UI Design", "Ride & Delivery", "Chat & Voice Calls"] },
  { title: "SVM vs CatBoost for Sentiment Analysis of Electronic Product Reviews", year: "2026", img: "Image/ProdukElektronik.jpg", icon: "fa-comments",
    url: "https://drive.google.com/drive/folders/1nG1A9-glfcIwfQnJZ2z7ARKbvFt-olKU",
    short: "A machine learning research project comparing two classification algorithms for electronic product review sentiment analysis.",
    detail: "Compared Support Vector Machine (SVM) and CatBoost using sentiment labels generated with VADER and TF-IDF feature representations. Evaluated classification performance on imbalanced electronic product review data.",
    tags: ["SVM", "CatBoost", "VADER", "TF-IDF"] },
  { title: "SVR, XGBoost, and Decision Tree for UPDRS Score Estimation in Parkinson's Patients", year: "2025", img: "Image/Parkinson.jpg", icon: "fa-chart-line",
    url: "https://drive.google.com/drive/folders/1G011QepUPyYwp2RWxT2vSsekftgkMI0J",
    short: "A machine learning research project investigating regression models for estimating Parkinson's disease severity scores.",
    detail: "Evaluated Support Vector Regression (SVR), XGBoost, and Decision Tree regression algorithms for predicting Unified Parkinson's Disease Rating Scale (UPDRS) scores using biomedical voice measurements and patient demographic data.",
    tags: ["SVR", "XGBoost", "Decision Tree"] }
];

const experience = [
  { role: "Teaching Assistant", org: "Tarumanagara University", periods: [
    { date: "August 2026 – Present", points: [
      "Calculus: Mentored first-year Informatics Engineering students across three classes, prepared learning summaries, conducted tutorial sessions, and explained mathematical theories and calculation techniques.",
      "Statistics: Prepared learning summaries, conducted review sessions, and guided students in understanding statistical theories and calculations.",
      "Fundamentals of Programming: Assisted lecturers, provided debugging support, reviewed programming assignments, and delivered code-specific feedback." ] },
    { date: "February 2026 – May 2026", points: [
      "Numerical Methods: Taught numerical methods through practical coding exercises, designed assignments, evaluated submitted code, and provided constructive feedback.",
      "Operating Systems: Mentored Information Systems students in Linux fundamentals, command-line programming, live coding, practical exercises, and troubleshooting." ] },
    { date: "August 2025 – November 2025", points: [
      "Calculus: Mentored first-year Informatics Engineering students and facilitated problem-solving sessions.",
      "Fundamentals of Programming: Assisted students with programming assignments, troubleshooting, and code reviews." ] } ] },
  { role: "External Vice Chairman", org: "Student Representative Council of the Faculty of Information Technology (DPM FTI)", periods: [
    { date: "July 2026 – Present", points: [
      "Served as a liaison between faculty officials and student representative councils from other faculties.",
      "Supported the Chair in leadership responsibilities and organizational coordination.",
      "Helped improve operational performance through better coordination and more efficient workflows." ] } ] },
  { role: "Coordinator of the Advocation and Legislation Commission", org: "DPM FTI", periods: [
    { date: "July 2025 – June 2026", points: [
      "Drafted and reviewed regulations governing student organizations within the Faculty of Information Technology.",
      "Collected and managed student concerns and aspirations, communicating them to faculty authorities for consideration.",
      "Trained new commission members on work procedures, responsibilities, and job descriptions." ] } ] },
  { role: "Forum Komunikasi Aspirasi Mahasiswa (FORKAM)", org: "Student advocacy forum, Faculty of Information Technology", periods: [
    { date: "March 2025 – May 2026", points: [
      "Helped organize the faculty's primary student advocacy forum.",
      "Developed the event framework and process for collecting student aspirations.",
      "Coordinated committee activities and event execution.",
      "Consolidated student input into policy recommendations presented to faculty authorities." ] } ] }
];

const socials = [
  { key: "whatsapp", label: "WhatsApp", icon: "fa-brands fa-whatsapp", brand: "#1FA855" },
  { key: "linkedin", label: "LinkedIn", icon: "fa-brands fa-linkedin-in", brand: "#0A66C2" },
  { key: "github", label: "GitHub", icon: "fa-brands fa-github", brand: "#24292F" },
  { key: "instagram", label: "Instagram", icon: "fa-brands fa-instagram", brand: "#C13584" }
];

/* ============ HELPERS ============ */
const $ = (id) => document.getElementById(id);
const el = (tag, cls, html) => { const n = document.createElement(tag); if (cls) n.className = cls; if (html !== undefined) n.innerHTML = html; return n; };
const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");

function showPlaceholder(img, icon, label) {
  const ph = el("div", "placeholder", icon ? `<i class="fa-solid ${icon}" aria-hidden="true"></i><span>${label}</span>` : `<strong>JS</strong><span>${label}</span>`);
  ph.setAttribute("role", "img");
  ph.setAttribute("aria-label", label);
  img.replaceWith(ph);
}
function withFallback(img, icon, label) {
  const fail = () => showPlaceholder(img, icon, label);
  img.addEventListener("error", fail, { once: true });
  if (img.complete && img.naturalWidth === 0 && img.getAttribute("src")) fail();
}

/* ============ RENDER ============ */
withFallback($("profile-frame").querySelector("img"), null, "Add your photo at images/profile.jpg");

$("hard-skills").append(...hardSkills.map((g) => {
  const wrap = el("div", "skill-group", `<h3>${g.group}</h3>`);
  const grid = el("ul", "skill-grid");
  g.items.forEach(([name, cls, glyph]) => {
    grid.append(el("li", "skill", (cls ? `<i class="${cls}" aria-hidden="true"></i>` : `<span class="glyph" aria-hidden="true">${glyph}</span>`) + `<span>${name}</span>`));
  });
  wrap.append(grid);
  return wrap;
}));

$("soft-skills").append(...softSkills.map((s) => el("li", "", esc(s))));

const grid = $("project-grid");
projects.forEach((p, i) => {
  const card = el("article", "card");
  card.tabIndex = 0;
  card.setAttribute("role", "button");
  card.setAttribute("aria-haspopup", "dialog");
  card.setAttribute("aria-label", `${p.title}, ${p.year}. Open details`);
  card.innerHTML = `<div class="thumb"><img src="${p.img}" alt="${esc(p.title)} preview" loading="lazy" width="640" height="360"></div>
    <div class="card-body"><h3>${esc(p.title)}</h3><p class="year">${p.year}</p><p>${esc(p.short)}</p>
    <ul class="tags">${p.tags.map((t) => `<li>${esc(t)}</li>`).join("")}</ul></div>`;
  withFallback(card.querySelector("img"), p.icon, "Project image placeholder");
  card.addEventListener("click", () => openModal(i));
  card.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openModal(i); } });
  grid.append(card);
});

$("timeline").append(...experience.map((j) => {
  const job = el("article", "job", `<h3>${esc(j.role)}</h3><p class="org">${esc(j.org)}</p>`);
  j.periods.forEach((p) => {
    job.append(el("p", "period", p.date), el("ul", "", p.points.map((x) => `<li>${esc(x)}</li>`).join("")));
  });
  return job;
}));

$("social").append(...socials.map((s) => {
  const url = SOCIAL_LINKS[s.key];
  const a = el("a", url ? "" : "disabled", `<i class="${s.icon}" aria-hidden="true"></i>`);
  a.style.setProperty("--brand", s.brand);
  if (url) { a.href = url; a.target = "_blank"; a.rel = "noopener noreferrer"; a.setAttribute("aria-label", `${s.label} (opens in a new tab)`); }
  else { a.href = "#contact"; a.setAttribute("aria-label", `${s.label} (link not set yet)`); a.title = "Add your URL in js/script.js"; a.addEventListener("click", (e) => e.preventDefault()); }
  return a;
}));

/* ============ MODAL ============ */
const modal = $("project-modal");
let lastFocus = null;
function openModal(i) {
  const p = projects[i];
  lastFocus = document.activeElement;
  $("modal-media").innerHTML = `
    <a
      class="project-modal-image-link"
      href="${p.url}"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Learn more about ${esc(p.title)}"
    >
      <img src="${p.img}" alt="${esc(p.title)} preview">
      <div class="project-image-overlay" aria-hidden="true">
        <span>Learn More</span>
      </div>
    </a>
  `;
  withFallback($("modal-media").querySelector("img"), p.icon, "Project image placeholder");
  $("modal-title").textContent = p.title;
  $("modal-year").textContent = p.year;
  $("modal-desc").textContent = p.detail;
  $("modal-tags").innerHTML = p.tags.map((t) => `<li>${esc(t)}</li>`).join("");
  modal.showModal();
  document.body.classList.add("modal-open");
}
$("modal-close").addEventListener("click", () => modal.close());
modal.addEventListener("click", (e) => { if (e.target === modal) modal.close(); });
modal.addEventListener("close", () => { document.body.classList.remove("modal-open"); if (lastFocus) lastFocus.focus(); });

/* ============ NAV ============ */
const toggle = $("nav-toggle"), links = $("nav-links");
toggle.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open);
});
links.addEventListener("click", () => { links.classList.remove("open"); toggle.setAttribute("aria-expanded", false); });

const spy = new IntersectionObserver((entries) => {
  entries.forEach((en) => {
    if (en.isIntersecting) links.querySelectorAll("a").forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id));
  });
}, { rootMargin: "-40% 0px -55% 0px" });
["skills", "projects", "contact"].forEach((id) => spy.observe($(id)));

/* ============ FOOTER ============ */
const currentYear = new Date().getFullYear();
$("year").textContent = currentYear;
