// Get references to the footer paragraphs
const footerParagraphs = document.querySelectorAll("footer p");

// Set the current year in the first paragraph
document.querySelector("#current-year").textContent = new Date().getFullYear();

// Set the last modified date in the second paragraph
document.querySelector("#last-modified").textContent = document.lastModified;


