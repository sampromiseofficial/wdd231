const byuiCourse = {
  code: "WDD 131",
  name: "Dynamic Web Fundamentals",
  sections: [
    { sectionNum: 1, roomNum: "STC 353", enrolled: 26, days: "TTh", instructor: "Brother Hayes" },
    { sectionNum: 2, roomNum: "STC 347", enrolled: 25, days: "TTh", instructor: "Brother Hayes" }
  ],

  changeEnrollment(sectionNum, add = true) {
    const sectionIndex = this.sections.findIndex(sec => sec.sectionNum == sectionNum);
    if (sectionIndex >= 0) {
      if (add) {
        this.sections[sectionIndex].enrolled++;
      } else {
        this.sections[sectionIndex].enrolled--;
      }
    }
  }
};

export default byuiCourse;
