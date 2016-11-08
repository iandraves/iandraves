//Ian Draves Copyright 2016 (C)
//Program written 11/5/2016

var count = 0; //Counting variable so images aren't placed more than once

//Code to place image on website and get song related to image from image data
function imgProc() {
    var picture = document.getElementById('picture').value; //Getting Image Source
    var img = new Image(); //Creating image variable to create image from given source
    var pic = document.getElementById('imageFrame'); //Loading image variable

    //Code to make sure image isn't placed more than once
    if(count == 0) {
        count++;
        //Placing image from given source for the first time
        img.onload = function () {
            pic.appendChild(img);
        };
        img.src = (picture); 
    } else {
        //Placing image from given source all after times to prevent additional pictures popping up
        img.onload = function () {
            pic.replaceChild(img);
        };
        img.src = (picture); 
    } 
}
