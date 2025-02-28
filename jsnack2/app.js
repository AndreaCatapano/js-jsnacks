//L’utente inserisce due parole in successione, con due prompt.
//Il software stampa prima la parola più corta, poi la parola più lunga.


const input1 = prompt("Inserisci la prima parola")
const input2 = prompt("Inserisci la seconda parola")


if (input1.length === input2.length){
    console.log("Le parole hanno la stessa quantità di lettere!");
} else if (input1.length > input2.length) {
    console.log(`Le parola più lunga è " ${input1} " invece la parola più breve è "${input2}"`);
}else {
    console.log(`Le parola più lunga è  "${input2}" invece la parola più breve è "${input1}"`);
}