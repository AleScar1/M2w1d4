/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*STRINGHE, è una tipologia di dati che rappresenta una sequenza di caratteri.
NUMERI è una tipologia di dati che rappresenta una sequenza di numeri.
BOOLEANI è una tipologia di dati che rappresenta un valore booleano, true o false, quindi il valore di ritorno puo essere o vero o falso , o 1 o zero.
ARRAY e oggetti, sono tipologie di dati che rappresentano una sequenza di elementi o OGGETTI    
NULL è una tipologia di dati che rappresenta l'assenza di un valore.           
UNDEFINED significa che non è mai stato assegnato un valore alla variabile.
*/

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ex 2");
console.log("Oggetti possono definirsi come gruppi di variabili che");
console.log(""); 

/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num1 = 12;
let num2 = 20;
let somma = num1 + num2;
console.log("somma dei numeri 12 e 20: ");
console.log(somma);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 12;

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name = "Alessio";   

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num3 = 4;
let sottrazione = num3 - x;
console.log("sottrazione tra 4 e 12: ");
console.log(sottrazione);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name1 = "john"; 
let name2 = "John";
console.log("name1 è diverso da name2 ? ");
console.log(name1 !== name2);

console.log("name1 stampa prima della conversione in lowercase ");
console.log(name1);
console.log("name2 stampa prima della conversione in lowercase ");
console.log(name2);

console.log(name1.toLowerCase() == name2.toLowerCase());  
console.log("name1 stampa dopo la conversione in lowercase " + name1);
console.log("name1 stampa dopo la conversione in lowercase " + name2);
