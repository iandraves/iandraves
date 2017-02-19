//Ian Draves Copyright 2017 (C)

//Function retrieves song
function imgProc() {
    //Creating variables and accessing HTML elements
    var picture = document.getElementById('url').value;
    var placeImg = document.getElementById("image");
    var display = document.getElementById("display");
    var noerr = true;
    var edit = document.getElementById("say");
    var song;
    var canvas = document.getElementById('canvas');

    placeImg.src = "test.png";

    placeImg.onerror = function() { //If there is an error with the image source, it will tell the user
        display.className = 'hidden';
        edit.className = 'hidden';
        alert("The link you have put in is invalid!");
    }

    if (noerr) { //Making sure that there is no image source error
        display.className = 'unhidden';
        /*
        var img = new Image();
        img.setAttribute('crossOrigin', 'anonymous');
        img.src = picture;*/
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        var img = document.getElementById("image");
        ctx.drawImage(img, 10, 10);

        console.log(c.toDataURL());
        //placeImg.src = dataURL;
        const rgb = getAverageRGB(placeImg);

        /*Calculating best song
        const totalRGB = rgb.r + rgb.b + rgb.g;
        if (totalRGB >= 0 && totalRGB <= 225) {
            song = "\"Cry Little Sister\", The Lost Boys";
        }
        else if (totalRGB >= 226 && totalRGB <= 410) {
            song = "\"Never Let Me Go,\" Rachel Portman";
        }
        else if (totalRGB >= 411 && totalRGB <= 570) {
            song = "\"After Midnight,\" Eric Clapton";
        }
        else if (totalRGB >= 571 && totalRGB <= 765) {
            song = "\"Best Day of My Life,\" American Authors";
        }*/

        console.log(rgb);

        //edit.innerHTML = "<b>Suggested Song: </b>" + song;
    }
}

//Function that gets image average RGB
function getAverageRGB(imgEl) {
    var blockSize = 5, // only visit every 5 pixels
        defaultRGB = {r:0,g:0,b:0}, // for non-supporting envs
        canvas = document.createElement('canvas'),
        context = canvas.getContext && canvas.getContext('2d'),
        data, width, height,
        i = -4,
        length,
        rgb = {r:0,g:0,b:0},
        count = 0;

    if (!context) {
        return defaultRGB;
    }

    height = canvas.height = imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height;
    width = canvas.width = imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width;

    context.drawImage(imgEl, 0, 0);

    try {
        data = context.getImageData(0, 0, width, height);
    } catch(e) {
        /* security error, img on diff domain */alert('x');
        return defaultRGB;
    }

    length = data.data.length;

    while ( (i += blockSize * 4) < length ) {
        ++count;
        rgb.r += data.data[i];
        rgb.g += data.data[i+1];
        rgb.b += data.data[i+2];
    }

    // ~~ used to floor values
    rgb.r = ~~(rgb.r/count);
    rgb.g = ~~(rgb.g/count);
    rgb.b = ~~(rgb.b/count);

    return rgb;
}
