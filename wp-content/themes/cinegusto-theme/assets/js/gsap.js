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
  if (window.innerWidth > 768) {
    gsap.fromTo(
      ".canap",
      {
        bottom: "-20%",
      },
      {
        bottom: "80%",
        left: "100%",
        rotate: 420,
        scale: 0.6,
        scrollTrigger: {
          trigger: ".canap-container",
          start: "top 60%",
          end: "top -50%",
          scrub: 0.4,
        },
      },
    );
  } else {
    gsap.fromTo(
      ".canap",
      {
        bottom: 0,
      },
      {
        bottom: "50%",
        left: "100%",
        rotate: 420,
        scale: 0.6,
        scrollTrigger: {
          trigger: ".canap-container",
          start: "top 60%",
          end: "top -50%",
          scrub: 0.4,
        },
      },
    );
  }

  // Grue animation homepage
  if (document.querySelector(".about")) {
    const grueTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".about",
        start: "top 60%",
        end: "top -50%",
        // markers: true,
        scrub: 0.4,
      },
    });
    if (window.innerWidth > 768) {
      grueTl.fromTo(
        ".grue",
        {
          top: 60,
          left: "100%",
        },
        {
          top: 20,
          left: "20%",
        },
      );
      grueTl.to(".grue", {
        top: "40%",
        left: "0%",
        translateX: "-100%",
        rotate: -60,
      });
    } else {
      grueTl.fromTo(
        ".grue",
        {
          top: 0,
          left: "100%",
        },
        {
          top: 40,
          left: "0%",
          translateX: "-100%",
          rotate: -60,
        },
      );
    }
  }
  // Grue animation contact page
  if (document.querySelector(".page")) {
    const grueTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".page",
        start: "top top",
        end: "50% 80%",
        scrub: 0.4,
      },
    });
    if (window.innerWidth > 768) {
      grueTl.fromTo(
        ".grue",
        {
          top: "30%",
          left: "110%",
          rotate: 20,
        },
        {
          top: 0,
          left: "20%",
          rotate: 0,
        },
      );
      grueTl.to(".grue", {
        top: "40%",
        left: "0%",
        translateX: "-100%",
        rotate: -60,
      });
    } else {
      grueTl.fromTo(
        ".grue",
        {
          top: 0,
          left: "100%",
        },
        {
          top: 40,
          left: "0%",
          translateX: "-100%",
          rotate: -60,
        },
      );
    }
  }

  // Infos page anim
  if (document.querySelector(".infos-page")) {
    gsap.to(".megaphone", {
      rotate: 0,
      scrollTrigger: {
        trigger: ".megaphone",
        start: "top 50%",
        end: "top top",
        scrub: 0.4,
        // markers: true,
      },
    });

    gsap.to(".car", {
      y: -100,
      x: "200%",
      scrollTrigger: {
        trigger: ".car",
        start: "top bottom",
        end: "bottom top",
        scrub: 0.4,
        // markers: true,
      },
    });

    gsap.to(".bus", {
      y: 80,
      x: "-100%",
      scrollTrigger: {
        trigger: ".bus",
        start: "top bottom",
        end: "bottom top",
        scrub: 0.4,
        // markers: true,
      },
    });

    const serviceTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#plan",
        start: "top bottom",
        end: "bottom -20%",
        scrub: 0.4,
        markers: true,
      },
    });

    serviceTl.to(".service-1-1", {
      x: "-100vw",
      y: -30,
      rotate: -720,
    });
    serviceTl.to(
      ".service-1-2",
      {
        x: "-80vw",
        rotate: 520,
      },
      "<",
    );
    serviceTl.to(
      ".service-2-2",
      {
        x: "-100vw",
        rotate: 420,
      },
      "<",
    );
    serviceTl.to(
      ".service-2-1",
      {
        x: "-80vw",
        y: 40,
        rotate: 600,
      },
      "<",
    );
    serviceTl.to(
      ".service-3-2",
      {
        x: "-100vw",
        rotate: -720,
        y: 120,
      },
      "<",
    );
    serviceTl.to(
      ".service-3-1",
      {
        x: "-100vw",
        y: 40,
        rotate: -300,
      },
      "<",
    );
  }
});
