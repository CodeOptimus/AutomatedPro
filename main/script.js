// document.addEventListener("DOMContentLoaded", function () {
//   gsap.registerPlugin(ScrollTrigger);

//   // Hero text (fade up one after the other)
//   gsap.from(".hero-text > *", {
//     scrollTrigger: {
//       trigger: ".hero",
//       start: "top 80%",
//     },
//     y: 40,
//     opacity: 0,
//     duration: 0.8,
//     stagger: 0.2,
//     ease: "power3.out",
//   });

// Main rider image (pop gently)
//   gsap.from(".main-rider", {
//     scrollTrigger: {
//       trigger: ".hero",
//       start: "top 75%",
//     },
//     scale: 0.8,
//     opacity: 0,
//     duration: 1,
//     ease: "back.out(1.7)",
//   });

//   // Floating cards (pop in sequence)
//   gsap.from(".floating-card", {
//     scrollTrigger: {
//       trigger: ".hero",
//       start: "top 70%",
//     },
//     scale: 0.8,
//     opacity: 0,
//     duration: 0.7,
//     stagger: 0.3,
//     ease: "back.out(1.7)",
//   });
// });

// gsap.registerPlugin(ScrollTrigger);

// // Hero text (fade up one after the other)
// gsap.from(".hero-text > *", {
//   scrollTrigger: {
//     trigger: ".hero",
//     start: "top 80%",
//   },
//   y: 40,
//   opacity: 0,
//   duration: 0.8,
//   stagger: 0.2,
//   ease: "power3.out",
// });

// // Main rider image (pop gently)
// gsap.fromTo(
//   ".main-rider",
//   { autoAlpha: 0, scale: 0.8 },
//   {
//     scrollTrigger: {
//       trigger: ".hero",
//       start: "top 90%",
//       toggleActions: "play none none none",
//     },
//     autoAlpha: 1,
//     scale: 1,
//     duration: 1,
//     ease: "back.out(1.7)",
//   }
// );

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  // Hero text — fade up one after the other
  // No ScrollTrigger needed here because the hero is visible on page load.
  // Using a simple delay instead so it fires cleanly after the page settles.
  gsap.from(".hero-text > *", {
    y: 40,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power3.out",
    delay: 0.2,
  });

  // Main rider image — pop in gently
  gsap.from(".main-rider", {
    scale: 0.85,
    opacity: 0,
    duration: 1,
    ease: "back.out(1.7)",
    delay: 0.4,
  });

  // Floating cards — pop in sequence after rider
  gsap.fromTo(
    ".floating-card",
    {
      scale: 0.8,
      autoAlpha: 0,
    },
    {
      scale: 1,
      autoAlpha: 1,
      duration: 0.8,
      stagger: 0.25,
      ease: "back.out(1.7)",
      delay: 0.7,
    }
  );

  // Fade in all remaining sections as user scrolls down
  gsap.utils.toArray(".fade-in-section").forEach(function (section) {
    gsap.fromTo(
      section,
      {
        autoAlpha: 0,
        y: 40,
      },
      {
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        autoAlpha: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
      }
    );
  });
});