// GSAP Plugins Registration
gsap.registerPlugin(SplitText, ScrollSmoother, ScrollTrigger);

// Logo Animation
gsap.fromTo(
  "#loader-logo-animation .logo-box",
  {
    rotate: "-45deg",
  },
  {
    rotate: "45deg",
    repeat: -1,
    duration: 1.15,
    yoyo: true,
    ease: Power4.easeInOut,
  }
);

// Smooth Scrolling Effect
ScrollSmoother.create({
  smooth: 1.15,
  effects: true,
  smoothTouch: 0,
});

// Section headings animation
const shArr = [
  [$(".sh-1 h3"), $(".sh-1 h4")],
  [$(".sh-2 h3"), $(".sh-2 h4")],
  [$(".sh-3 h3"), $(".sh-3 h4")],
  [$(".sh-4 h3"), $(".sh-4 h4")],
];
for (i = 0; i < 4; i++) {
  SectionHeadingDarkH2 = new SplitText(shArr[i][0], {
    type: "chars",
  });
  SectionHeadingDarkH2chars = SectionHeadingDarkH2.chars;

  SectionHeadingDarkH3 = new SplitText(shArr[i][1], {
    type: "lines",
  });
  SectionHeadingDarkH3lines = SectionHeadingDarkH3.lines;

  var sectionHeadingAnim = gsap.timeline({
    scrollTrigger: {
      trigger: shArr[i],
      start: "top 80%",
    },
  });

  sectionHeadingAnim
    .fromTo(
      SectionHeadingDarkH2chars,
      {
        opacity: 0,
        rotateY: "90deg",
      },
      {
        opacity: 1,
        rotateY: "0",
        stagger: 0.1,
        ease: Power4.easeOut,
        duration: 0.85,
      }
    )
    .fromTo(
      SectionHeadingDarkH3lines,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        stagger: 0.1,
        ease: Power4.easeOut,
        duration: 0.85,
      },
      "<0.35"
    );
}
