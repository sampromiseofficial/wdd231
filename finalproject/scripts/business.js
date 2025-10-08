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

//......File from data/business.mjs.........//
import { businessGroups } from "../data/business.mjs";
console.log(businessGroups);

//..... Display items.....//

const showHere = document.querySelector("#business-groups");

//....Loop through the array of json items ....//
function displayItems(groups) {
  groups.forEach(group => {

    //..Build the card element...//
    const card = document.createElement("div");

    //...Build the photo element...//
    const photo = document.createElement("img");
    photo.src = group.image;
    photo.alt = group.title;
    photo.loading = "lazy";
    card.appendChild(photo);

    //build the title element...//
    const title = document.createElement("h2");
    title.innerText = group.title;
    card.appendChild(title);

    //...Build the address element...//
    const address = document.createElement("address");
    address.innerText = group.address;
    card.appendChild(address);

    //...Build the description element...//
    const description = document.createElement("p");
    description.innerText = group.description;
    card.appendChild(description);

    //...Build the learn-more option element...//
    const learn_more = document.createElement("a");
    learn_more.innerText = "Learn more";
    learn_more.href = group.learn_more;
    card.appendChild(learn_more);

    //...Append the card to the showHere section...//
    showHere.appendChild(card);

  }) // ... end loop ...//
}//... end function ...//

//... Call the function to display items ...//
displayItems(businessGroups);



