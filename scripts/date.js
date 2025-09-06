// Get references to the footer paragraphs
const footerParagraphs = document.querySelectorAll("footer p");

// Set the current year in the first paragraph
const currentYear = new Date().getFullYear();
footerParagraphs[0].innerHTML = `&copy; ${currentYear} &#10070; Oni Samson Promise &#10070; Nigeria`;

// Set the last modified date in the second paragraph
const lastModified = document.lastModified;
footerParagraphs[1].textContent = `Last Modified: ${lastModified}`;
