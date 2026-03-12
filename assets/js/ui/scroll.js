import { $, $$, safe } from "./dom.js";

export function initSmoothScroll(navConfig) {
  let lenis = null;

  safe("Lenis init", () => {
    if (!window.Lenis) return;
    lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    const raf = (time) => { lenis.raf(time); requestAnimationFrame(raf); };
    requestAnimationFrame(raf);
  });

  const scrollToTarget = (hash) => {
    const el = document.querySelector(hash);
    if (!el) return;
    if (lenis) lenis.scrollTo(el, { offset: -84 });
    else el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // nav links
  $$("#nav a").forEach(a => {
    const key = a.dataset.key;
    const cfg = navConfig?.[key];
    if (!cfg) return;
    a.setAttribute("href", cfg.href);
    a.addEventListener("click", (e) => {
      if (cfg.mode === "external") return;
      e.preventDefault();
      scrollToTarget(cfg.href);
    });
  });

  // scrollspy
  safe("Scrollspy", () => {
    const sections = ["#home","#about","#cases","#stack","#freelance","#contact"].map(s => $(s)).filter(Boolean);
    const navLinks = $$("#nav a");
    const obs = new IntersectionObserver((entries) => {
      const visible = entries
        .filter(e => e.isIntersecting)
        .sort((a,b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      const id = "#" + visible.target.id;
      navLinks.forEach(l => l.dataset.active = (l.getAttribute("href") === id) ? "true" : "false");
    }, { rootMargin: "-30% 0px -60% 0px", threshold: [0.08, 0.16, 0.24, 0.32] });

    sections.forEach(s => obs.observe(s));
  });

  // hotkeys
  safe("Hotkeys", () => {
    const keyMap = { h:"#home", a:"#about", c:"#cases", s:"#stack", f:"#freelance", m:"#contact" };
    window.addEventListener("keydown", (e) => {
      if (e.target && ["INPUT","TEXTAREA"].includes(e.target.tagName)) return;
      const k = e.key.toLowerCase();
      if (!keyMap[k]) return;
      e.preventDefault();
      scrollToTarget(keyMap[k]);
    });
  });

  return { scrollToTarget };
}