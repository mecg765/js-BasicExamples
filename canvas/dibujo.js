var dib = document.getElementById("dibujoCanvas"), dib2 = document.getElementById("dibujoCanvas_2"), lienzo1, lienzo2;

//lienzo1 = dib.getContext("2d");
//dibujarLinea(lienzo1, "blue", 10, 300, 220, 10);
//dibujarLinea(lienzo1, "orange", 300, 10, 10, 220);

lienzo2 = dib2.getContext("2d");
dibujaGrafica(lienzo2, "blue", 0, 500, 50, 10);

function dibujaGrafica(lienzo, color, inicio, final, lineas, incremento) {
    var l = 0;
    var yinicio = 0, xfinal = incremento;
    var color2 = "purple", color3 = "blue";
    while (l < lineas) {
        if (l % 2 == 0) {
            color = color2;
        }
        else {
            color = color3;
        }

        dibujarLinea(lienzo, color, inicio, yinicio, xfinal, final);
        yinicio += incremento; // o yinicio=10*l
        xfinal += incremento; // o xfinal=10*(l+1);
        console.log("Linea " + l);
        l++;
    }
    DrawFrame(lienzo, "red", 0, 500);
}

function DrawFrame(lienzo, color, puntoInicio, puntoFinal) {
    var inicio = puntoInicio + 1, final = puntoFinal - 1;
    dibujarLinea(lienzo, color, inicio, inicio, inicio, final); // izquierda
    dibujarLinea(lienzo, color, inicio, inicio, final, inicio); // arriba
    dibujarLinea(lienzo, color, final, inicio, final, final); // derecha
    dibujarLinea(lienzo, color, inicio, final, final, final); // abajo
}

function dibujarLinea(lienzo, color, xinicial, yinicial, xfinal, yfinal) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}