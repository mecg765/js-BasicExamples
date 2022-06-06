var user_lines = document.getElementById("count_user_ln");
var color_u_1 = document.getElementById("color_u_1").value;
var color_u_2 = document.getElementById("color_u_2").value;
var button = document.getElementById("button");
button.addEventListener("click", DrawWithUserLines);

var dib = document.getElementById("dibujoCanvas"), dib2 = document.getElementById("dibujoCanvas_2"), lienzo1, lienzo2;
var ancho = dib.width-10;

lienzo1 = dib.getContext("2d");
//dibujarLinea(lienzo1, "blue", 10, 300, 220, 10);
//dibujarLinea(lienzo1, "orange", 300, 10, 10, 220);

lienzo2 = dib2.getContext("2d");
var userLn = 50//parseInt(prompt("Ingresa la cantidad de líneas para el dibujo"));

dibujaGrafica_Cuadrado(lienzo2, "blue", 0, 500, userLn, 10);
//dibujaGrafica_DerechaSuperior(lienzo2, "blue", 0, 500, 50, 10);

function DrawWithUserLines() {
    var x = parseInt(user_lines.value);
    console.log(user_lines);

    dibujaGrafica_DerechaSuperior(lienzo1, color_u_1, color_u_2, 0, 500, x, ancho/x);
}

function dibujaGrafica_Cuadrado(lienzo, color, inicio, final, lineas, incremento) {
    var i = 0;
    var varInicio = 0, varFinal = incremento, varFinalDec = final;
    var colorl2 = "purple", color3 = "blue";
    for (i = 0; i < lineas; i++) {
        if (i % 2 == 0) {
            color = colorl2;
        }
        else {
            color = color3;
        }

        dibujarLinea(lienzo, color, inicio, varInicio, varFinal, final);
        dibujarLinea(lienzo, color, varInicio, inicio, final, varFinal);
        dibujarLinea(lienzo, color, inicio, varFinal, varFinalDec, inicio);
        dibujarLinea(lienzo, color, varInicio, final, final, varFinalDec);
        varInicio += incremento; // o yinicio=10*l
        varFinal += incremento; // o xfinal=10*(l+1);
        varFinalDec -= incremento; // o xfinal=10*(l+1);
        console.log("Linea " + i);
    }
    DrawFrame(lienzo, "red", 0, 500);
}

function dibujaGrafica_DerechaSuperior(lienzo, color1, color2, inicio, final, lineas, incremento) {
    var i = 0, xinicio = 0, yfinal = incremento, color;
    for (i = 0; i < lineas; i++) {
        color = GetColor(i, color1, color2);

        dibujarLinea(lienzo, color, xinicio, inicio, final, yfinal);
        xinicio += incremento; // o xinicio=10*l
        yfinal += incremento; // o yfinal=10*(l+1);
        console.log("Linea " + i);
    }
    DrawFrame(lienzo, "red", 0, 500);
}

function GetColor(i, color1, color2) {
    var color, colorl2 = color1, colorl3 = color2;
    if (i % 2 == 0) {
        color = colorl2;
    }
    else {
        color = colorl3;
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