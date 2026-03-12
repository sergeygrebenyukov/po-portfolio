import { $, safe } from "./ui/dom.js";
import { navConfig, cases, freelance, stackItems } from "./data.js";

import { initSmoothScroll } from "./ui/scroll.js";
import { renderCards, renderStack } from "./ui/render.js";
import { createModalController } from "./ui/modals.js";
import { initParticles } from "./ui/particles.js";
import { initHeroTilt, initKpiTilt, initIntroAnimations, initStackAnimation } from "./ui/animations.js";

document.addEventListener("DOMContentLoaded", () => {
  // scroll + nav
  const { scrollToTarget } = initSmoothScroll(navConfig);

  // particles
  initParticles();

  // render
  safe("Render cases", () => renderCards($("#casesGrid"), cases, "Case"));
  safe("Render freelance", () => renderCards($("#freelGrid"), freelance, "Freelance"));
  safe("Render stack", () => renderStack($("#stackBars"), stackItems));

  // animations
  initHeroTilt();
  initKpiTilt();
  initIntroAnimations();
  initStackAnimation();

  // modals
  const modal = createModalController();

  // delegate open buttons (Case/Freelance)
  document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-open]");
    if (!btn) return;
    const kind = btn.getAttribute("data-open");
    const idx = Number(btn.getAttribute("data-idx"));
    if (Number.isNaN(idx)) return;

    if (kind === "Case" && cases[idx]) modal.openProject(cases[idx], idx, "Case");
    if (kind === "Freelance" && freelance[idx]) modal.openProject(freelance[idx], idx, "Freelance");
  });

  // btn to cases
  $("#btnToCases")?.addEventListener("click", (e) => {
    e.preventDefault();
    scrollToTarget("#cases");
  });

  // footer year
  $("#year").textContent = new Date().getFullYear();
});