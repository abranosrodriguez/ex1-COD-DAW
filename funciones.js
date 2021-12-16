/* 
    @function cTem(faren)
    @property {number} centi Variable de tipo numero - Para la temperatura en centigrados
    @property {array} grFaren Array de numero para las temepraturas en faren
    @property {array} grCenti Array vacio pero será para las temperaturas de faren
    @property {number} contador Contador
    @property {number} aux_centi Auxiliar numero para la sensacion termica
**/
function cTem(faren) {
    var centi = 5 / 9 * (faren - 32);
    return centi;
}

var grFaren = [60, 32, 100]; var grCenti = []; var contador;

function exit() {
    for (contador = 2; contador >= 0; contador--) {
        document.write("Valor " + contador + " es " + grFaren[contador] + " F ");
        document.write(" el cual es " + grCenti[contador] + " C");
        tempe(grCenti[contador])
    }
}

function centi() { for (contador = 0; contador <= 2; contador++) { grCenti[contador] = cTem(grFaren[contador]); } }

function tempe(aux_centi) {
    if (aux_centi > 25) {
        document.write(" Hace calor <br />");
    } else if (aux < 15) {
        document.write(" Hace frio <br />");
    } else {
        document.write(" Ni fu ni fa <br />")
    }
}