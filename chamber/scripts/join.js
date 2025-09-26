// ------------------ HAMBURGER MENU ------------------
const navbutton = document.querySelector("#ham-btn");
const navlinks = document.querySelector("#nav-bar");
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

// ========== Timestamp Setup ==========
const timestampField = document.getElementById("timestamp");
if (timestampField) {
  timestampField.value = new Date().toISOString();
}

// ========== Modal Logic ==========
document.querySelectorAll("[data-modal]").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const modalId = link.getAttribute("data-modal");
    document.getElementById(modalId).style.display = "flex";
  });
});

function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

// Close modal when clicking outside content
document.querySelectorAll(".modal").forEach(modal => {
  modal.addEventListener("click", e => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});


