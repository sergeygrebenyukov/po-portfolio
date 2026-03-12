import { $, $$, safe } from "./dom.js";

export function initHeroTilt() {
  safe("Hero tilt", () => {
    const heroCard = $("#heroCard");
    if (!heroCard || !window.gsap) return;

    heroCard.addEventListener("mousemove", (e) => {
      const r = heroCard.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      gsap.to(heroCard, {
        rotateY: x * 4,
        rotateX: -y * 3,
        transformPerspective: 900,
        transformOrigin: "center",
        duration: 0.35,
        ease: "power2.out"
      });
    });

    heroCard.addEventListener("mouseleave", () => {
      gsap.to(heroCard, { rotateY: 0, rotateX: 0, duration: 0.55, ease: "power3.out" });
    });
  });
}

export function initKpiTilt() {
  safe("KPI tilt", () => {
    if (!window.gsap) return;
    $$("[data-tilt]").forEach((el) => {
      el.addEventListener("mousemove", (e) => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left)/r.width - 0.5;
        const y = (e.clientY - r.top)/r.height - 0.5;
        gsap.to(el, { rotateY: x*6, rotateX: -y*6, transformPerspective: 700, duration: 0.25, ease: "power2.out" });
      });
      el.addEventListener("mouseleave", () => {
        gsap.to(el, { rotateY: 0, rotateX: 0, duration: 0.45, ease: "power3.out" });
      });
    });
  });
}

export function initIntroAnimations() {
  safe("Intro animations", () => {
    if (!window.gsap) return;
    gsap.from("#heroH1", { y: 18, opacity: 0, duration: 0.9, ease: "power3.out" });
    gsap.from("#heroH2", { y: 14, opacity: 0, duration: 0.9, delay: 0.12, ease: "power3.out" });
    gsap.from("#mini1",   { y: 14, opacity: 0, duration: 0.8, delay: 0.08, ease: "power3.out" });
    gsap.from("#mini2",   { y: 14, opacity: 0, duration: 0.8, delay: 0.16, ease: "power3.out" });
  });
}

export function initStackAnimation() {
  safe("Stack bars animation", () => {
    if (!window.gsap || !window.ScrollTrigger) {
      $$(".fill").forEach(f => f.style.width = (f.dataset.fill || 100) + "%");
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: "#stackWrap",
      start: "top 70%",
      once: true,
      onEnter: () => {
        $$(".fill").forEach((f, i) => {
          gsap.to(f, {
            width: (f.dataset.fill || 100) + "%",
            duration: 0.9,
            delay: i * 0.03,
            ease: "power3.out"
          });
        });
      }
    });
  });
}