
/* una funzione è una serie d'istruzioni che possono essere richiamate più volte nel codice,
si utilizza per definirla : parole chiave "function"+ "nome della funzione" + callback(apertura ed chiusura par tonde e può includere eventuali parametri)
+ par graffe.
il paramtro di una funzione è una variabile che vine creasta qunado la funzione viene eseguita.Serve a passare dei dati nella funzione quando richiamata 
il parametro può avere un valore predefinito (utilizzndo l'operatore di assegnazione = ) e in alcuni casi può essere assente   */
function schiaffiATito(numSchiaffi = 0) {
    switch (numSchiaffi) {
        case 0:
            //console.error(`JE DEVI MENA`);
            break;
        case 1:
            //console.log(`Daje de nocche`);
            break;
        case 2:
            //console.log(`Essi eravamo pure in tre te menavamo pure in tre`);
            break;
        case 3:
            //console.log(`te sei come er cane de mustafa `);
            break;
        case 4:
            //console.log(`mo t'ammazzo `);
            break;

        default:
            //console.log(`;)`);
            break;
    }
}
/* Per richiamare(eseguire) una funzione si scrive: nome funzione + callback (con eventuali parametri) */
schiaffiATito() //per richiamare una funzione
schiaffiATito(3) //per richiamare una funzione
schiaffiATito //per ritornare le istruzioni di una funzione 
function bestemmia() {
    //console.log(`porco dio cristo maledetto`);
}
bestemmia()

/* alcuni funzioni possono essere messe dentro alcune variabili per essere usate in maniera più comoda
Gli arrow function funzionano solo su una riga sola.
il parametro puo essere dichiarato anche senza paretesi nel caso in cui sia solo uno  */
let poga = (band) => console.log(`sto pogando con gli ${band}`);
poga(`ss death`)
poga("Lana del Rey")




/* return è una keyword che permette di usare una funzione come una variabile. 
un arrow function qualora operasse su di una variabile e come se partisse con uno statement di return */
/* in questo esempio ho chiamto l'arrow func genere all'intenro della callback di funzione listen 
perchè se avessi usato una funzione base avrebbe dato errore  */


let generes = [`speed metal`, `crust`, `black metal`]
let genere = () => generes[Math.floor(Math.random() * 3)]

let music = [[`Motorhead`, `Speedbound`, `Chastain`], [`Warcollapse`, `Doom`, `War Ripper`], [`Bathory`, `Immortal`, `Marduk`]]
function listen(genere) {
    switch (genere) {
        case generes[0]:
            //in questo switch statement utilizzando il return non ho bisogno di mettere break poichè il return una volta chiamto interrompre automaticamente il blocco di codice.

            return music[0][Math.floor(Math.random() * 3)]
        case generes[1]:
            return music[1][Math.floor(Math.random() * 3)]
        case generes[2]:
            return music[2][Math.floor(Math.random() * 3)]
        default:
            break;
    }
}
//dove vedi una func che ritorna un valore non devi considerare che li c'è una funzione ma un valore come nel caso sottostante
//console.log(listen(genere()));

/* una funzione ricorsiva è una funzione che riesegue se stessa all'intenro delle sue istruzioni 
concettualemte non è troppo diversa da un un for o while loop.*/

let count = 0
function giangiacomo(stopAt=0) {
    if (count<stopAt) {
        count++
        console.log("Numero di volte che la funzione viene richiamata: ",count); 
        giangiacomo(stopAt)
    }else{
        return;
    }
}


giangiacomo(3)


