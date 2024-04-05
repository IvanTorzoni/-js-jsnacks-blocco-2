// Fai inserire un numero, che chiameremo N, all’utente.
// Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100.
// Ogni volta che ne crei uno, stampalo a schermo.


const Array = []

const userRequest = parseInt(prompt("Inserisci un numero"));
console.log(userRequest);

for (i = 0; i < userRequest; i++) {
    const Array = randomNums()
    console.log(Array);
}

// for (let i = 0; i < 10; i++) {
//     let randomNumberGen = randomNums()
// }
