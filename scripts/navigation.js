//store the selected elements that we are going to use.
const navbuttom = document.querySelector("#ham-btn");
const navlinks = document.querySelector("#nav-bar");

//Toggle the show class off and on
navbuttom.addEventListener('click', () => {
    navbuttom.classList.toggle("show");
    navlinks.classList.toggle("show");

});

//Toggle the courses
const courseButton = document.querySelector("#course-btn");
const courseLinks = document.querySelector("#course-bar");

courseButton.addEventListener('click', () => {
    courseButton.classList.toggle("show");
    courseLinks.classList.toggle("show");
});
//Toggle the subjects
const subjectButton = document.querySelector("#subject-btn");
const subjectLinks = document.querySelector("#subject-bar");

subjectButton.addEventListener('click', () => {
    subjectButton.classList.toggle("show");
    subjectLinks.classList.toggle("show");
});