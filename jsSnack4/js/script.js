// scrivere una funzione trovaIndice() che, dati un array e un elemento in input, restituisca la posizione in cui si trova l'elemento all'interno dell'array; se l'elemento non è presente nell'array, allora la funzione deve restituire -1

// Creo l'array
const arrayGen = [1, 2, 3];

//chiedo all' utente un numero tra 1 e 3
const userRequest = parseInt(prompt("Inserisci un numero tra 1 e 3"));

//stampo il risultato
const resultIdx = trovaIndice(arrayGen, userRequest)
console.log(resultIdx);