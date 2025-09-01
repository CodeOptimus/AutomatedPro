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
