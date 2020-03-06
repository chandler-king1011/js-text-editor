const input = document.querySelector(".form-control");
const output = document.querySelector("#text-output");
const boldButton = document.querySelector("#bold");
const italicButton = document.querySelector("#italic");
const underlineButton = document.querySelector("#underline");
const leftAlignButton = document.querySelector("#left-align");
const centerAlignButton = document.querySelector("#center-align");
const rightAlignButton = document.querySelector("#right-align");


const updateText = (text) => {
    output.innerText = text;
}
const makeBold = () => {
    output.classList.toggle("bold");
    boldButton.classList.toggle("btn-light");
    boldButton.classList.toggle("btn-dark");
}
const makeItalic = () => {
    output.classList.toggle("italic");
    italicButton.classList.toggle("btn-light");
    italicButton.classList.toggle("btn-dark");
}
const underline = () => {
    output.classList.toggle("underline");
    underlineButton.classList.toggle("btn-light");
    underlineButton.classList.toggle("btn-dark");
}
const leftAlign = () => {
    output.style.textAlign = "left";
    leftAlignButton.classList.toggle("btn-light");
    leftAlignButton.classList.toggle("btn-dark");
    centerAlignButton.classList.add("btn-light");
    centerAlignButton.classList.remove("btn-dark");
    rightAlignButton.classList.add("btn-light");
    rightAlignButton.classList.remove("btn-dark");
}
const rightAlign = () => {
    output.style.textAlign = "right";
    rightAlignButton.classList.toggle("btn-light");
    rightAlignButton.classList.toggle("btn-dark");
    centerAlignButton.classList.add("btn-light");
    centerAlignButton.classList.remove("btn-dark");
    leftAlignButton.classList.add("btn-light");
    leftAlignButton.classList.remove("btn-dark");
}
const centerAlign = () => {
    output.style.textAlign = "center";
    centerAlignButton.classList.toggle("btn-light");
    centerAlignButton.classList.toggle("btn-dark");
    rightAlignButton.classList.add("btn-light");
    rightAlignButton.classList.remove("btn-dark");
    leftAlignButton.classList.add("btn-light");
    leftAlignButton.classList.remove("btn-dark");
}


input.addEventListener("keyup", (e) => {
    updateText(e.target.value)
})

boldButton.addEventListener("click", makeBold);
italicButton.addEventListener("click", makeItalic);
underlineButton.addEventListener("click", underline);
leftAlignButton.addEventListener("click", leftAlign);
rightAlignButton.addEventListener("click", rightAlign);
centerAlignButton.addEventListener("click", centerAlign);
