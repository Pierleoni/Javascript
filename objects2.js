// gli ogetti json sono ogetti che comunicano informazioni su internet

/*let audioAddicted = {
    products : {

        ChitarreEBassi :
        ChitarreElettriche : 
chitarreClassiche :
chitarreAcustiche :
bassiElettrici :
bassiAcusticiESemi-Acustici :
ukulele :
strumentiBluegrass,Blues,Folk :
travel Guitar :
miscellaneaStrumentiACorda :
amplificatoriPerChitarreElettriche :
amplificatoriPerBasso :
amplificatoriPerChitarreAcustiche :
corde :
effettiPerChitarreEBassi :
pickup :
ricambiPerChitarreEBassi :
accessori :
sistemiWirelessPerChitarreEBassi :
spartitiEDidatticaPerChitarra :

        BatterieEPercussioni :
        TastiereEPianoforti :
        StudioERegistrazione :
        Software :
        AudioProfessionale PA :
        LuciEPalchi :
        AttrezzatureDJ :
        Video/Podcasting :
        Microfoni :
        ProcessoridiSegnaliEdEffetti :
        StrumentiAFiato :
        StrumentiTradizionali :
        SpartitiMusicali,Libri,CDeDVD :
        Custodie,RacksEBorse :
        CaviEConnettori :
        Accessori :
        StompenbergFX :
        
    },
    orders : {

    },
    infos : {

    },
    clients : {

    },
    users : {

    }
}*/

class Product {
    constructor(id, name, model, description, price,) {
        this.id = id;
        this.name = name;
        this.model = model;
        this.description = description;
        this.price = price;
        Product.stock++
    }
    available = false;
    stock = 0;
    /* in questo caso per evitare di fare piu statements ho definito un metodo e il blocco di codice (RICORDATI STO NOME DIO PORCO)  dice che la classe product   */
    checkAvail() {
        /* dentro la funzione checkAvail ho definito che la proprietà available assuma il valore della comparazione scitta dopo l'operatore di assegnazione. */
        Product.available = Product.stock > 0
    };
}
/* extends ti permette di avere nel constructor gli stessi metodi ed funzioni della classe da cui si estende  */
class Guitar extends Product {
    constructor(stringNumber, fretScaling, fretNumber, color) {
        this.stringNumber = stringNumber;
        this.fretScaling = fretScaling;
        this.fretNumber = fretNumber;
        this.color = color;
    }

}

/* un oggertto data è un oggetto che contioene info per quanto riguarda ore, sec, min, gg, mesi ed anni */
/* la classe Date è una classe built-in(cioè gia configurata dentro js) e per questo non serve ricrearla ogni volta  */
let dataOd = new Date
// getTime fa attribuisce all'oggetto Date giorno, mese ,anno, etc. fino al millisecondo quando viene chiamata 
dataOd.getTime()

/* gli oggetti date hanno 2 metodi principali: get ed set 
quando vuoi creare una variabile che non deve essere riscirtta ma solo letta la rendi privata. Per leggerla e modificarla si usano i metodi get e set
Nell'oggeto date ogni proprietà conta come privata quindi per leggere e modificare la data utilizzerai rispettivamente i metodi built-in come get e set. */
dataOd.getFullYear()

dataOd.setFullYear(2024)
//Anche l'indicizzazione dei mesi è zero-based
//get/setYear accetta solo un numero di due cifre come per esempio 98, 99, etc. Questo metodo è deprecato da get/setFullYear.
//se metto un valore in getYear me lo visualizza come un anno del secolo scorso, se volessi visualizzare l'anno in corso devo mettere le backsticks e allora interno `gg/mm/yyyy`
dataOd.getYear()
dataOd.setMonth(11, 23)
/*il metodo .setDate tiene conto dei giorni del mese e se superi i giorni di quel mese ti fa vedere automaticemente il mese successivo, 
se metto 0 gli assegna l'ultimo giorno del mese precedente. Se mettessi i numeri negativi mi va all'indietro di tot giorni a seconda del numero
N.B. non accetta i floating point.
.setDate significa setta da tot giorni da questa data (anche gli altri metodi significano questi), ovviamente una volta che la data è stata assegnata */
dataOd.setDate(-1)

