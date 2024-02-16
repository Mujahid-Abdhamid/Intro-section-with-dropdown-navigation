"use strict";

const dropDown = document.querySelectorAll(".dropdown");
const btnOpen = document.querySelectorAll(".nav-list__item");
const closeIcon = document.querySelectorAll(".close");
const openIcon = document.querySelectorAll(".open");

// Hide the open icon by default
openIcon.forEach((openI) => {
  openI.classList.add("hidden");
});

// Implementing the open functionality
btnOpen.forEach((open, index) => {
  open.addEventListener("click", function () {
    // Hide all dropdown by default
    dropDown.forEach((dropdown, i) => {
      dropdown.classList.add("hidden");
      closeIcon[i].classList.remove("hidden");
      openIcon[i].classList.add("hidden");
    });

    // Hide the closeIcon and display the openIcon
    closeIcon[index].classList.add("hidden");
    openIcon[index].classList.remove("hidden");

    // Display the corresponding dropdown
    const currentDropDown = dropDown[index];
    currentDropDown.classList.remove("hidden");
  });
});
