/* 
    @function c(d)
    @property {number} c Variable de tipo numero
    @property {array} df Array de numero
    @property {array} dc Array vacio
    @property {number} contador Contador
    @property {number} aux Auxiliar numero
**/
function c(d) {
    var c = 5 / 9 * (d - 32);
    return c;
}

var df = [60, 32, 100]; var dc = []; var contador;

function b() {
    for (contador = 2; contador >= 0; contador--) {
        document.write("Valor " + contador + " es " + df[contador] + " F ");
        document.write(" el cual es " + dc[contador] + " C");
        fc(dc[contador])
    }
}

function a() { for (contador = 0; contador <= 2; contador++) { dc[contador] = c(df[contador]); } }

function fc(aux) {
    if (aux > 25) {
        document.write(" Hace calor <br />");
    } else if (aux < 15) {
        document.write(" Hace frio <br />");
    } else {
        document.write(" Ni fu ni fa <br />")
    }
}