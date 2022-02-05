var d = document.getElementById("dibujoCanvas"), lienzo;
lienzo = d.getContext("2d");
dibujarLinea("blue",10,300,220,10);
dibujarLinea("orange",300,10,10,220);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}