// L’utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore.


const input1 = prompt("Inserisci il primo numero")
const input2 = prompt("Inserisci il secondo numero")

const input1Number = parseFloat(input1)
const input2Number = parseFloat(input2)

if (!isNaN(input1Number) && !isNaN(input2Number)) {
    if (input2Number === input1Number) {
        console.log("Le parole hanno la stessa quantità di lettere!");
    } else if (input1Number > input2Number) {
        console.log(`Il numero più grande è ${input1Number}`);
    } else {
        console.log(`Il numero più grande è ${input2Number}`);
    }
}
else {
    alert("Input non valido: Ripeti l'operazione");
    window.location.reload();
}