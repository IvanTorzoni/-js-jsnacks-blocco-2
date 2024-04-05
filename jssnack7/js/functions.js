
/**
 * Descrizione : creo una funzione per creare un array senza il primo elemento
 * @param {array} arrayFunct
 * @returns {array}
 */

function rimuoviDallaTesta(arrayFunct) {
    let result = [];
    for (let i = 1; i < arrayFunct.length; i++) {
        result.push(arrayFunct[i])
    }
    return result
}