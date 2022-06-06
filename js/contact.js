gsap.registerPlugin(SplitText, ScrollSmoother, ScrollTrigger);
// Text Splitting
const ContactHeroHeading = new SplitText(".page-heading", {
  type: "chars, words",
});
const ContactHeroHeadingChars = ContactHeroHeading.chars;
const ContactHeroHeadingWords = ContactHeroHeading.words;

// Landing Animation
let LoaderFadeAnimationContact = gsap.timeline({
  paused: true,
});
LoaderFadeAnimationContact.to(".loading-box", {
  y: "10rem",
  yoyo: true,
  ease: Power4.easeInOut,
  duration: 0.35,
})
  .to(
    "#contact-loader",
    {
      height: 0,
      padding: 0,
      yoyo: true,
      ease: Power4.easeInOut,
      duration: 0.35,
    },
    "<0.15"
  )
  .fromTo(
    ".hero-heading-line-1",
    {
      right: "50%",
      opacity: 0,
    },
    {
      right: "-10%",
      duration: 1.15,
      opacity: 1,
      ease: Power4.easeInOut,
    },
    "<0.25"
  )
  .fromTo(
    ".hero-heading-line-2",
    {
      left: "50%",
      opacity: 0,
    },
    {
      left: "10%",
      duration: 1.15,
      opacity: 1,
      ease: Power4.easeInOut,
    },
    "<0"
  )
  .fromTo(
    ContactHeroHeadingChars,
    {
      opacity: 0,
      rotateY: "90deg",
    },
    {
      opacity: 1,
      rotateY: "0",
      duration: 1.15,
      stagger: 0.05,
      ease: Power4.easeInOut,
    },
    "<0.1"
  )
  .fromTo(
    ContactHeroHeadingWords,
    {
      x: "5rem",
    },
    {
      x: "0",
      duration: 1.15,
      stagger: 0.05,
      ease: Power4.easeInOut,
    },
    "<0"
  )
  .fromTo(
    ".page-subheading",
    {
      opacity: "0",
    },
    {
      opacity: "1",
      duration: 1.15,
      ease: Power4.easeInOut,
    },
    "<0"
  )
  .fromTo(
    ".chs-grid-card",
    {
      opacity: "0",
    },
    {
      opacity: "1",
      duration: 1.15,
      ease: Power4.easeInOut,
      stagger: 0.1,
    },
    "<0.65"
  );

// Loader
$(window).on("load", function () {
  setTimeout(() => {
    LoaderFadeAnimationContact.play();
  }, 250);
});
