const prompt = require("prompt-sync")()

let num = 0
let par = []

do {
    num = Number(prompt("Numero: "))
    if(num == 0){break}
    if((num%2) == 0){
        par.push(num)
    }
} while (true);

console.log("Pares da lista")
console.log("-".repeat(20))
for(let i = 0; i < par.length; i++){
    console.log(par[i])
}
console.log("-".repeat(20))
console.log(`${par.length} Pares`)