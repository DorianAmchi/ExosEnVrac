var posX;
var posY;
var oldPosX;
var oldPosY;

var timer;

var isClicked = false;

window.onload = function () {
    initialization();
}

function initialization() {
    move();
    //Lorsque  l'on appuie sur le bouton de la souris.
    document.getElementById("carre").onmousedown = function () {
        posX = window.event.clientX; // On initialise la valeur  X de départ de la souris
        oldPosX = window.event.clientX;
        posY = window.event.clientY; // On initialise la valeur  y de départ de la souris
        oldPosY = window.event.clientY;
        isClicked = true;
    }

    //Lorsque l'on déplace la souris
    document.getElementById("carre").onmousemove = function () {
        if (isClicked) {
            console.log("X : " + window.event.clientX + "   Y: " + window.event.clientY);
            var deltaX = oldPosX - event.clientX;
            var deltaY = oldPosY - event.clientY;
            move(deltaX, deltaY);
            oldPosX = event.clientX;
            oldPosY = event.clientY;
        }
    }
    //Lorsque l'on relache le bouton de la souris
    document.getElementById("body").onmouseup = function () {
        isClicked = false;
    }

}

function move(x, y) {

    lRectangle = document.getElementById("rectangle").offsetWidth;
    hRectangle = document.getElementById("rectangle").offsetHeight;
    lCarre = document.getElementById("carre").offsetWidth;
    hCarre = document.getElementById("carre").offsetHeight;

    if (y === undefined || x === undefined) {
        document.getElementById("carre").style.left = ((lRectangle - lCarre) / 2) + "px";
        document.getElementById("carre").style.top = ((hRectangle - hCarre) / 2) + "px";
    } else {
        var offsetX = document.getElementById("carre").offsetLeft;
        var offsetY = document.getElementById("carre").offsetTop;
        document.getElementById("carre").style.left = (offsetX - x) + "px";
        document.getElementById("carre").style.top = (offsetY - y) + "px";
    }
}