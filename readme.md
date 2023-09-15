JS-Paliedispari
=========================
**Esercizio 1**
**Palidroma**
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma

**Procedimento**
1- HTML: Input, bottone e <p> vuoto dentro il quale inserirò il risultato
2- JS: devo creare una funzione che mi restituisce true o false se la parola è palindroma o meno
3- con split trasformo la parola inserita in un array
4- Ciclo l'Arrey tante volte quanta è la lunghezza della parola inserita, e poi lo ciclo al contrario, se le lettere dell'array ciclato sono ugali e nella stessa posizione allora è vero, altrimenti è falso
5- Integro la funzione creata, in un'altra funzione che mi stampi il messaggio corretto
6- Aggiungo l'eventlistener sul bottone
=========================
**Esercizio 2**
**Pari e Dispari**
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

**Procedimento**
1- HTML: inserire gli Input, un option per scegliere pari e dispari, un label per il numero da 1 a 5, il tasto play e il <p> dove verrà stampato il risultato
2- Creare le funzioni semplici:
2.1- Funzione per generare un numero casuale
2.2- Funzione per calcolare la somma
2.3- Funzione per verificare se un numero è pari
3- Creare la funzione principale per eseguire il gioco:
3.1- prendere i riferimenti dall'Html
3.2- generare la somma dei numeri
3.3- verificare se la somma è pari o dispari
3.4- determinare il risultato del gioco
3.5- stampare il risultato
3.6- aggiungere l'event listener che triggherà il tutto al click del bottone play.

