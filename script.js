//\\//\\ ESERCIZIO 1 //\\//\\

function isPalindroma(parola) {

    // Crea un array con le lettere della parola
    const lettere = parola.split('');

    // Verifica se l'array delle lettere è palindromo

    // Ciclo l'Array
    const lunghezza = lettere.length;
    for (let i = 0; i < lunghezza; i++){
    // Se le lettere dell'array ciclato sono uguali e nella stessa posizione dell'array ciclato al contrario Return:False altrimenti Return:True
        if (lettere[i] !== lettere[lunghezza - 1 - i]) {
            return false;
        }
    }
    return true;
}

// Integro il risultato della funzione creato per stampare messaggio corretto

function verificaPalindroma() {
    const inputElement = document.getElementById('parolaInput');
    const risultatoElement = document.getElementById('risultato-es1');
    
    const parola = inputElement.value;

    if (isPalindroma(parola)) {
        risultatoElement.innerHTML = 'La parola è palindroma.';
    } else {
        risultatoElement.innerHTML = 'La parola non è palindroma.';
    }
}

// Aggiungi un event listener al bottone in modo da far partire la verifica al click
const verificaButton = document.getElementById('verificaButton');
verificaButton.addEventListener('click', verificaPalindroma);

//\\//\\ ESERCIZIO 2 //\\//\\

// Funzione per generare un numero casuale compreso tra 1 e 5
function numeroRandomDa1A5() {
    return Math.floor(Math.random() * 5) + 1;
}

// Funzione per calcolare la somma
function sommaNumeri(numeroUtente, numeroComputer) {
    return numeroUtente + numeroComputer;
}

// Funzione per verificare se un numero è pari
function isPari(numero) {
    return numero % 2 === 0;
}

// Funzione principale per eseguire il gioco

function play() {
    // prendo i riferimenti dagli HTML
    const sceltaElement = document.getElementById('scelta');
    const numeroUtenteElement = document.getElementById('numeroUtente');
    const risultatoElement = document.getElementById('risultato-es2');

    // Ottenere la scelta dell'utente (pari o dispari) e il numero inserito dall'utente
    const sceltaUtente = sceltaElement.value;
    const numeroUtente = parseInt(numeroUtenteElement.value);

    // Generare un numero casuale per il computer
    const numeroComputer = numeroRandomDa1A5();

    // Calcolare la somma dei numeri
    const somma = sommaNumeri(numeroUtente, numeroComputer);

    // Verificare se la somma è pari o dispari
    const risultatoPari = isPari(somma);

    let risultatoGioco;

    // Determinare il risultato del gioco in base alla scelta dell'utente e alla parità o disparità della somma
    if ((sceltaUtente === 'pari' && risultatoPari) || (sceltaUtente === 'dispari' && !risultatoPari)) {
        risultatoGioco = 'Hai vinto!';
    } else {
        risultatoGioco = 'Hai perso.';
    }

    // Stampare i risultati nell'elemento "risultato"
    risultatoElement.innerHTML = `Hai scelto: ${sceltaUtente}<br>Numero scelto da te: ${numeroUtente}<br>Numero scelto dal computer: ${numeroComputer}<br>Somma: ${somma}<br>${risultatoGioco}`;
}

// Aggiungi un event listener al bottone in modo da far partire la verifica al click
const playButton = document.getElementById('play');
playButton.addEventListener('click', play);