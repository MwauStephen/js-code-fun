"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

// Anonymous function to open model
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

// Anonymous function to close modal
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// Anonymus function to close modal on clicking the overlay
const overlayCloseModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// Access the modal buttons
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", openModal);
}
btnCloseModal.addEventListener("click", closeModal);

overlay.addEventListener("click", overlayCloseModal);

// 1.handling keyboard press
document.addEventListener("keydown", function (e) {
  if (e.key === "Bakcspace" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
