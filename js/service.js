'use strict'

let gImg;


function drawImg(img) {
    gImg = img;
    const img1 = new Image();
    img1.src = img.src;
    console.log( 'img', img.src);
    console.log( 'img1', img1.src);
    
    canvas.width = window.innerWidth * 0.8;
    canvas.height = (img1.height * canvas.width) / img1.width;  
    
    ctx.drawImage(img1, 0, 0, canvas.width, canvas.height)
    console.log(img1.height);
    // console.log(canvas.width);
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

function createPic(params) {
    
}
