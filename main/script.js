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

  // Keep the pop-up cards gently moving (infinite float)
  gsap.to(".card-burger", {
    y: -14,
    duration: 2.4,
    ease: "sine.inOut",
    yoyo: true,
    repeat: -1,
    delay: 1.6,
    overwrite: "auto",
  });
  gsap.to(".card-delivery", {
    y: 12,
    x: -6,
    duration: 2.9,
    ease: "sine.inOut",
    yoyo: true,
    repeat: -1,
    delay: 1.6,
    overwrite: "auto",
  });

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