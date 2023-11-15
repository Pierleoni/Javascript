
/*gli if statements sono blocchi di codice cher vengono eseguiti se una determinata condizione viene soddisfatta.
(quando si parla di condizioni e loop quello che vine scritto tra paretesi è chiamato condizioni)*/

let età = 12;
let fregna = true 

if(età<12){
    console.log(`me la scopo`);
    //se la condizione non è soddisfatta ma possono esserci altri casi allora si utilizza l'else if 
} else if(età<18||fregna) {
    //puoi naturalmente creare lka logica che preferisci all'interno delle parentesi tonde 
    console.log(`gli infilo una noce di cocco su per il deratano`);
    //se invece nessuna condizione viene soddisfatta ma si vuole comunque far eseguire delle determinate istruzioni si utilizza else 
} else{
    console.log(`chiama er Breccola`);
    //se non fosse stato utilizzato il blocco else tutto quanto il blocco sarebbe stato saltato dal compilatore 
}

for (let i = 0; i <= 12; i++) {
    if (i!=12) {
        console.log(`buoni ${i} anni, amore! Adesso prepara l'olio de cocco`);
    } else {
        console.log(`levateVecchiaDeMerda`);
    }
}
//ESERCIZIO: UN DOS TRE N PASITO BAILANTE MARIA

/*ho dichiarato una variabile "a" che deve partire dal numb 0 e contare fino a 3 e ogni volta che si ripete deve aumentare di 1,
dopodiche ho creato dentro il primo for loop un secondo for loop  con una variabile b che parte da 1 e deve contare fino a 3 (perche la condizione è <4.).
l'if statement che segue il for loop ha nella codizione il controllo per un numrero dispari (per modificare tra bailante e baila). */
for (let a = 0; a <=3; a++) {
    
    
    for (let b = 1; b<4; b++) {
        console.log(`${b}`);
    }
    if (a%2!==0) {
        console.log(`un pasito baila`);
    }else{
        console.log(`un pasito bailante Maria`);
    } 
}
/* il loop for of serve per iterare(=snocciolare) gli elementi di un array.
Nelle codnizioni viene cresto una variabile con let a cui viene assegnato a ogni iterazione il rispettivo elemento dell'array  */
let arrayPasito=[`un`, `dos`, `tres`]
for (let a = 0; a <=3; a++) {
    for (let elem of arrayPasito) {
        console.log(elem);
    }
    if (a%2!==0) {
        console.log(`un pasito baila`);
    }else{
        console.log(`un pasito bailante Maria`);
    } 
}

/* il metodo degli array .forEach è all'incirca la stessa cosa del  loop for of le differenze sono che 
il forEach è piu leggibile dal codice e può essere usato in posti dove il for of non può essere usato */

arrayPasito.forEach( elmnt => 
    {console.log(elmnt);});
let c=0

/* il while loop esegue l'istruzioni del blocco finche la codnizione è vera
N.B. se non lo fai temrinare ti fotte il codice*/
while (c<3) {
    console.log(c);
    c++;
}

/* il do while è esattemente come il while loop con la differenza che se anche la codnizione non è soddisfatta il codice nel blocco viene eseguito almeno una volta */
do {
    console.log("Come vei lo sta esegueno il do while");
} while (c<3);


let cazziInCulo=0

/* lo switch statement controlla una condizione alla quale devono essere assegnati diversi comportamenti per diversi valori
il deafult nello switch statemetn è da contare come il case che prende tutti quelli non specificati. */
switch (cazziInCulo) {
    case 0:
        console.log(`uffiii :(`);
        break;
    case 1: 
    console.log(`ma che ce stai a soffia?`);
        break;
    case 3: 
    case 4: 
    console.log(`se mo li sento`);
        break;
    case 5: 
    console.log(`mmmm :3`);
        break;
    case 6: 
    console.log(`sborro forse`);
        break;
    default:
        console.log(' *.*');
        break;
}
/* DA FARE : UNA VOLTA FATTI GLI OGGETTI  */
for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}