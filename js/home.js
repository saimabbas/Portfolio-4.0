// GSAP Plugins Registration
gsap.registerPlugin(SplitText, ScrollSmoother, ScrollTrigger);

// Text in Circle
const degreeToRadian = (angle) => {
  return angle * (Math.PI / 180);
};

const radius = 65;
const diameter = radius * 2;

const circle = document.querySelector(".circular-text");
circle.style.width = `${diameter}px`;
circle.style.height = `${diameter}px`;

const text = circle.innerText;
const characters = text.split("");
circle.innerText = null;

const startAngle = -90;
const endAngle = 270;
const angleRange = endAngle - startAngle;

const deltaAngle = angleRange / characters.length;
let currentAngle = startAngle;

characters.forEach((char, index) => {
  const charElement = document.createElement("span");
  charElement.innerText = char;
  const xPos = radius * (1 + Math.cos(degreeToRadian(currentAngle)));
  const yPos = radius * (1 + Math.sin(degreeToRadian(currentAngle)));

  const transform = `translate(${xPos}px, ${yPos}px)`;
  const rotate = `rotate(${index * deltaAngle}deg)`;
  charElement.style.transform = `${transform} ${rotate}`;

  currentAngle += deltaAngle;
  circle.appendChild(charElement);
});

// Text Spliting
const HomeHeroHeading = new SplitText(".hero-section-content h1", {
  type: "chars, words",
});
const HomeHeroHeadingChars = HomeHeroHeading.chars;
const HomeHeroHeadingWords = HomeHeroHeading.words;
const HomeHeroP = new SplitText(".hero-section-content h2", {
  type: "chars, words",
});
const HomeHeroPChars = HomeHeroP.chars;
const HomeHeroPWords = HomeHeroP.words;

// Testimonials Swiper
var swiper = new Swiper(".testimonials-swiper", {
  pagination: {
    el: ".testimonials-pagination",
  },
  navigation: {
    nextEl: ".testimoonial-right",
    prevEl: ".testimoonial-left",
  },
  autoHeight: true,
  speed: 1000,
  spaceBetween: 15,
  loop: true,
  slidesPerView: 1,
  effect: "coverflow",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
  breakpoints: {
    550: {
      spaceBetween: 100,
      autoHeight: false,
      effect: "coverflow",
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      },
    },
  },
});

// Landing Animation
let LoaderFadeAnimationHome = gsap.timeline({
  paused: true,
});
LoaderFadeAnimationHome.to(".loading-box", {
  y: "10rem",
  yoyo: true,
  ease: Power4.easeInOut,
  duration: 0.35,
})
  .to(
    "#home-loader",
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
    ".saim-box",
    {
      height: 0,
    },
    {
      height: "100vh",
      duration: 0.75,
      ease: Power1.easeInOut,
    },
    "<0.35"
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
    HomeHeroHeadingChars,
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
    HomeHeroHeadingWords,
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
    HomeHeroPChars,
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
    "<0"
  )
  .fromTo(
    HomeHeroPWords,
    {
      x: "2.5rem",
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
    ".hero-section-content button",
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 1.15,
      ease: Power4.easeInOut,
    },
    "<0.5"
  );
/* .fromTo(
    "nav a span",
    {
      opacity: 0,
      x: "5rem",
      rotateY: "90deg",
    },
    {
      opacity: 1,
      x: "0",
      rotateY: "0deg",
      duration: 0.15,
      stagger: 0.025,
      ease: Power4.easeInOut,
    },
    "<0.25"
  )
  .fromTo(
    "nav i",
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 0.15,
      ease: Power4.easeInOut,
    },
    "<0"
  ); */

// Loader
$(window).on("load", function () {
  LoaderFadeAnimationHome.play();
});

// Hero Text Circle Animation
gsap.fromTo(
  ".hero-heading-circle",
  {
    rotate: "0",
  },
  {
    rotate: "360deg",
    duration: 50,
    ease: Linear.easeInOut,
    repeat: -1,
  }
);
