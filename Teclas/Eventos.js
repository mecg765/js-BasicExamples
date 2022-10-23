var teclas =
{
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

console.log(teclas);
document.addEventListener("keydown", dibujarTeclado);

//First try
//document.addEventListener("mousedown", dibujarMouse);
//document.addEventListener("mouseup", dibujarMouse);
//document.addEventListener("mousemove", dibujarMouse);

var square = document.getElementById("area");
var paper = square.getContext("2d");
var x = 150;
var y = 150;
//exercise
var clickDown = false;
var step = 2;

square.addEventListener("mousedown", activeDraw);
square.addEventListener("mouseup", activeDraw);
square.addEventListener("mousemove", dibujarMouse2);

dibujarLinea(paper, "blue", 148, 148, 151, 151);

function dibujarMouse(evento) {
    dibujarLinea(paper, "pink", x, y, evento.clientX, evento.clientY);
    console.log(evento);
}

function dibujarMouse2(evento) {
    if (clickDown){
        dibujarLinea(paper, "purple",evento.clientX-5, evento.clientY-5, evento.clientX-4, evento.clientY);
    }
    //console.log(evento);
}

function activeDraw(evento) {
    console.log(evento);
    if (evento.type == "mousedown")
        clickDown = true;
    if (evento.type == "mouseup")
        clickDown = false;
}

function dibujarLinea(lienzo, color, xinicial, yinicial, xfinal, yfinal) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 5;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujarTeclado(evento) {
    var colorln = "blue";
    var movimiento = 5;
    switch (evento.keyCode) {
        case teclas.UP:
            dibujarLinea(paper, colorln, x, y, x, y - movimiento);
            y = y - movimiento;
            break;
        case teclas.DOWN:
            dibujarLinea(paper, colorln, x, y + movimiento, x, y);
            y = y + movimiento;
            break;
        case teclas.LEFT:
            dibujarLinea(paper, colorln, x, y, x - movimiento, y);
            x = x - movimiento;
            break;
        case teclas.RIGHT:
            dibujarLinea(paper, colorln, x, y, x + movimiento, y);
            x = x + movimiento;
            break;
        default:
            console.log("Otra tecla");
            break;
    }
}