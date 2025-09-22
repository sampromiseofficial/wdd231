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

// ------------------ WEATHER ------------------
const apiKey = "8ae697c6d7a978c9d07b51f03fcfb75e";
const lat = 6.62; // Ikeja latitude
const lon = 3.27; // Ikeja longitude

async function getWeather() {
  try {
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();

    // Current weather (first entry)
    const current = data.list[0];
    document.getElementById("temp").textContent = `${Math.round(current.main.temp)} °C`;
    document.getElementById("desc").textContent = current.weather[0].description;
    document.getElementById("high").textContent = `High: ${Math.round(current.main.temp_max)}°C`;
    document.getElementById("low").textContent = `Low: ${Math.round(current.main.temp_min)}°C`;
    document.getElementById("humidity").textContent = `Humidity: ${current.main.humidity}%`;
    document.getElementById("sunrise").textContent = `Sunrise: ${new Date(data.city.sunrise * 1000).toLocaleTimeString()}`;
    document.getElementById("sunset").textContent = `Sunset: ${new Date(data.city.sunset * 1000).toLocaleTimeString()}`;

    // Forecast for next 3 days (filter one per day, midday)
    const daily = data.list.filter(f => f.dt_txt.includes("12:00:00")).slice(0, 3);
    const days = ["Today", "Tomorrow", "Next Day"];
    daily.forEach((day, i) => {
      document.getElementById(["today", "wednesday", "thursday"][i])
        .textContent = `${days[i]}: ${Math.round(day.main.temp)}°C, ${day.weather[0].description}`;
    });
  } catch (error) {
    console.error("Error fetching weather:", error);
  }
}

getWeather();


// 2-3 members display
async function gethomeMembers() {
  try {
    const response = await fetch("data/homemembers.json");
    const homemembers = await response.json();
    displayMembers(homemembers);
  } catch (error) {
    console.error("Error fetching homemembers:", error);
  }
}

function displayMembers(homemembers) {
  const container = document.getElementById("advert");
  container.innerHTML = "";

  // Filter only silver (2) and gold (3)
  const filtered = homemembers.filter(m => m.membershipLevel >= 1);

  // Shuffle and take 2–3 random
  const shuffled = filtered.sort(() => 0.5 - Math.random()).slice(0, 3);

  shuffled.forEach(member => {
    const card = document.createElement("div");
    card.classList.add("member-card");

    card.innerHTML = `
      <img src="images/${member.image}" alt="${member.name} logo">
      <h2>${member.name}</h2>
      <p><strong>Address:</strong> ${member.address}</p>
      <p><strong>Phone:</strong> ${member.phone}</p>
      <p><a href="${member.website}" target="_blank">Visit Website</a></p>
      <p><strong>Membership Level:</strong> ${member.membershipLevel === 3 ? "Gold" : "Silver"}</p>
      <p>${member.description}</p>
    `;
    container.appendChild(card);
  });
}

gethomeMembers();
