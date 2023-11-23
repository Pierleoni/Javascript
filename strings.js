// le stringhe possono essere dichiarate sia con le virgolette sia con gli apostrofi sia con le backticks(ALT+96 del tastierino numerico)

let str="porco dio cane ladro inculato\npederasta omofobo amico delle guardie"
let bestimina=`porco dio maledetto dio mannaggia allo sangue di dio`
// \n manda accappo il testo della stringa 
let str4= String.raw `Usando la proprietà String.raw è possible visualizzare le escape sequence come \n `
//console.log(str)
//console.log(str4)

// quelle scritte nelle backticks possono essere formattate con i template literal(${nomeVariabile})
let str2='madonna'
let str3= `porca ${str2}`
//console.log(str3)

// .length è una prorietà delle stringhe che ne rappresenta la lunghezza in caratteri; ad esempio nella prima ho 67 caratteri scritti 
str.length

// le stringhe hanno i caratteri numerati per ordine, l'indice di questa numerazione parte da 0 ovvero per accedere al primo carattere si scrive 0, per il secondo 1, per il terzo 2,etc. 

// per accedere al carattere tramite numerazione si utilizza  il metodo charAt(), il secondo ritorna allo unicode del carattere 
str.charAt(0)
str.    

// i metodi per estrare parti di stringhe si possono utilizzare 3 metodi:
// slice(inizio, fine), substring(inizio, fine), substr(inizio, durata)
str.slice(6,12)

// se si vuole prendere fino alla fine al carattere specificato non si aggiunge il secondo argomento
str.slice(48)

// se nell'argomento di .slice si mettono i numeri negativi partira a contare i caratteri dall'ultimo 
str.slice(-33,-28)

// substring ritorna stringa vuota se vengono assegnati numeri negativi 
str.substring(-7,-13)

// è identica a slice
str.substr(-33, 7)

// .replace scambia una stringa con un altra alla sua prima occorenza, e cioè è sensibile alle maiuscole (case sensitive), 
bestimina.replace(`dio`,`cristo`)

// per ignorarlo il case sensitive usa la regular expression /i
bestimina.replace(/Dio/i,`cristo`)

// in questo caso ogni volta che trova il primo argomento (dio) lo sostituisce con il secondo argomento
bestimina.replace(/dio/g,`cristo`)

// in questo caso ogni volta che trova il primo argomento (dio) lo sostituisce con il secondo argomento, a differenza del primo questo è piu pesante inoltre permette di metterci una variabile invece della regular expression
bestimina.replaceAll(`dio`,`cristo`)

//queto metodo rende tutto maiuscola una stringa, toLowerCase va l'inverso del toUpperCase
str.toUpperCase()
str.toLowerCase()

//ritorna un array di stringhe composto da tutte le sottostringhe separate dal carattere immesso nell'argomento 
str.split(` `)
// trim toglie tutti gli whitespace ad inizio e fine stringa
//console.log(str.trim())