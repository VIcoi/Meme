'use strict'

function drawImg(img) {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
}

function renderGallery() {
    //get all pics and render with on click to the class .gallery
    // like --  <img onclick="ondrawImg(this)" src="/img/003.jpg" alt="">
}