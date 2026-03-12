import { safe } from "./dom.js";

export function initParticles() {
  safe("tsParticles", async () => {
    if (!window.tsParticles) return;
    await tsParticles.load("tsparticles", {
      background: { color: { value: "transparent" } },
      fullScreen: { enable: false },
      fpsLimit: 60,
      interactivity: {
        events: {
          onHover: { enable: true, mode: "repulse" },
          onClick: { enable: true, mode: "push" },
        },
        modes: {
          repulse: { distance: 90, duration: 0.25 },
          push: { quantity: 2 }
        }
      },
      particles: {
        number: { value: 54, density: { enable: true, area: 900 } },
        color: { value: ["#7CFFB2", "#7AA7FF", "rgba(234,242,255,.55)"] },
        links: { enable: true, color: "rgba(234,242,255,.24)", distance: 130, opacity: 0.35, width: 1 },
        move: { enable: true, speed: 1.2, outModes: { default: "out" } },
        opacity: { value: { min: 0.22, max: 0.7 } },
        size: { value: { min: 1, max: 3.2 } },
      },
      detectRetina: true,
    });
  });
}