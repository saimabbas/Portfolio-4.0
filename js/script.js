console.log("abc");
var swiper = new Swiper(".testimonials-swiper", {
  pagination: {
    el: ".testimonials-pagination",
  },
  navigation: {
    nextEl: ".testimoonial-right",
    prevEl: ".testimoonial-left",
  },
  autoHeight: false,
  speed: 1000,
  spaceBetween: 100,
  centeredSlides: true,
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
});
const degreeToRadian = (angle) => {
  return angle * (Math.PI / 180);
};

const radius = 65;
const diameter = radius * 2;

const circle = document.querySelector("#circular-text");
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
