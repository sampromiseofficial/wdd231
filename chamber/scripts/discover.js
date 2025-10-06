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

//......File from data/discover.mjs.........//
import { discoverItems } from "../data/discover.mjs";
console.log(discoverItems);

//..... Display items.....//

const showHere = document.querySelector("#discover-items");

//....Loop through the array of json items ....//
function displayItems(items) {
  items.forEach(item => {

    //..Build the card element...//
    const card = document.createElement("div");

    //...Build the photo element...//
    const photo = document.createElement("img");
    photo.src = item.image;
    photo.alt = item.title;
    photo.loading = "lazy";
    card.appendChild(photo);

    //build the title element...//
    const title = document.createElement("h3");
    title.innerText = item.title;
    card.appendChild(title);

    //...Build the address element...//
    const address = document.createElement("address");
    address.innerText = item.address;
    card.appendChild(address);

    //...Build the description element...//
    const description = document.createElement("p");
    description.innerText = item.description;
    card.appendChild(description);

    //...Append the card to the showHere section...//
    showHere.appendChild(card);

  }) // ... end loop ...//
}//... end function ...//

//... Call the function to display items ...//
displayItems(discoverItems);

