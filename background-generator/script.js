let select = (input) => document.querySelector(input);

let getId = (input) => document.getElementById(input);

const color1 = select(".color1");
const color2 = select(".color2");
const body = select("#gradient");
const copyButton = select("#copy");
const copyText = select("#myInput");
const buttons = {
    linearBtn: select("#linear"),
    radialBtn: select("#radial"),
    conicBtn: select("#conic")
}


let copyToClipboard = () => {
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
     /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);

    copiedAlert();
  }

let copiedAlert = () => {
    copyText.value = "Code copied!";
}

let gradientType = "linear";
let direction = "to right";

let changeColor = () => {
    //generate background using color input from user
    body.style.background = `${gradientType}-gradient(${direction}, ${color1.value}, ${color2.value})`;
    //show css code
    copyText.value = body.style.background + ";";
}


let linearGradient = () => {
    gradientType = "linear";
    direction = "to right";
    changeColor();
}

let radialGradient = () => {
    gradientType = "radial";
    direction = "circle at center";
    changeColor();
}

let conicGradient = () => {
    gradientType = "conic";
    direction = "from 90deg";
    changeColor();
}


color1.addEventListener("input", changeColor);
color2.addEventListener("input", changeColor);
copyButton.addEventListener("click", copyToClipboard);
copyText.addEventListener("copy", copiedAlert);
buttons.linearBtn.addEventListener("click", linearGradient);
buttons.radialBtn.addEventListener("click", radialGradient);
buttons.conicBtn.addEventListener("click", conicGradient);
