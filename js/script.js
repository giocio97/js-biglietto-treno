// prezzo biglietto
let prezzoBiglietto = 0.21;
let prezzoFinale


//  chiediamo il numero di chilometri che vuole percorrere
const chilometri = parseInt(prompt("Quanti chilometri vuoi percorrere?"));


console.log(chilometri);

// chiediamo eta passeggero

const eta = prompt(" Quanti anni hai?");

console.log (eta);


// prezzo scontato per minorenni
const prezzoMinorenni = prezzoBiglietto * 80 / 100;

// prezzo scontato per over65
const prezzoOver = prezzoBiglietto * 60 / 100;


if  ( eta < 18 ) {
    let prezzoFinale = chilometri * prezzoMinorenni;
    prezzoFinale = prezzoFinale.toFixed();
    console.log(prezzoFinale);
    } else if (eta > 65) {
        let prezzoFinale = chilometri * prezzoOver;
        prezzoFinale = prezzoFinale.toFixed();
        console.log(prezzoFinale);
    } else { 
        let prezzoFinale= chilometri * prezzoBiglietto;
        prezzoFinale = prezzoFinale.toFixed();
        console.log(prezzoFinale);
           
    }

    document.getElementById("costobiglietto").innerHTML= `il costo del tuo biglietto è: ${prezzoFinale} €`; 
 
