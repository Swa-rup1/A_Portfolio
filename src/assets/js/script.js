// src/assets/js/script.js

document.addEventListener("scroll", () => {
  const header = document.getElementById("header");
  if (window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Hamburger JS
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".mid-nav");
  const navLink = document.querySelectorAll(".nav-a");

  function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  }

  function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }

  if (hamburger) {
    hamburger.addEventListener("click", mobileMenu);
    console.log("clicked");
  }

  if (navLink) {
    navLink.forEach((n) => n.addEventListener("click", closeMenu));
  }
});
