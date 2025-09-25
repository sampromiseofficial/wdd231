const dialogBox = document.querySelector("#dialogBox");
const closeButton = document.querySelector("#closeButton");
const dialogBoxText = document.querySelector("#dialogBox div");

const openButton1 = document.querySelector("#openButton1");
const openButton2 = document.querySelector("#openButton2");
const openButton3 = document.querySelector("#openButton3");

openButton1.addEventListener("click", () => {
    dialogBox.showModal();
    dialogBoxText.textContent = "One Apple contains 95 Calories";
});

openButton2.addEventListener("click", () => {
    dialogBox.showModal();
    dialogBoxText.textContent = "One Orange contains 45 Calories";
});

openButton3.addEventListener("click", () => {
    dialogBox.showModal();
    dialogBoxText.textContent = "One Banana contains 165 Calories";
});

closeButton.addEventListener("click", () => {
    dialogBox.close();
});
