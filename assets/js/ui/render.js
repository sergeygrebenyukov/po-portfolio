export function renderCards(gridEl, data, kind) {
  if (!gridEl) return;
  gridEl.innerHTML = "";

  data.forEach((c, idx) => {
    const card = document.createElement("article");
    card.className = "flip";
    card.innerHTML = `
      <div class="flip-inner">
        <div class="flip-face flip-front" style="background-image:url('${c.bg}')">
          <span class="front-tag">${c.tag}</span>
          <h3>${c.title}</h3>
        </div>
        <div class="flip-face flip-back">
          <p>${c.teaser}</p>
          <div class="more">
            <span class="chip"><span class="dot"></span> ${kind} · ${String(idx+1).padStart(2,"0")}</span>
            <button class="btn primary" type="button" data-open="${kind}" data-idx="${idx}">Подробнее</button>
          </div>
        </div>
      </div>
    `;
    gridEl.appendChild(card);
  });
}

export function renderStack(stackBarsEl, stackItems) {
  if (!stackBarsEl) return;
  stackBarsEl.innerHTML = "";

  stackItems.forEach((it) => {
    const el = document.createElement("div");
    el.className = "bar";
    el.innerHTML = `
      <div class="bar-top">
        <b>${it.group} · ${it.name}</b>
        <span>${it.value}%</span>
      </div>
      <div class="track" aria-label="${it.name} ${it.value}%">
        <div class="fill" data-fill="${it.value}"></div>
      </div>
    `;
    stackBarsEl.appendChild(el);
  });
}