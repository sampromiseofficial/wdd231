const getString = window.location.search;
const myInfo = new URLSearchParams(getString);

document.querySelector("#results").innerHTML = `
  <p>Appointment for <strong>${myInfo.get("first")} ${myInfo.get("last")}</strong></p>
  <p>Proxy <strong>${myInfo.get("ordinance")}</strong> on <strong>${myInfo.get("date")}</strong> in the <strong>${myInfo.get("location")}</strong> Temple</p>
  <p>Your phone: ${myInfo.get("phone")}</p>
  <p>Your email: ${myInfo.get("email")}</p>
`;
