// Esercizio 2
// Dare la possibilità di inserire due parole.
// Verificare tramite una funzione che le due parole abbiano la stessa lunghezza.
// Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.

const userRequest1 = prompt("inserisci la prima parola")
console.log(userRequest1);
const userRequest2 = prompt("inserisci la seconda parola")
console.log(userRequest2);

const wordCheckResult = wordCheck(userRequest1, userRequest2);
console.log(wordCheckResult);