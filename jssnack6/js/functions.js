
/**
 * Descrizione : creo una funzione per creare un array senza l' ultimo elemento
 * @param {array} arrayFunct
 * @returns {array}
 */

function rimuoviDallaCoda(arrayFunct) {
    let result = [];
    for (i = 0; i < arrayFunct.length - 1; i++) {
        result.push(arrayFunct[i])
    }
    return result
}