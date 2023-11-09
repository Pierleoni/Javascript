
/*gli if statements sono blocchi di codice cher vengono eseguiti se una determinata condizione viene soddisfatta  */

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

