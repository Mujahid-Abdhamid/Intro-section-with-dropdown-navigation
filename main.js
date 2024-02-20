"use strict";

const dropDown = document.querySelectorAll(".dropdown");
const btnOpen = document.querySelectorAll(".nav-list__item");
const closeIcon = document.querySelectorAll(".close");
const openIcon = document.querySelectorAll(".open");

// Implementing the open functionality and close functionality
btnOpen.forEach((open, index) => {
  open.addEventListener("click", function () {
    // Hide the dropdown by default
    const currentDropDown = dropDown[index];
    const isOpen = !currentDropDown.classList.contains("hidden");

    dropDown.forEach((dropdown) => {
      dropdown.classList.add("hidden");
    });

    // Toggle between hiding and showing the close and open icons
    closeIcon[index].classList.toggle("hidden");
    openIcon[index].classList.toggle("hidden");

    // Display the corresponding dropdown
    if (!isOpen) {
      currentDropDown.classList.remove("hidden");
    }
  });

  // Implementing the close functionality
  closeIcon[index].addEventListener("click", function () {
    // Hide the corresponding modal
    dropDown[index].classList.add("hidden");

    // Hide the close icon and display the open icon
    closeIcon[index].classList.add("hidden");
    openIcon[index].classList.remove("hidden");
  });
});
