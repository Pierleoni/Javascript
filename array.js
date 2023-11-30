//gli array sono anch'essi variabili(sono oggetti per l'esattezza)

let pippo=2;
let pluto=3;
let secco = 7; 
let calcare = "accollo";
/* gli array possono essere dichiarati estattamente con qualsiasi variabile; var, let, const. 
Per far capire alla tipizzazione dinamica che si tratta di un array si aprono delle parentesi quadre 
si scirve poi gli elelmnti che contiene seprati dalle virgole.*/
let arrayAlberto = [
    "pippo",
    "pluto",
    "secco"]; 


/* Per accedere agli elemtni dell'array si scrive il nome dell'array seguito da parentesi quadre contenneti l'indice dell'elemento 
*/
arrayAlberto[2];

/* 
in questo modo è anche possbile creare nuovi elemnti all'interno dell'array o dichiarare un intero array o modificarne il contenuto (detto square notation)*/

let arraySTL=[];

arraySTL[0]="spagnoletti";
arraySTL[1]="Guaccero";
arraySTL[2]="Recchia";
arraySTL[3]="Mastruzzi";
arraySTL[4]="rumenaDemerda";

arraySTL[0]="Spagnoletti";
/* Essendo oggetti gli array hanno metodi come le stringhe:
*/ 
//Questo per acceddere numero di elementi dell'array (alert spoiler: le stringhe sono praticamente array di caratteri )
arraySTL.length

/* Questo trasforma l'array in una stringa separando gli elementi con virgole senza spazi */
arraySTL.toString()
//Questo come toString trasforma l'array in una stringa ma separandolo con il testo contentuto nell'argomento 
arraySTL.join( " - " )

//Rimuove l'ultimo elemento dell'array
arraySTL.pop()

//Aggiunge un nuovo elemento alla fine dell'array
arraySTL.push()

//Rimuove il primo elemento di un array e abbassa di 1 l'indice degli altri elementi
arraySTL.shift()

//Aggiunge un nuovo elemento all'inizio dell'array e aggiorna l'indice degli altri 
arraySTL.unshift("zaccheo")

/*cancella l'elemento ma lascia un indirizzo vuoto, ma non l'indice (N.B. da non usare)
delete arraySTL[0]*/

/* il metodo concat permette di unire più array (o aggiungere tot elementi alla fine). 
N.B. non agisce sull'array su cui viene chiamato ma ritorna un nuovo array con gli elementi aggiunti, nell'esempio infatti lo  abbiamo inserito in una variabile  */

let arrConatenato = arraySTL.concat(arrayAlberto)

/*Questo array è detto multi dimensionale perchè conteniene altri array, 
naturalmente gli array possono contenere ulteriori array che a loro volta possono contenere altri array fino all'infinito ovvero finche non crashsa.
*/

let skibbidToilet = [[0,1], [2,3], [666, 51]] 
console.log(skibbidToilet)


/*Per accedere ad un elemento dentro un altro array prima bisogna richiamare la posizione dell'array → in seguito la posizione dell'elemento  */

skibbidToilet[2][0]

//Ritorna un array mutlidimensionale in forma monodimensionale 

skibbidToilet.flat()

//spread operator si può utilizzare al posto di concat, quello che fa e aprire il contentuto dell'array e metterlo come elementi separati all'intenro di dove è stato posizionato
/*ESERCIZIO PER LE FUNZIONI: RICREARE IL METODO FLAT CON GLI SPREAD OPERATOR  */

//let arrSpalmato = [...arrConatenato, ...skibbidTioilet]

//lo splice si usa per immettere nuovi elementi all'interno dell'array; 
//il primo argomento indica la posizione in cui inserirli, 
//il secondo cancella tot elementi a partire da quella posizione 
//quelli dal terzo in poi sono gli elementi da aggiungere 

arraySTL.splice(3, 2,  `leftover crack`, `methCrab`)

/*il metodo sort mette in ordine alfabetico gli elementi di un array */

let band=[`adramelch`, `urgrund`, `necrophobic`,  `sadistic intent`, `meshuggah`, `rigor mortis` ]
band.sort()

//inverte l'ordine degli elementi
band.reverse()



/*il metodo sort funziona per elemti che hanno caratteri perche va in ordine alfabetico perciò puo oridnare i numeri fino al 25 poi fa casino 
all'intenro di sort per fortuna possiamo mettere una funzione 
la funzione avra 2 argomenti(a, b), si puo fare in modo che controlli 
se il valore di a e maggiore di b allora la posizione di a verra spostata in avanti se minore indietro se uguale non verrano spostati.


si possono richiamare piu metodi di seguito su un solo array(o oggetto), 
le modifiche avverrano nell'ordine in cui sono scritti i metodi.*/


//skibbidTioilet.flat().sort(function(a, b){return b-a})


//console.log(skibbidTioilet.flat().sort(function(a, b){return a-b}));

/*se si vuole eseguire una qualsiasi operazione per ogni elementi dell'array si utilizza il metodo .map()
Nel metodo map si usa un arrow function dove si passa per arogmento il singiolo elemento dell'array da modificare 
e dopo la diciharazzione a freccia l'operazione da effettuare */
let a = [0, 12, 22 , 55, 389]
let aMappato=a.map((x)=>
x*2)
console.log(`primo array: ${a}`,`secondo array ${aMappato}`);


