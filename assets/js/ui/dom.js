export const $ = (s, el = document) => el.querySelector(s);
export const $$ = (s, el = document) => Array.from(el.querySelectorAll(s));

export const safe = (name, fn) => {
  try { return fn(); }
  catch (e) { console.warn(`[${name}]`, e); return null; }
};