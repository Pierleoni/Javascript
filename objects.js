
/* Gli oggeti in js sono da considerare come 
blocchi di codice contententi sia dati che istruzioni che possono essere riutilizzati prorpio come delle variabili.
La sintassi per definire gli oggeti sono prima dichiarare l'oggetto, 
poi assegnarlo e tra parentesi graffe definire le sue proprietà (variabili) e i suoi metodi(funzioni) */
let pikachu = {
    /*una proprietà è un dato di un oggetto : si compone di una coppia chiave/valore la chiave è il nome (prima de idue punti), il valore è il valore (shish)
    le chiavi strutturalemte contano come stringhe*/
    puntiSaluti:100, 
    xp: 50,
    puntiAzione: 30,
    nome:`Abbath don't fell like dance`,
    //i metodi sono le funzioni degli oggetti, per definifrle non è troppo diverso la chiave sostituisce il nome della funzione e il valore è il resto della definizione della func.
    elletroshock: function () {
        console.log("Pika Madonna!");
    }
}

//per accedere ai metodi e proprietà si scrive il nome dell'oggetto seguito dal punto e nome della prorietà (dot notation)
pikachu.puntiSaluti
pikachu.elletroshock()
//una proprietà puo essere acceduta, creata o modificata anche tramite la square notation, al suo interno pero la chiave della proprieta deve essere scrtta come una stringa 

pikachu[`puntiSaluti`] = 50
//console.log();



let lemmyKilmeister = {
    name: `lemmy`,
    surname: `Kilmeister`,
    ruoli: [`cantante`, `bassista`],
    band: [`motorhead`, `hawkwind`],
    rig: {
        basses: [`rickenbacker 4001`,`gibson thunderbird IV`, `Hagstrom 8-string`],
        amps: [`marshall signature`, `marshall mf350` ],
        mic: [`shure sm57`],
    }


}

let motorhead = {}
motorhead[`genere`]=`I cazzo di Motorhead, poser di merda!`
motorhead[`bassista`]= lemmyKilmeister
motorhead[`cantante`] = motorhead.bassista
motorhead[`suona`]= () => console.log(`OVERKILL`);
//console.log(motorhead.bassista.rig.amps[1]);



class Pikachu {
    /*quando si crea l'istanza di un oggetto alcune proprietà devono essere assegnate quando viene creato, quesot si fa tramite il metodo built-in delgi oggetti constructor.
    Funziona esattamente come un metodo ma non può avere un nome diveros dal suo. 
    il cons è la fabbrica che da l'ordine di costruire questo oggetto e quando bisogna inserire i singoli  */
    constructor(name=`Pikachu`){
        /* Quando stai lavorando sull'istnaza di un ogetto per riferirti nella classe all'istanza 
        dell'ogetto cui si riferisce, si utilizza la parola chiave 'this'. */
        this.name= name
    };
    attacca(){
    console.log("Pika Dio!");
    };
    imparaMossa(mossa){
        this.mosse.push(mossa)
    };
    mosse = [];
    puntiSaluti=100;
    xp= 50;
    puntiAzione= 30;
    marsupio={
        tascaDX : "cellulare",
        TascaSX : "chiavi",
    }
}
/* new è una keywords che indica una nuovo oggetto istanza della classe pikachu, in questo 
quando crei un oggetto ne chiami il constructor aprendo le parentesi tonde e infilandoci eventuali arogmento */
let stoPikachu= new Pikachu(`Sandro Predappio`)
//console.log(stoPikachu.name);
let numaccaso = Math.random()

