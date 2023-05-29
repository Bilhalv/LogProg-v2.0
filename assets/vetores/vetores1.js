const prompt = require("prompt-sync")()

let nom = []
let not = []
let con = 1

do {
    let nomtemp = prompt(`${con}o Aluno: `)
    if(nomtemp.toUpperCase() == "FIM"){
        break;
    }
    con++
    let nottemp = Number(prompt("Nota: "))
    nom.push(nomtemp)
    not.push(nottemp)
} while (true);

console.log(`\nAprovados`)
console.log("-".repeat(20))
for(let i = 0; i <= nom.length; i++){
    if(not[i] >= 7){
        console.log(`${nom[i]} - Nota ${not[i]}`)
    }
}

console.log(`\nReprovados`)
console.log("-".repeat(20))
for(let i = 0; i <= nom.length; i++){
    if(not[i] < 7){
        console.log(`${nom[i]} - Nota ${not[i]}`)
    }
}