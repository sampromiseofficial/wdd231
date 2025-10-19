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

  document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const name = params.get("name");
    const email = params.get("email");

    if (name && email) {
      document.querySelector("#results").innerHTML = `
        <p>Thank you, <strong>${name}</strong></p>
        <p>Email: <strong>${email}</strong></p>
      `;

      // Save to local storage
      localStorage.setItem("feedback", JSON.stringify({ name, email }));

      // Retrieve for testing
      console.log(JSON.parse(localStorage.getItem("feedback")));
    }
  });