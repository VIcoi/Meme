'use strict'



let canvas
let ctx

// let currElement = 'arc'

// function changeEl(elName) {
//     currElement = elName
// }

function init() {
    canvas = document.querySelector('#my-canvas');
    ctx = canvas.getContext('2d')

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




