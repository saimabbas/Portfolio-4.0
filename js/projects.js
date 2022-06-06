gsap.registerPlugin(SplitText, ScrollSmoother, ScrollTrigger);

// Landing Animation
let LoaderFadeAnimationProjects = gsap.timeline({
  paused: true,
});
LoaderFadeAnimationProjects.to(".loading-box", {
  y: "10rem",
  yoyo: true,
  ease: Power4.easeInOut,
  duration: 0.35,
}).to(
  ".projects-loader",
  {
    height: 0,
    padding: 0,
    yoyo: true,
    ease: Power4.easeInOut,
    duration: 0.35,
  },
  "<0.15"
);

// Loader
$(window).on("load", function () {
  setTimeout(() => {
    LoaderFadeAnimationProjects.play();
  }, 250);
});
