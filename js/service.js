'use strict'

let gImg;


function drawImg(img) {
   
    gImg = img;
    if (canvas.width < img.width) {
        canvas.width = img.width/1.5;
        canvas.height = img.height/1.5;  
    }else if (250 < img.width) {
        canvas.width = img.width*1.5;
        canvas.height = img.height*1.5;  
    }
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
}


function handleImageFromInput(ev, onImageReady) {
    document.querySelector('.share-container').innerHTML = ''
    var reader = new FileReader();

    reader.onload = function (event) {
        var img = new Image();
        img.onload = onImageReady.bind(null, img)
        img.src = event.target.result;
    }
    reader.readAsDataURL(ev.target.files[0]);
}


