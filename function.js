
/* una funzione è una serie d'istruzioni che possono essere richiamate più volte nel codice,
si utilizza per definirla : parole chiave "function"+ "nome della funzione" + callback(apertura ed chiusura par tonde e può includere eventuali parametri)
+ par graffe.
il paramtro di una funzione è una variabile che vine creasta qunado la funzione viene eseguita.Serve a passare dei dati nella funzione quando richiamata 
il parametro può avere un valore predefinito (utilizzndo l'operatore di assegnazione = ) e in alcuni casi può essere assente   */
function schiaffiATito(numSchiaffi=0) {
    switch (numSchiaffi) {
        case 0:
        console.error(`JE DEVI MENA`);
            break;
        case 1:
        console.log(`Daje de nocche`);
            break;
        case 2:
        console.log(`Essi eravamo pure in tre te menavamo pure in tre`);
            break;
        case 3:
        console.log(`te sei come er cane de mustafa `);
            break;
        case 4:
        console.log(`mo t'ammazzo `);
            break;
    
        default:
            console.log(`;)`);
            break;
    }
}
/* Per richiamare una funzione nome funzione + callback (con eventuali parametri) */
schiaffiATito() //per richiamare una funzione
schiaffiATito(3) //per richiamare una funzione

function bestemmia() {
    console.log(`porco dio cristo maledetto`);
}
bestemmia()

/* alcuni funzioni possono essere messe dentro alcune variabili per essere usate in maniera più comoda
Gli arrow function funzionano solo su una riga sola.
il parametro puo essere dichiarato anche senza paretesi nel caso in cui sia solo uno  */
let poga = (band) =>console.log(`sto pogando con gli ${band}`);
poga(`ss death`)
poga("Lana del Rey ")

