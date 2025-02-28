//Il software deve chiedere per 10 volte all’utente di inserire un numero.
//Il programma stampa la somma di tutti i numeri inseriti.
let numbers = []; 
let somma = 0;

for (let i = 1; i <= 10; i++) {
    let userInput = prompt(`Inserisci il numero ${i} di 10`);

    let number = parseFloat(userInput);

    if (!isNaN(number)) { 
        numbers.push(number);
    } else {
        alert("Non è un numero valido! Riprova.");
        i--;
    }

    somma += number;
}

console.log(numbers)
console.log(somma)