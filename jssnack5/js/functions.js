/**
 * Descrizione : restituire una stringa con ogni elemento dell' array seguito da una virgola
 * @param {Array}} arrayFunc
 * @returns {string}
 */

function stampa(arrayFunc) {
    let result = ""
    for (i = 0; i < arrayFunc.length; i++) {
        result += `${arrayFunc[i] + ","}`
    }
    return result
}
