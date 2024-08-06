// src/assets/js/script.js

document.addEventListener("scroll", () => {
  const header = document.getElementById("nav-section");
  if (window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const img = document.getElementById("bg-pic");

  img.addEventListener("click", () => {
    document.body.classList.toggle("white-bg");
  });
});



// Hamburger JS

// const hamburgerMenu = document.getElementById("hamburger-menu");
// const mobileNav = document.getElementById("mobile-nav");

// hamburgerMenu.addEventListener("click", () => {
//   mobileNav.classList.toggle("active");
// });
