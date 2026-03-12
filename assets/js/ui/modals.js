import { $ } from "./dom.js";

export function createModalController() {
  const resumeModal = $("#resumeModal");
  const caseModal = $("#caseModal");

  const openModal = (modal) => {
    if (!modal) return;
    modal.setAttribute("open", "");
    document.body.style.overflow = "hidden";
  };

  const closeModal = (modal) => {
    if (!modal) return;
    modal.removeAttribute("open");
    document.body.style.overflow = "";
  };

  const wireModal = (modal) => {
    if (!modal) return;
    modal.addEventListener("click", (e) => {
      if (e.target && e.target.closest("[data-close]")) closeModal(modal);
    });
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal.hasAttribute("open")) closeModal(modal);
    });
  };

  wireModal(resumeModal);
  wireModal(caseModal);

  $("#btnResume")?.addEventListener("click", () => openModal(resumeModal));

  const openProject = (data, idx, typeLabel) => {
    $("#caseTitle").textContent = data.title;
    const meta = data.meta || {};
    $("#caseMeta").textContent =
      `${typeLabel} · ${String(idx+1).padStart(2,"0")} · ${data.tag}` +
      (meta.role ? ` · ${meta.role}` : "");

    const body = $("#caseBody");
    const metaBlock = `
      <div class="mrow">
        <div class="k"><b>Карта проекта</b><span>—</span></div>
        <div class="v">
          ${meta.scope ? `<div>Scope: <b>${meta.scope}</b></div>` : ``}
          ${meta.users ? `<div>Users: <b>${meta.users}</b></div>` : ``}
          ${meta.stage ? `<div>Stage: <b>${meta.stage}</b></div>` : ``}
        </div>
      </div>
    `;

    const detailsBlock = (data.details || []).map(([k,v]) => `
      <div class="mrow">
        <div class="k"><b>${k}</b><span>—</span></div>
        <div class="v">${v}</div>
      </div>
    `).join("");

    body.innerHTML = `<div class="mgrid">${metaBlock}${detailsBlock}</div>`;
    openModal(caseModal);
  };

  return { openProject, openModal, closeModal, resumeModal, caseModal };
}