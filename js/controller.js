'use strict'
let startX;
let mouseDown;
let startY;
let texts;
let canvas;
let ctx;
let textSize;
let selectedText;

function init() {
    canvas = document.querySelector('#my-canvas');
    ctx = canvas.getContext('2d');
    // clearCanvas()
    textSize = 27;
    texts = [];
    selectedText = -1;
    mouseDown = false;
    
}


function ondrawImg(img) {
    drawImg(img);
}

function onNextLine() {
    selectedText = -1;
    document.querySelector('.userText').value = '';
    document.querySelector('.fontPx').innerHTML = 27;
}

function inputChange() {
    if (selectedText < 0) {
        // create new line of text
        const txtOffsetX = canvas.width / 4;
        const txtOffsetY = 50;
        const txtObj = { x: txtOffsetX, y: txtOffsetY, fontSize: textSize };
        texts.push(txtObj);
        selectedText = texts.length - 1;
    }
    var selectedFont = document.querySelector('#font').value;
    var elColor = document.querySelector('.color').value;
    const txt = document.querySelector('.userText').value;
    texts[selectedText].width = ctx.measureText(txt).width;
    texts[selectedText].text = txt;
    texts[selectedText].fontColor = elColor;
    texts[selectedText].fontFamily = selectedFont;
    drowCanvas();
}

function drowCanvas() {
    if (gImg) {
        drawImg(gImg);
        texts.forEach(txtObj => {
            ctx.fillStyle = txtObj.fontColor;
            ctx.strokeStyle = 'black';
            ctx.font = txtObj.fontSize + "px " + txtObj.fontFamily;
            ctx.fillText(txtObj.text, txtObj.x, txtObj.y);
            ctx.strokeText(txtObj.text, txtObj.x, txtObj.y);

        });
        if (document.querySelector('.userText').value !== '') {
        }
    } else {
        alert('Please select piture')
        document.querySelector('.userText').value = '';
    }
}

function textSizeChange(keyWord) {
    if (selectedText >= 0) {
        if (keyWord === 'up') {
            texts[selectedText].fontSize++;
        } else {
            texts[selectedText].fontSize--;
        }
    document.querySelector('.fontPx').innerHTML = texts[selectedText].fontSize;

        drowCanvas();
    }
}

function downloadImg(elLink) {
    var imgContent = canvas.toDataURL('image/jpeg');
    elLink.href = imgContent
}

function onFileInputChange(ev) {
    handleImageFromInput(ev, drawImg)
}

function handleMouseDown(e) {
    e.preventDefault();
    startX = e.offsetX;
    startY = e.offsetY;
    // Put your mousedown stuff here
    for (var i = 0; i < texts.length; i++) {
        if (textHittest(startX, startY, i)) {
            mouseDown = true;
            selectedText = i;
            document.querySelector('.userText').value = texts[selectedText].text;
            document.querySelector('.fontPx').innerHTML = texts[selectedText].fontSize;
            document.querySelector('#font').value = texts[selectedText].fontFamily;
            document.querySelector('#color').value = texts[selectedText].fontColor;

        }
    }
}

// test if x,y is inside the bounding box of texts[textIndex]
function textHittest(x, y, textIndex) {
    var text = texts[textIndex];
    return (x >= text.x &&
        x <= text.x + text.width &&
        y >= text.y - text.fontSize &&
        y <= text.y);
}

function handleMouseMove(e) {

    // debugger
    if (selectedText < 0 || !mouseDown) { return; }
    e.preventDefault();
    // const mouseX = parseInt(e.clientX - canvas.offsetLeft);
    // const mouseY = parseInt(e.clientY - canvas.offsetTop);
    const mouseX = e.offsetX;
    const mouseY = e.offsetY;

    // Put your mousemove stuff here
    var dx = mouseX - startX;
    var dy = mouseY - startY;
    startX = mouseX;
    startY = mouseY;

    var text = texts[selectedText];
    text.x += dx;
    text.y += dy;
    drowCanvas();
}

function handleMouseUp(e) {
    e.preventDefault();
    mouseDown = false;
}

function renderGallery() {
    //get all pics and render with on click to the class .gallery
    // like --  <img onclick="ondrawImg(this)" src="/img/003.jpg" alt="">

}



