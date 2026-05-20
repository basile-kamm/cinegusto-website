import {gsap} from "gsap";

import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  let lastScrollPosition = 0;

  window.addEventListener("scroll", () => {
    let currentScrollPosition = window.scrollY;

    if (currentScrollPosition > lastScrollPosition) {
      gsap.to(".navbar", {
        y: "-120%",
        duration: 1,
      });
    } else {
      gsap.to(".navbar", {
        y: 0,
        duration: 0.5,
      });
    }

    lastScrollPosition = currentScrollPosition;
  });
});