/* il metodo .setHours setta ore, min, sec e ms come per setDate/Month se sforo con i valori massimi mi setta l'unità di tempo maggiore successiva.
N.B. l'unico parametro obbligatorio è il primo, per andare ad impostare misure di tempo più piccole delle ore usare gli altri metodi per min, sec e ms */
dataOd.setHours(17, 0, 72, 0)
//setMinutes imposta minuti, sec e ms
dataOd.setMinutes(0)
//setSeconds imposta sec ed ms
dataOd.setSeconds(0)
//setMilliseconds imposta i ms 
dataOd.setMilliseconds(0)
//il metodo getDay rotorna in maniera numerica i giorni della settimana; parte da domenica (mooooolto anglocapitalista) ed è zero-based (domenica = 0)
dataOd.getDay()
//ti indovinerà il fuos orario a cui è stata settata la stringa 
dataOd.getTimezoneOffset()

/* tutti i metodi get e set hanno hanno la versione UTC */

/* per creare una data dentro il constructor bisogna scrivere la data partendo da anno-mese-giornoTora:min:sec.ms 
dai minuti in giu puoi fare  vedere un cambio di fuso orario (time zone) scrivendo +00:00
il formato  YYYY-MM-DDTHH:mm:ss:sss */
const mioComple = new Date(`1998-04-20T12:30:00.001+02:00`)

let mioCumple = new Date()
/*toISOString()
il metddo .toISOString ti converte l'oggetto data in una stringa ISO, di ocnsequenza verrnao visualizzate anche la T ed eventuali dati aggiungtivi come il fuso orario 
.toString()
mostra la stringa delle date come vengono visualizzate in console.
.toDateString()
mostra solo giorno, mese, anno e giorno della settimana 
.toJSON()
mostra la data in forma di oggeto JSON
toLocaleDateString
mostra la data nella denominazione locale (per noi EU mostra giorno, mese, anno)
.toLocaleString()
mostra l'orario locale oltre alla data locale 
.toLocaleTimeString()
mostra l'orario locale nella formattazione locale 
.valueOf()
mostra il valore di ms per la data dell'evento chè l'epoca e quindi parte dal primo gennaio 1970(poichè il formato data è stato creato nel 1970)

*/
/* un modo per inizializzare una data può essere sia con la stringa iso mettendo argomento per argomento partendo dall'anno,giorno, mese, etc.   
let now=new Date(2019, 10, 4, 23, 0, 11, 131).

un oggetto data puo essere passato nel arogmento del constructor di un altro oggetto data 
let now = new Date (mioComple)

const start= Date.now ()
mostra il valore dei millisecondi a partire dalle 00:00 i gennaio 1970(UTC)
*/
const start = Date.now()
/*crea un timeout dove il primo argomento sono le istruzioni da eseguire e il secondo il tmepo in ms che deve passare 
setTimeout(console.log(`Cucù`), 5000)*/
const end = Date.now()
let elapsed = new Date(end - start)

let now = new Date(Date.now())

/* in questa funzione passo una data di nascita per detemrinare il compleanno a cui poi verrà assegnato l'anno corrente  */
/*function ggAlComple(comple) {
    let thisYearBirthDay = new Date (comple)
    thisYearBirthDay.setFullYear(now.getFullYear())
    return (new Date (Date.now())-thisYearBirthDay)/86400000
}*/

function ggAlComple(comple) {
    let today = new Date();
    let thisYearBirthDay = new Date(comple);
    thisYearBirthDay.setFullYear(today.getFullYear());

    // Check if the birthday has already occurred this year
    if (thisYearBirthDay < today) {
        thisYearBirthDay.setFullYear(today.getFullYear() + 1); // Set to next year
    }

    // Calculate the difference in days
    let timeDifference = thisYearBirthDay - today;
    let daysUntilBirthday = timeDifference / (1000 * 60 * 60 * 24);

    return daysUntilBirthday;
}

// Example usage
let daysUntilBirthday = ggAlComple("1998-04-20");
console.log("Days until birthday:", daysUntilBirthday);

//console.log(`prova date : ${(now-thisYearBirthDay)/2160000}` );
//console.log(`prova date : ${ggAlComple(mioComple)}` );

