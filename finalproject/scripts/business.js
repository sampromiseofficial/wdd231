// Businesses Page Script - loads JSON data dynamically

document.addEventListener("DOMContentLoaded", () => {
  fetch("data/businesses.json")
    .then(response => response.json())
    .then(data => {
      const container = document.querySelector("#business-list");
      data.businesses.forEach(biz => {
        const card = document.createElement("div");
        card.className = "business-card";
        card.innerHTML = `
          <h3>${biz.name}</h3>
          <p><strong>Industry:</strong> ${biz.industry}</p>
          <p>${biz.description}</p>
        `;
        container.appendChild(card);
      });
    })
    .catch(err => console.error("Error loading businesses:", err));
});
