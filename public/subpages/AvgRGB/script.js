//Ian Draves Copyright 2017 (C)

//Defining global variables
var rgbStr;

//Function for image drop
function processImage(image) {
    var rgbval = document.getElementById("rgbval");
    var img = document.getElementById('image');
    var color = document.getElementById('color');
    var hidden = document.getElementById('hiddenstuff');

    //Unhiding elements
    img.className = 'unhiddenimg';
    hidden.className = 'unhidden';

    img.src = URL.createObjectURL(image);

    //Making sure the slected file is an image
    if (!image.name.match(/.(jpg|jpeg|png|gif)$/i)) {
        alert('The selected file is not an image!');
        img.className = 'hidden';
        hidden.className = 'hidden';
        return;
    }

    img.onload = function() {
        var rgb = getAverageColor(img);
        rgbStr = rgb.r + ', ' + rgb.g + ', ' + rgb.b;
        color.style = "background-color: rgb(" + rgbStr + ");";
        color.className = 'unhidden';

        //Showing user RGB value
        rgbval.innerHTML = "<b>RGB Value: </b>" + rgbStr;
    };
}

//Function to get average rgb
function getAverageColor(img) {
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    var width = canvas.width = img.naturalWidth;
    var height = canvas.height = img.naturalHeight;

    ctx.drawImage(img, 0, 0);

    var imageData = ctx.getImageData(0, 0, width, height);
    var data = imageData.data;
    var r = 0;
    var g = 0;
    var b = 0;

    for (var i = 0, l = data.length; i < l; i += 4) {
        r += data[i];
        g += data[i + 1];
        b += data[i + 2];
    }

    r = Math.floor(r / (data.length / 4));
    g = Math.floor(g / (data.length / 4));
    b = Math.floor(b / (data.length / 4));

    return {
        r: r,
        g: g,
        b: b
    };
}

//When user hovers over page with image
document.ondragover = function(event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'copy';
};

//When user drops image on page
document.ondrop = function(event) {
    event.preventDefault();
    var images = event.dataTransfer.files;
    for (var i = 0; i < images.length; i++) {
        processImage(images[i]);
    }
};
