import alpineModule from "./alpine.js";
import "./gsap.js";

document.addEventListener("DOMContentLoaded", () => {
  alpineModule();

  if (window.innerWidth > 768) {
    const hoverItems = document.querySelectorAll("[data-btn]");

    hoverItems.forEach((item) => {
      let btn = null;

      item.addEventListener("mouseenter", () => {
        btn = document.createElement("p");
        btn.textContent = item.dataset.btn;
        btn.classList.add("hover-btn");
        document.querySelector(".btn-cont").appendChild(btn);
      });

      item.addEventListener("mousemove", (event) => {
        if (!btn) return;
        btn.style.top = event.clientY + "px";
        btn.style.left = event.clientX + "px";
      });

      item.addEventListener("mouseleave", () => {
        if (btn) {
          btn.remove();
          btn = null;
        }
      });
    });
  }
});
