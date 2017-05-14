//Code Explainer
//Created By Ian Draves
//Ian Draves 2017 (C)

//Defining vairables and obtaining elements
var code = document.getElementById("edittext");
var descArea = document.getElementById("descArea");
var desc = document.getElementById("desc");

//Function that reads and explains code
function processCode() {
    code = code.value;
    descArea.style = "display: block;"
    if(code == "") {
        desc.innerHTML = "You have not inputted any code!";
    }
    else if(code.includes("function") && code.includes("{")) {
        desc.innerHTML = "The code has a function.";
    }
    else {
        desc.innerHTML = "Could not understand code!";
    }
}