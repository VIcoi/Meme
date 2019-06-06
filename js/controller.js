'use strict'



let canvas;
let ctx;
let offsetX;
let offsetY;

// let currElement = 'arc'

// function changeEl(elName) {
//     currElement = elName
// }

function init() {
    canvas = document.querySelector('#my-canvas');
    ctx = canvas.getContext('2d');
    // drawImg('../img/IMG.jpg');

    // ondrawImg(img);

    // canvas.width = window.innerWidth - 50
    // canvas.height = window.innerHeight - 100

    // ctx.fillStyle = 'green'
    // ctx.save()
    // drawTriangle()
    // ctx.restore()
    // drawRect()
    // drawArc()
    // clearCanvas()

    // drawImg()
    // drawText('HELLO CANVAS')
}


function draw(ev) {
    ctx.save();
    drawImg();
    // const { offsetX, offsetY } = ev
    // switch (currElement) {
    //     case 'triangle':
    //         drawTriangle(offsetX, offsetY)
    //         break;
    //     case 'rect':
    //         drawRect(offsetX, offsetY)
    //         break;
    //     case 'text':
    //         drawText('test', offsetX, offsetY)
    //         break;
    //     case 'arc':
    //         drawArc(offsetX, offsetY)
    //         break;
    // }
    ctx.restore()
}

function ondrawImg(img) {
    drawImg(img);
}

function inputChange() {
    if (gImg) {
        drawImg(gImg);
        var elColor = document.querySelector('.color').value;
        if (document.querySelector('.userText').value !== '') {
            const txt = document.querySelector('.userText').value;
            const offsetX = canvas.width / 4;
            const offsetY = 50;
            ctx.fillStyle = elColor;
            ctx.strokeStyle = 'black';
            ctx.font = "27px Arial";
            ctx.fillText(txt, offsetX, offsetY);
            ctx.strokeText(txt, offsetX, offsetY);
        }
        /////
        if (document.querySelector('.userText2').value !== '') {
            const txt = document.querySelector('.userText2').value;
            const offsetX2 = canvas.width / 4;
            const offsetY2 = canvas.height - 50;
            ctx.fillStyle = elColor;
            ctx.strokeStyle = 'black';
            ctx.font = "27px Arial";
            ctx.fillText(txt, offsetX2, offsetY2);
            ctx.strokeText(txt, offsetX2, offsetY2);
        }
    } else {
        alert('Please select piture')
        document.querySelector('.userText').value = '';
    }
}





function renderGallery() {
    //get all pics and render with on click to the class .gallery
    // like --  <img onclick="ondrawImg(this)" src="/img/003.jpg" alt="">
}


function onFileInputChange(ev) {
    handleImageFromInput(ev, drawImg)
}
