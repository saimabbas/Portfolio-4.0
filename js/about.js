// GSAP Plugins Registration
gsap.registerPlugin(
  SplitText,
  ScrollSmoother,
  ScrollTrigger,
  ScrambleTextPlugin
);

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

// Hero Text Circle Animation
gsap.fromTo(
  ".about-left-circle",
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

// Text Splitting
const ContactHeroHeading = new SplitText(".page-heading", {
  type: "chars, words",
});
const ContactHeroHeadingChars = ContactHeroHeading.chars;
const ContactHeroHeadingWords = ContactHeroHeading.words;
const Quote = new SplitText(".quote-box h6", {
  type: "chars, words",
});
const QuoteChars = Quote.chars;
const QuoteWords = Quote.words;

// Landing Animation
let LoaderFadeAnimationAbout = gsap.timeline({
  paused: true,
});
LoaderFadeAnimationAbout.to(".loading-box", {
  y: "10rem",
  yoyo: true,
  ease: Power4.easeInOut,
  duration: 0.35,
})
  .to(
    "#about-loader",
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
    ".about-left-line div",
    {
      height: 0,
    },
    {
      height: "90vh",
      duration: 1,
    },
    "<0.5"
  );
/* .fromTo(
    ".about-img-box",
    {
      width: 0,
    },
    {
      width: "35rem",
      duration: 1,
    },
    "<0"
  ); */

// Loader
$(window).on("load", function () {
  setTimeout(() => {
    LoaderFadeAnimationAbout.play();
  }, 250);
});

// Scramble Text Effect of Stats Boxes
gsap.to(".sgc-1 h3 span", {
  duration: 5,
  scrambleText: {
    text: "50",
    chars: "XO",
    revealDelay: 0.5,
    speed: 1,
    delay: 5,
  },
});
gsap.to(".sgc-2 h3 span", {
  duration: 5,
  scrambleText: {
    text: "137",
    chars: "XO",
    revealDelay: 0.5,
    speed: 1,
    delay: 5,
  },
});
gsap.to(".sgc-3 h3", {
  duration: 5,
  scrambleText: {
    text: "5.0",
    chars: "XO",
    revealDelay: 0.5,
    speed: 1,
    delay: 5,
  },
});

// Scroll Animations

let AboutScrollAnimations = gsap.timeline({
  scrollTrigger: {
    trigger: ".ads-content",
    toggleActions: "start pause resume none",
    start: "bottom 95.5%",
    end: "bottom -15%",
    scrub: 1,
    pin: true,
    pinSpacing: true,
    markers: false,
  },
});
AboutScrollAnimations.fromTo(
  QuoteChars,
  {
    opacity: 0,
    rotateY: "90deg",
    scale: 2.25,
  },
  {
    opacity: 1,
    rotateY: "0",
    scale: 1,
    duration: 1.15,
    stagger: 0.35,
    ease: Power4.easeInOut,
    duration: 10,
  }
)
  .fromTo(
    QuoteWords,
    {
      x: "7.5rem",
    },
    {
      x: "0",
      duration: 1.15,
      stagger: 0.35,
      ease: Power4.easeInOut,
      duration: 10,
    },
    "<0"
  )
  .fromTo(
    ".quote-box i",
    {
      opacity: "0",
    },
    {
      opacity: "1",
      duration: 1.15,
      duration: 10,
    },
    "<0"
  )
  .fromTo(
    ".about-img-box img",
    {
      scale: 1,
    },
    {
      scale: 1.075,
      ease: Linear.easeInOut,
      duration: 10,
    },
    "<0"
  )
  .fromTo(
    ".about-img-line-1",
    {
      width: 0,
    },
    {
      width: "50%",
      ease: Linear.easeInOut,
      duration: 10,
    },
    "<0"
  )
  .fromTo(
    ".about-img-line-2",
    {
      width: 0,
    },
    {
      width: "50%",
      ease: Linear.easeInOut,
      duration: 10,
    },
    "<0"
  );
