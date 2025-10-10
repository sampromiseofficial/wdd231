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

// ------------------ Services ------------------
async function getservices() {
  try {
    const response = await fetch("data/service.json");
    const services = await response.json();
    displayServices(services);
  } catch (error) {
    console.error("Error fetching services:", error);
  }
}

function displayServices(services) {
  const container = document.getElementById("service");
  container.innerHTML = "";

  services.forEach(service => {
    const card = document.createElement("div");
    card.classList.add("service-card");

    card.innerHTML = `
      <img src="images/${service.image}" alt="${service.name} logo">
      <h2>${service.name}</h2>
      <p><strong>Address:</strong> ${service.address}</p>
      <p><strong>Phone:</strong> ${service.phone}</p>
      <p><a href="${service.website}" target="_blank">Visit Website</a></p>
      <p><strong>Membership Level:</strong> ${service.membershipLevel}</p>
      <p>${service.description}</p>
    `;
    container.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  getservices();

  const gridbutton = document.querySelector("#grid");
  const listbutton = document.querySelector("#list");
  const display = document.querySelector("#service");

  gridbutton.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
  });

  listbutton.addEventListener("click", () => {
    display.classList.add("list");
    display.classList.remove("grid");
  });
});

