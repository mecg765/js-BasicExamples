var dib = document.getElementById("dibujoCanvas"), dib2 = document.getElementById("dibujoCanvas_2"), lienzo1, lienzo2;

//lienzo1 = dib.getContext("2d");
//dibujarLinea(lienzo1, "blue", 10, 300, 220, 10);
//dibujarLinea(lienzo1, "orange", 300, 10, 10, 220);

lienzo2 = dib2.getContext("2d");
dibujaGrafica_IzquierdaInferior(lienzo2, "blue", 0, 500, 50, 10);
dibujaGrafica_DerechaSuperior(lienzo2, "blue", 0, 500, 50, 10);

function dibujaGrafica_IzquierdaInferior(lienzo, color, inicio, final, lineas, incremento) {
    var i=0;
    var varInicio = 0, varFinal = incremento, xinicio=0, yfinal=incremento;
    var color2 = "purple", color3 = "blue";
    for (i=0; i < lineas; i++) {
        if (i % 2 == 0) {
            color = color2;
        }
        else {
            color = color3;
        }

        dibujarLinea(lienzo, color, inicio, varInicio, varFinal, final);
        //dibujarLinea(lienzo, color, varInicio, inicio, final, varFinal);
        varInicio += incremento; // o yinicio=10*l
        varFinal += incremento; // o xfinal=10*(l+1);
        console.log("Linea " + i);
    }
    DrawFrame(lienzo, "red", 0, 500);
}

function dibujaGrafica_DerechaSuperior(lienzo, color, inicio, final, lineas, incremento) {
    var i=0, xinicio = 0, yfinal = incremento;
    for (i=0; i < lineas; i++) {
        color = GetColor(i, color);

        dibujarLinea(lienzo, color, xinicio, inicio, final, yfinal);
        xinicio += incremento; // o xinicio=10*l
        yfinal += incremento; // o yfinal=10*(l+1);
        console.log("Linea " + i);
    }
    DrawFrame(lienzo, "red", 0, 500);
}

function GetColor(i, color) {
    var color2 = "purple", color3 = "blue";
    if (i % 2 == 0) {
        color = color2;
    }
    else {
        color = color3;
    }
    return color;
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