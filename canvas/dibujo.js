var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) {

    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, xinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();

}

dibujarLinea("red", 20, 200, 150, 50);
dibujarLinea("blue", 150, 30, 20, 200);