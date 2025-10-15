// ------------------ HAMBURGER MENU ------------------
const navbutton = document.querySelector("#ham-btn");
const navlinks = document.querySelector("#primary-nav ul");
const logo = document.querySelector("#logo");      // header image
const heading = document.querySelector("header span"); // span text

navbutton.addEventListener("click", () => {
  navbutton.classList.toggle("show");
  navlinks.classList.toggle("show");
  logo.classList.toggle("hide");       // hide logo
  heading.classList.toggle("hide");    // hide span
});

// Handle resize events
window.addEventListener("resize", () => {
  if (window.innerWidth >= 769) {
    // Always reset to visible in desktop mode
    logo.classList.remove("hide");
    heading.classList.remove("hide");
    navlinks.classList.remove("show");
    navbutton.classList.remove("show");
  }
});

// ------------------ MODAL ------------------
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  const modal = card.querySelector("dialog");
  const openButton = card.querySelector(".open-button");
  const closeButton = card.querySelector(".close-button");

  openButton.addEventListener("click", () => {
    modal.showModal();
  });

  closeButton.addEventListener("click", () => {
    modal.close();
  });
});

// Main JavaScript for Psalm Global Investment website
document.addEventListener("DOMContentLoaded", () => {
  console.log("Website loaded successfully!");
  
  // Simple form validation example
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", (e) => {
      const name = document.querySelector("#name");
      const email = document.querySelector("#email");
      if (!name.value || !email.value) {
        alert("Please fill out all required fields.");
        e.preventDefault();
      }
    });
  }
});
