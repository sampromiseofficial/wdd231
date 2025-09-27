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

//........Response.........
const getString = window.location.search;
const myInfo = new URLSearchParams(getString);

// Display results
document.querySelector("#results").innerHTML = `
<p>Thank you, <strong>${myInfo.get("firstName")} ${myInfo.get("lastName")}</strong></p>
<p>Email: <strong>${myInfo.get("email")}</strong></p>
<p>Phone: <strong>${myInfo.get("phone")}</strong></p>
<p>Organization Title: <strong>${myInfo.get("title")}</strong></p>
<p>Organization: <strong>${myInfo.get("organization")}</strong></p>
<p>Membership Level: <strong>${myInfo.get("membership")}</strong></p>
`;

// Save in local storage
localStorage.setItem("chamberApplication", JSON.stringify({
    firstName: myInfo.get("firstName"),
    lastName: myInfo.get("lastName"),
    title: myInfo.get("title"),
    email: myInfo.get("email"),
    phone: myInfo.get("phone"),
    organization: myInfo.get("organization"),
    membership: myInfo.get("membership"),
  }));

// Retrieve from local storage
const stored = JSON.parse(localStorage.getItem("chamberApplication"));
console.log(stored);
