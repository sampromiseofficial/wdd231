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

// ------------------ DIRECTORY MEMBERS ------------------
async function getMembers() {
  try {
    const response = await fetch("data/members.json");
    const members = await response.json();
    displayMembers(members);
  } catch (error) {
    console.error("Error fetching members:", error);
  }
}

function displayMembers(members) {
  const container = document.getElementById("members");
  container.innerHTML = "";

  members.forEach(member => {
    const card = document.createElement("div");
    card.classList.add("member-card");

    card.innerHTML = `
      <img src="images/${member.image}" alt="${member.name} logo">
      <h2>${member.name}</h2>
      <p><strong>Address:</strong> ${member.address}</p>
      <p><strong>Phone:</strong> ${member.phone}</p>
      <p><a href="${member.website}" target="_blank">Visit Website</a></p>
      <p><strong>Membership Level:</strong> ${member.membershipLevel}</p>
      <p>${member.description}</p>
    `;
    container.appendChild(card);
  });
}

getMembers();

// ------------------ GRID & LIST TOGGLE ------------------
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#members");

gridbutton.addEventListener("click", () => {
  display.classList.add("grid");
  display.classList.remove("list");
});

listbutton.addEventListener("click", () => {
  display.classList.add("list");
  display.classList.remove("grid");
});

// ------------------ WEATHER ------------------
const apiKey = "YOUR_OPENWEATHERMAP_API_KEY";
const lat = 16.7666; // Timbuktu latitude
const lon = -3.0026; // Timbuktu longitude

async function getWeather() {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=6.62&lon=3.27&units=imperial&appid=a13de643306230623be7e9e2402dc57c`;
    const response = await fetch(url);
    const data = await response.json();

    document.getElementById("temp").textContent = `${Math.round(data.main.temp)} °F`;
    document.getElementById("desc").textContent = data.weather[0].description;
    document.getElementById("high").textContent = `High: ${Math.round(data.main.temp_max)}°F`;
    document.getElementById("low").textContent = `Low: ${Math.round(data.main.temp_min)}°F`;
    document.getElementById("humidity").textContent = `Humidity: ${data.main.humidity}%`;
    document.getElementById("sunrise").textContent = `Sunrise: ${new Date(data.sys.sunrise * 1000).toLocaleTimeString()}`;
    document.getElementById("sunset").textContent = `Sunset: ${new Date(data.sys.sunset * 1000).toLocaleTimeString()}`;
  } catch (error) {
    console.error("Error fetching weather:", error);
  }
}

getWeather();
