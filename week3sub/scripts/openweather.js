// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// Trier, Germany coordinates
// Latitude: 49.756, Longitude: 6.641
// Units can be "metric" (°C) or "imperial" (°F)
const url = "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=a13de643306230623be7e9e2402dc57c";


async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // testing only
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displayResults(data) {
  // Display temperature
  currentTemp.innerHTML = `${data.main.temp.toFixed(1)}&deg;C`;

  // Weather icon
  const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  let desc = data.weather[0].description;

  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = desc;
}

// call the function
apiFetch();