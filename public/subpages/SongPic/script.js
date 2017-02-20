//Ian Draves Copyright 2017 (C)

//Function for image drop
function processImage(image) {
    var songChoice = document.getElementById("song");
    var img = document.getElementById('image');

    //Unhiding elements
    img.className = 'unhiddenimg';
    songChoice.className = 'unhidden';

    img.src = URL.createObjectURL(image);

    //Making sure the slected file is an image
    if (!image.name.match(/.(jpg|jpeg|png|gif)$/i)) {
        alert('The selected file is not an image!');
        img.className = 'hidden';
        return;
    }

    img.onload = function() {
        //Defining variables
        var song;

        var rgb = getAverageColor(img);
        var rgbStr = 'rgb(' + rgb.r + ', ' + rgb.g + ', ' + rgb.b + ')';
        console.log(rgb);

        //Calculating best song
        const totalRGB = rgb.r + rgb.g + rgb.b;
        if (rgb.r >= 208 && rgb.g >= 208 && rgb.b <= 55) { //If brightish-yellow
            song = "<a href='https://www.youtube.com/watch?v=ZbZSe6N_BXs'>\"Happy\", Pharrell Williams</a>";
        }
        else if (rgb.r <= 40 && rgb.g <= 50 && rgb.b <= 170) { //If darkish-blue
            song = "<a href='https://www.youtube.com/watch?v=IXdNnw99-Ic'>\"Wish You Were Here\", Pink Floyd</a>";
        }
        else if (rgb.r <= 180 && rgb.r >= 30 && rgb.g <= 180 &&
                 rgb.g >= 30 && rgb.b <= 180 && rgb.b >= 0) { //If brownish
            song = "<a href='https://www.youtube.com/watch?v=6E1pImAgers'>\"Forever And A Day\", Ian Brown</a>";
        }
        else if (rgb.r >= 200 && rgb.r <= 255 || rgb.g >= 200 &&
                 rgb.g <= 255 || rgb.b >= 200 && rgb.b <= 255) { //If bright colors
            song = "<a href='https://www.youtube.com/watch?v=nEt1bKGlCpM'>\"Idols\", Virtual Riot</a>";
        }
        else if (totalRGB >= 0 && totalRGB <= 225) { //If darker colors
            song = "<a href='https://www.youtube.com/watch?v=PoeEMHSUVxE'>\"Cry Little Sister\", The Lost Boys</a>";
        }
        else if (totalRGB >= 226 && totalRGB <= 345) { //If slightly brighter than dark colors
            song = "<a href='https://www.youtube.com/watch?v=OKRJfIPiJGY'>\"Bela Lugosi's Dead\", Bauhaus</a>";
        }
        else if (totalRGB >= 346 && totalRGB <= 498) { //If medium colors
            song = "<a href='https://www.youtube.com/watch?v=zzjQg-JdwTg'>\"To Let Myself Go\", Ane Brun</a>";
        }

        //Showing user song
        songChoice.innerHTML = "<b>Suggested Song: </b>" + song;
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
    g += data[i+1];
    b += data[i+2];
    }

    r = Math.floor(r / (data.length / 4));
    g = Math.floor(g / (data.length / 4));
    b = Math.floor(b / (data.length / 4));

    return { r: r, g: g, b: b };
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
