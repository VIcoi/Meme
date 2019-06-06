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

function inputChange(txt, x, y) {
    if (gImg) {
        drawImg(gImg);
        ctx.fillStyle = 'orange';
        ctx.strokeStyle = 'black';
        ctx.font = "27px Arial";
        ctx.fillText(txt, x, y);
        ctx.strokeText(txt, x, y);
    } else {
        alert('Please select piture')
        document.querySelector('.userText').value = '';
    }
}

