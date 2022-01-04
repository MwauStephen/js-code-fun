`use strict`;
const accordionEl = document.querySelector(".accordion");
const btnOpen = document.querySelector(".open");
const btnIcon = document.querySelector(".icon");
const btnIcon1 = document.querySelector(".icon-1");
const btnIcon2 = document.querySelector(".icon-2");
const item1 = document.querySelector(".item-1");
const item2 = document.querySelector(".item-2");

// document.querySelector("body").style.backgroundColor = "#333";

const openOne = function () {
  item1.classList.toggle("open");
};
const openTwo = function () {
  item2.classList.toggle("open");
};

btnIcon1.addEventListener("click", openOne);

btnIcon2.addEventListener("click", openTwo);
