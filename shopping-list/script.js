var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listElements = document.getElementsByTagName("li");

function inputLength() {
    return input.value.length;
}

//When clicking the button, create a new li element in the ul list that contains user input from input field. When the item is added, clear the input field. If input field is empty do nothing.
function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";

    li.onclick = toggleDone;
    //CREATE A DELETE BUTTON
    var deleteButton = document.createElement("button");
    deleteButton.appendChild(document.createTextNode("Delete"));
    li.appendChild(deleteButton);
    deleteButton.classList.add("delete");
    //DELETE ELEMENT FROM THE LIST
    deleteButton.onclick = deleteElement;
}


function toggleDone(event) {
    event.target.classList.toggle("done");
}

//Delete the parent
function deleteElement(event) {
    event.target.parentNode.remove();
}

function addListAfterClick() {
    if(inputLength() > 0) {
       createListElement();
    }
}

function addListAfterKeypress(event) {
    if(inputLength() > 0 && event.code === "Enter") {
        createListElement();
    }
}


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);