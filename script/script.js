"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const showBtn = document.querySelectorAll(".show-modal");
const closeBtn = document.querySelector(".close-btn");

const closeModal = function () {
  modal.classList.add("hide");
  overlay.classList.add("hide");
};

const openModal = function () {
  modal.classList.remove("hide");
  overlay.classList.remove("hide");
};

for (let i = 0; i < showBtn.length; i++) {
  showBtn[i].addEventListener("click", openModal);
  closeBtn.addEventListener("click", closeModal);
}

document.addEventListener("keydown", function (e) {
  // console.log(e.key);

  if (e.key === "Escape" && !modal.classList.contains("hide")) {
    closeModal();
  }
});
