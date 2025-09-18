export function setTitle(course) {
  document.querySelector("#courseTitle").textContent = `${course.code}: ${course.name}`;
}

export function renderSections(sections) {
  const sectionDiv = document.querySelector("#sections");
  sectionDiv.innerHTML = "";
  sections.forEach(section => {
    sectionDiv.innerHTML += `
      <p>
        Section ${section.sectionNum} | Room: ${section.roomNum} | 
        Enrolled: ${section.enrolled} | Days: ${section.days} | 
        Instructor: ${section.instructor}
      </p>
    `;
  });
}
