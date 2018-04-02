window.addEventListener("load", init, false);

var started = false,
    canvas,
    context;

function init() {
    canvas = document.getElementById("canvas");
    canvas.width = document.body.clientWidth;
    canvas.height = document.body.clientHeight;
    context = canvas.getContext("2d");

    canvas.addEventListener("mousemove", moveHandler, false);
    canvas.addEventListener("mousedown", downHandler, false);
    canvas.addEventListener("mouseup", upHandler, false);
}

function getCoords(e) {
    var x, y;

    if (e.layerX || e.layerX == 0) { // Firefox
        x = e.layerX;
        y = e.layerY;
    } else if (e.offsetX || e.offsetX == 0) {
        x = e.offsetX;
        y = e.offsetY;
    }

    return { x: x, y: y };
}

function downHandler(e) {
    context.beginPath();
    context.arc(getCoords(e).x, getCoords(e).y, 20,0,2*Math.PI);
    context.fillStyle= getRandomColor();
    context.fill();
    context.stroke();
    started = true;
}

function upHandler(e) {
    started = false;
}

function moveHandler(e) {
    if (started) {
        context.beginPath();
        context.arc(getCoords(e).x,getCoords(e).y, 20,0,2*Math.PI);
        context.fillStyle= getRandomColor();
        context.fill();
        context.stroke();
    }
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}