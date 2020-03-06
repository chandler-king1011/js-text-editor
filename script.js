const input = document.querySelector(".form-control");
const output = document.querySelector("#text-output");
const boldButton = document.querySelector("#bold");
const italicButton = document.querySelector("#italic");
const underlineButton = document.querySelector("#underline");
const alignButtons = document.getElementsByClassName("align");


const updateText = (text) => {
    output.innerText = text;
}
const makeBold = () => {
    output.classList.toggle("bold");
    boldButton.classList.toggle("active");
    
}
const makeItalic = () => {
    output.classList.toggle("italic");
    italicButton.classList.toggle("active");
    
}
const underline = () => {
    output.classList.toggle("underline");
    underlineButton.classList.toggle("active");
}
const alignText = (button ,alignType) => {
    output.style.textAlign = alignType;
    button.classList.add("active");

    const buttons = document.getElementsByClassName("align");
    for (i = 0; i < buttons.length; i++) {
        if (buttons[i] != button) {
            buttons[i].classList.remove("active");
        }
    }
}



input.addEventListener("input", (e) => {
    updateText(e.target.value)
})
boldButton.addEventListener("click", makeBold);
italicButton.addEventListener("click", makeItalic);
underlineButton.addEventListener("click", underline);

