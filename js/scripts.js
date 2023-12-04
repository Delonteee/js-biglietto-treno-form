/*

    Descrizione:
    Scrivere un programma che chieda all'utente:
    - Il numero di chilometri da percorrere
    - Età del passeggero
    Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, 
    secondo le seguenti regole:
    - il prezzo del biglietto è definito in base ai km (0.21 € al km)
    - va applicato uno sconto del 20% per i minorenni
    - va applicato uno sconto del 40% per gli over 65.

    MILESTONE 1:
    Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un 
    bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) 
    sarà da scrivere in console.

    MILESTONE 2:
    Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in 
    pagina in cui l'utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
    Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo 
    dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). 
    Questo richiederà un minimo di ricerca.

    Nota:
    Se non vi sentite particolarmente creativi, questa potrebbe essere un'implementazione da seguire
    per il secondo milestone. Potete scegliere di implementare una soluzione completamente diversa 
    oppure simile, ma in ogni caso cercate di farla vostra. 

*/


const myButton = document.getElementById('special-button');

myButton.addEventListener('click', function() {

    const myName = document.getElementById('name');
    console.log('myName', myName, typeof myName);
    console.log('myName.value', myName.value, typeof myName.value);

    const myKm = document.getElementById('km');
    console.log('myKm', myKm, typeof myKm);
    console.log('myKm.value', myKm.value, typeof myKm.value);

    const kmInNumero = parseInt(myKm.value);
    console.log('kmInNumero', kmInNumero, typeof kmInNumero);    

    const myRange = document.getElementById('range');
    console.log('myRange', myRange, typeof myRange);
    console.log('myRange.value', myRange.value, typeof myRange.value);

    let price = (kmInNumero * 0.21);
    console.log('price', price, typeof price);

    if (myRange.value == 'child'){
        price *= 0.8;
    } else if (myRange.value == 'senior'){
        price *= 0.6;
    }

    price = price.toFixed(2);

    const myWagon = Math.floor(Math.random() * 10) + 1;
    console.log('myWagon', myWagon, typeof myWagon);

    const myCode = Math.floor(Math.random() * 100000);
    console.log('myCode', myCode, typeof myCode);

    const resultName = document.getElementById('user-name');
    const resultWagon = document.getElementById('wagon');
    const resultCode = document.getElementById('code');
    const resultPrice = document.getElementById('ticket-price');

    resultName.innerHTML = `${myName.value}`;
    resultWagon.innerHTML = myWagon;
    resultCode.innerHTML = myCode;
    resultPrice.innerHTML = price + ' €';

} )

