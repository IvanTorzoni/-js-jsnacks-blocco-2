

/**
 * Descrizione = creo la funzione per trovare l'elemento nell'array
 * @param {Array} arrayFun
 * @param {number} request
 * @returns {number}
 */

function trovaIndice(arrayFun, request) {
    let result = -1;
    for (i = 0; i < arrayFun.length; i++) {
        if (request === arrayFun[i]){
            result = i;
            return result
        }
    }
    return result
}