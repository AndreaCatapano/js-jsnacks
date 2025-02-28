//Crea un array vuoto.
//Chiedi per 6 volte all’utente di inserire un numero,
//se è dispari inseriscilo nell’array


let odds = [];


for (let i = 1; i <= 6; i++) {
    let userInput = prompt(`Inserisci il numero ${i} di 6`);

    let number = parseFloat(userInput);


    if (!isNaN(number)) {
        if (number % 2 !== 0) {
            odds.push(number);
        }
    } else {
        alert("Non è un numero valido! Riprova.");
        i--;
    }
}

console.log(odds);