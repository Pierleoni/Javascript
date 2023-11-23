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
    constructor (id, name, model, description, price, ) {
        this.id = id ;
        this.name = name;
        this.model = model;
        this.description = description;
        this.price =price;
        Product.stock++
    }
    available=false;
    stock=0;
    /* in questo caso per evitare di fare piu statements ho definito un metodo e il blocco di codice (RICORDATI STO NOME DIO PORCO)  dice che la classe product   */
    checkAvail  () {
        /* dentro la funzione checkAvail ho definito che la proprietà available assuma il valore della comparazione scitta dopo l'operatore di assegnazione. */
        Product.available = Product.stock > 0
    };
}
/* extends ti permette di avere nel constructor gli stessi metodi ed funzioni della classe da cui si estende  */
class Guitar  extends Product{
    constructor (stringNumber, fretScaling, fretNumber, color) {
        this.stringNumber = stringNumber;
        this.fretScaling = fretScaling; 
        this.fretNumber = fretNumber; 
        this.color = color; 
    }

}