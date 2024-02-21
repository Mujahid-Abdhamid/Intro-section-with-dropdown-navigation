"use strict";

const dropDown = document.querySelectorAll(".dropdown");
const btnOpen = document.querySelectorAll(".nav-list__item");
const closeIcon = document.querySelectorAll(".close");
const openIcon = document.querySelectorAll(".open");
const menu = document.querySelector(".menu");
const navBar = document.querySelector(".main-nav");

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

const tabletScreen = window.matchMedia("(max-width: 59em)");

if (tabletScreen.matches) {
  menu.classList.remove("hidden");
  menu.addEventListener("click", function () {
    navBar.style.opacity = "2";
  });
}

/* .message {
  display: inline-block;
  background-color: hsl(0, 0%, 98%);
  box-shadow: 0 1.2rem 2.4rem rgba(0, 0, 0, 0.15);
  border-radius: 0.5rem;
  padding: 2.4rem;

  position: relative;
}

.message::before {
  content: "";
  width: 2.5rem;
  height: 2.5rem;
  position: absolute;
  top: 0;
  right: -12px;
  background: linear-gradient(
    135deg,
    hsl(0, 0%, 98%) 0%,
    hsl(0, 0%, 98%),
    50%,
    transparent 50%,
    transparent
  );
} */
