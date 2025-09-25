const getString = window.location.search;
const myInfo = new URLSearchParams(getString);

document.querySelector("#results").innerHTML = `
  <p>Appointment for <strong>${myInfo.get("first")} ${myInfo.get("last")}</strong></p>
  <p>Proxy <strong>${myInfo.get("ordinance")}</strong> on <strong>${myInfo.get("date")}</strong> in the <strong>${myInfo.get("location")}</strong> Temple</p>
  <p>Your phone: ${myInfo.get("phone")}</p>
  <p>Your email: ${myInfo.get("email")}</p>
`;

// Save in local storage
localStorage.setItem("appointment", JSON.stringify({
  first: myInfo.get("first"),
  last: myInfo.get("last"),
  ordinance: myInfo.get("ordinance"),
  date: myInfo.get("date"),
  location: myInfo.get("location"),
  phone: myInfo.get("phone"),
  email: myInfo.get("email")
}));

// Retrieve from local storage
const stored = JSON.parse(localStorage.getItem("appointment"));
console.log(stored);

