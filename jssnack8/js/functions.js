
/**
 * Descrizione : creo una funzione per creare un array con come primo elemento il numero inserito dall'utente
 * @param {array} arrayFunct
 * @param {string} Elem
 * @returns {array}
 */

function rimuoviDallaTesta(arrayFunct, elem) {
    let result = [elem];
    for (i = 0; i < arrayFunct.length; i++) {
        result.push(arrayFunct[i])
    }
    return result
}