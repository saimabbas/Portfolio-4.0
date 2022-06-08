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

let CustomersAnimation = gsap.timeline({
  scrollTrigger: {
    trigger: ".customers-grid",
    start: "top 50%",
    markers: false,
  },
});
CustomersAnimation.fromTo(
  ".customers-grid-card",
  {
    opacity: 0,
    scale: 0.75,
    rotateX: "90deg",
  },
  {
    rotateX: "0",
    opacity: 1,
    scale: 1,
    duration: 0.5,
    stagger: 0.05,
  }
);
let TestimonialsAnimation = gsap.timeline({
  scrollTrigger: {
    trigger: ".testimonials-section-content",
    start: "top 75%",
    markers: false,
  },
});
TestimonialsAnimation.fromTo(
  ".testimonial-slide-card",
  {
    opacity: 0,
    scale: 0.85,
  },
  {
    opacity: 1,
    scale: 1,
    duration: 1,
  }
)
  .fromTo(
    ".testimoonial-left",
    {
      opacity: 0,
      x: "-3.5rem",
    },
    {
      opacity: 1,
      x: "0",
      duration: 0.75,
    },
    "<0"
  )
  .fromTo(
    ".testimoonial-right",
    {
      opacity: 0,
      x: "3.5rem",
    },
    {
      opacity: 1,
      x: "0",
      duration: 0.75,
    },
    "<0"
  )
  .fromTo(
    ".testimonials-pagination",
    {
      opacity: 0,
      y: "3.5rem",
    },
    {
      opacity: 1,
      y: "0",
      duration: 0.75,
    },
    "<0"
  );
let WhymeAnimation = gsap.timeline({
  scrollTrigger: {
    trigger: ".why-section-content",
    start: "top 75%",
    markers: false,
  },
});
WhymeAnimation.fromTo(
  ".why-section-content",
  {
    opacity: 0,
    y: "3.5rem",
  },
  {
    opacity: 1,
    y: "0",
    duration: 0.75,
  }
);
let PackagesAnimation = gsap.timeline({
  scrollTrigger: {
    trigger: ".packages-grid",
    start: "top 80%",
    markers: false,
  },
});
PackagesAnimation.fromTo(
  ".packages-grid-card",
  {
    opacity: 0,
    scale: "0.85",
  },
  {
    scale: "1",
    opacity: 1,
    duration: 0.35,
    stagger: 0.075,
  }
);
let AboutPAnimation = gsap.timeline({
  scrollTrigger: {
    trigger: ".para-content",
    start: "top 75%",
    markers: false,
  },
});
AboutPAnimation.fromTo(
  ".para-content p",
  {
    opacity: 0,
    y: "5rem",
  },
  {
    opacity: 1,
    y: "0",
    duration: 0.5,
    stagger: 0.075,
  }
);
let TechAnimation = gsap.timeline({
  scrollTrigger: {
    trigger: ".tech-stack-grid-simple",
    start: "top 85%",
    markers: false,
  },
});
TechAnimation.fromTo(
  ".ts-grid-card-simple",
  {
    opacity: 0,
    rotateX: "90deg",
  },
  {
    opacity: 1,
    rotateX: "0",
    duration: 0.15,
    stagger: 0.05,
  }
);
let MobHeaderAnimation = gsap.timeline({
  paused: true,
});
MobHeaderAnimation.fromTo(
  ".header-mob",
  {
    height: 0,
  },
  {
    height: "100vh",
    ease: Power4.easeInOut,
    duration: 0.75,
  }
)
  .fromTo(
    ".menu-icon-line-small",
    {
      x: "0",
    },
    {
      x: "-1.5rem",
      ease: Power4.easeInOut,
      duration: 0.75,
    },
    "<0"
  )
  .fromTo(
    ".header-mob a",
    {
      y: "10rem",
      rotateX: "90deg",
      opacity: 0,
    },
    {
      y: "0",
      rotateX: "0",
      opacity: 1,
      stagger: 0.1,
      ease: Power4.easeInOut,
      duration: 1.25,
    },
    "<0"
  );
$(".open-mob-header").click(() => {
  $("html").css({ overflowY: "hidden" });
  $("body").css({ overflowY: "hidden" });
  $(".close-mob-header").css({ display: "flex" });
  MobHeaderAnimation.play(0);
  console.log("Open Clicked");
  $(".open-mob-header").css({ display: "none" });
});
$(".close-mob-header").click(() => {
  $("html").css({ overflowY: "auto" });
  $("body").css({ overflowY: "auto" });
  $(".open-mob-header").css({ display: "flex" });
  MobHeaderAnimation.reverse();
  console.log("Close Clicked");
  $(".close-mob-header").css({ display: "none" });
});

function myFunction(x) {
  if (x.matches) {
    console.log("abc");
  } else {
    ScrollSmoother.create({
      smooth: 1.15,
      effects: true,
      smoothTouch: 0,
    });
  }
}

var x = window.matchMedia("(max-width: 550px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes
