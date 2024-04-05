
/**
 * Descrizione = creiamo una funzione per farmi restituire il numero di elementi nell'array
 * @param {Array} arrayP
 * @returns {number}
 */

function contaElementi(arrayP) {

    let result = 0;
    for (i = 0; i < arrayP.length; i++) {
    result += 1;
    }
    return result
}