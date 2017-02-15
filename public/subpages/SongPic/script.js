//Ian Draves Copyright 2016 (C)
//Program written 11/5/2016

//Code to place image on website and get song related to image from image data
function imgProc() {
    var picture = document.getElementById('picture').value; //Getting Image Source
    var placeImg = document.getElementById('image'); //Getting place to put image
    var display = document.getElementById("display"); //Getting html elements for display of output
    var err = 0; //Setting variable to determine if there was an error
    
    placeImg.src = picture; //Selecting image source
    
    placeImg.onerror = function() { //If there is an error with the image source, it will tell the user
        alert("The link you have put in is invalid!");
        var err = 1;
        display.className = 'hidden';
    }
    
    if (err == 0) { //If there is no error with the image source, the image will pop up
        display.className = 'unhidden';
    }
}
