import {gsap} from "gsap";

import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  //Header animation
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

  // Canap VOD animation
  gsap.fromTo(
    ".canap",
    {
      top: "100%",
    },
    {
      top: "20%",
      left: "100%",
      rotate: 420,
      scale: 0.6,
      scrollTrigger: {
        trigger: ".canap-container",
        start: "top 60%",
        end: "top -50%",
        markers: true,
        scrub: true,
      },
    },
  );
  if (window.innerWidth > 768) {
    gsap.fromTo(
      ".canap",
      {
        top: "100%",
      },
      {
        top: "-20%",
        left: "100%",
        rotate: 420,
        scale: 0.6,
        scrollTrigger: {
          trigger: ".canap-container",
          start: "top 60%",
          end: "top -50%",
          markers: true,
          scrub: true,
        },
      },
    );
  }
});
