`use strict`;
const carouselImg = document.querySelector(".carousel-img");
const btn = document.querySelector(".btn");
const btnRight = document.querySelector(".btn--right");
const btnLeft = document.querySelector(".btn--left");
let dotFill = document.querySelector(".dot--fill");
const dotOne = document.querySelector(".dot--1");
const dotTwo = document.querySelector(".dot--2");
const dotThree = document.querySelector(".dot--3");

dotFill.classList.remove("dot--fill");

// Add an event listener on the buttons
btnRight.addEventListener("click", function () {
  const ranNum = Math.trunc(Math.random() * 3) + 1;
  carouselImg.src = `img/img-${ranNum}.jpg`;
  carouselImg.classList.remove("hidden");
  //   console.log(ranNum);
});
btnLeft.addEventListener("click", function () {
  let ranNum = Math.trunc(Math.random() * 3) + 1;

  carouselImg.src = `img/img-${ranNum}.jpg`;
  console.log(carouselImg);
 
    // const dot = document
    //   .querySelector(`.dot--${ranNum}`)
    //   .classList.toggle("dot--fill");
    // console.log(dot);

    // dot.classList.toggle("dot--fill");

    console.log();
    carouselImg.classList.remove("hidden");
    console.log(ranNum);
  }
});
