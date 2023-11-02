// posso fare varie operazioni con Javascript

let numb1 = 5
let tot

tot=numb1+5-2*3/2
tot*=2
tot+=2
tot-=2
tot/=2


// Questa operazione mostra il resto della divisione anchesi detto modulo
tot=numb1%2
console.log(tot)

// questo metodo ti permette di fare le potenze; poiche numb1 è uguale a 5 in questo  caso la variabile 5 si eleva alla seconda e diventa 25
console.log(Math.pow(numb1,2))
let numb2=5.4
let numb3=Math.PI
let numb4=5.9
let numb5=5.4
// math.floor arrotonda per difetto, math.ceil arrotonda per eccesso, math.round arrotonda in base al numero dopo la virgola; cioè se ho un numero come 5.9 diventa sei se è 5.4 rimane 5
// N.B. dal valore dopo la virgola .5 math round arrotonda per eccesso sotto il .5 arrotonda per difetto

console.log(Math.floor(numb2),Math.ceil(numb4),Math.round(numb5))

tot=numb1*(numb2+numb3) + numb4

console.log(tot) 
