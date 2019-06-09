'use strict'



let canvas;
let ctx;
let offsetX;
let offsetY;
let textS = 27;

// let currElement = 'arc'

// function changeEl(elName) {
//     currElement = elName
// }

function init() {
    canvas = document.querySelector('#my-canvas');
    ctx = canvas.getContext('2d');
    // clearCanvas()
}


function ondrawImg(img) {
    drawImg(img);
}

function inputChange() {
    if (gImg) {
        drawImg(gImg);
        var selectedFont = document.querySelector('#font').value;
        console.log(selectedFont);
        
        var elColor = document.querySelector('.color').value;
        if (document.querySelector('.userText').value !== '') {
            const txt = document.querySelector('.userText').value;
            const offsetX = canvas.width / 4;
            const offsetY = 50;
            ctx.fillStyle = elColor;
            ctx.strokeStyle = 'black';
            ctx.font = textS + "px " + selectedFont;
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
            ctx.font = textS + "px " + selectedFont;
            ctx.fillText(txt, offsetX2, offsetY2);
            ctx.strokeText(txt, offsetX2, offsetY2);
        }
    } else {
        alert('Please select piture')
        document.querySelector('.userText').value = '';
        document.querySelector('.userText2').value = '';
    }
}

function textSizeChange(keyWord) {
    if (keyWord === 'up') {
        ++textS;
    } else {
        --textS;
    }
    inputChange();
}


function onFileInputChange(ev) {
    handleImageFromInput(ev, drawImg)
}


function renderGallery() {
    //get all pics and render with on click to the class .gallery
    // like --  <img onclick="ondrawImg(this)" src="/img/003.jpg" alt="">

}



