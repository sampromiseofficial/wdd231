import { temples, url } from "../data/temples.js";

// Grab references
const showHere = document.querySelector("#showHere");
const mydialog = document.querySelector("#mydialog");
const mytitle = document.querySelector("#mydialog h2");
const myinfo = document.querySelector("#mydialog p");
const myclose = document.querySelector("#closeBtn");

// Close dialog when X is clicked
myclose.addEventListener("click", () => mydialog.close());

// Loop through temples ...........................................................//
function displayItems(data) {
  data.forEach(x => {
    const photo = document.createElement("img");
    photo.src = `${url}${x.path}`;
    photo.alt = x.name;
    photo.style.cursor = "pointer";

    // Show dialog when clicked
    photo.addEventListener("click", () => {
      mytitle.textContent = x.name;
      myinfo.textContent = `${x.dedicated} — Dedicated by ${x.person}`;
      mydialog.showModal();
    });

    showHere.appendChild(photo);
  });
}

// Start displaying
displayItems(temples);
