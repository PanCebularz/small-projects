function select(input) {
    return document.querySelector(input);
}

function getId(input) {
    return document.getElementById(input);
}

var css = select("h3");
var color1 = select(".color1");
var color2 = select(".color2");
var body = select("#gradient");
var copyButton = select("#copy");
var copyText = document.getElementById("myInput");
var linearBtn = select("#linear");
var radialBtn = select("#radial");
var conicBtn = select("#conic");


function copyToClipboard() {
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
     /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);

    copiedAlert();
  }

function copiedAlert() {
    copyText.value = "Code copied!";
}

var gradientType = "linear";
var direction = "to right";

// function radialGradient() {
//     radialBtn.classList.add("active");
// }

function changeColor() {
    //generate background using color input from user
    body.style.background = gradientType + "-gradient("+direction+", " + color1.value + ", " + color2.value + ")";
    //show css code
    copyText.value = body.style.background + ";";
}

function linearGradient() {
    gradientType = "linear";
    direction = "to right";
    changeColor();
}

function radialGradient() {
    gradientType = "radial";
    direction = "circle at center";
    changeColor();
}

function conicGradient() {
    gradientType = "conic";
    direction = "from 90deg";
    changeColor();
}

color1.addEventListener("input", changeColor);
color2.addEventListener("input", changeColor);
copyButton.addEventListener("click", copyToClipboard);
copyText.addEventListener("copy", copiedAlert);
linearBtn.addEventListener("click", linearGradient);
radialBtn.addEventListener("click", radialGradient);
conicBtn.addEventListener("click", conicGradient);
