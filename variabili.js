
// Per mandare una qualsiasi linea di testo in console si utilizza il seguente commando console.log(). 
// Var definisce variabili, per definire una variabile scrivere var + nome variabile = il suo contenuto 


var porcoDio = 666
console.log(porcoDio)
// questi sono i tipi di dato primitivi.

// numbers: rappresentano numeri sia interi che frazionari 
var num1 = 333
// strings: sequenze di caratteri con determinate proprietà 
var stringhe = "Hello World, dio bestia"
// boolean: vero o falso 
var booleano = false
// undefined: variabili per cui è avvenuto una allocazione di memeoria ma non hanno valore 
var indefinito = undefined
// null: il codice sa che dovra creare una allocazione di memoria in RAM ma non c'è ancora l'indirizzo in memoria
// tante variabili maggiore sarà il lavoro svolto dalla RAM quindi diventerà piu lenta 
var nullo = null

//Questa è un assegnazione, cioè ho dichiarato la variabile e basta il valore le è stato assegnato in seguito
var num2 
num2 = num1*2

// Se io volessi cambiare di nuovo il valore della varaibile mi basterà richiamarla e assegnarle nuovamente un altro valore.
num1=666
num2/=2
console.log(num1,num2)

// le stringhe possono essere unite con il simbolo +, in questo caso ho indicato a javascript di fare la somma tra le variabili porco e dio andando cosi a scrivere una sola parola 
var porco = "porco"
var dio = "dio"
console.log(porco + dio)

// il typecasting è un metodo che fa in modo che una variabile diventi un altro tipo di vatriabile. 
// Per essere chiari in questo primo caso ho dato chiamato un var totale con variabile 555 e tramite console.log gli ho detto di aggiungere +5 di valore, il risultato dunque sarà "5555"
var totale = "555"
console.log(totale + 5)
// Qui invece ho detto a Javascript di convertire il totale in un numero prima di fare l'operazione e quindi il risultato sarà 560
console.log(Number(totale) + 5)
var bestemmieTotali = 666
bestemmieTotali = "oggi ho bestiemmato il Signore "+String(bestemmieTotali) + " volte"
console.log(bestemmieTotali)

var array = [1, 2, 3, 4, 5]
var oggetti = {}
