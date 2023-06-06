const prompt = require("prompt-sync")()

let carro = []
let preco = []
let cont = 1

do {
    let carrotemp = prompt(`${cont}o Veiculo: `)
    if (carrotemp.toUpperCase() == "FIM"){
        break;
    }
    let precotemp = Number(prompt("Preco: R$"))

    carro.push(carrotemp)
    preco.push(precotemp)
    cont++
} while (true);
let frete = Number(prompt("Frete: R$"))

console.log("\nTabela de Preços (com Frete)")
console.log("-".repeat(30))
for(let i = 0; i < carro.length; i++){
    console.log(`${carro[i]} - R$ ${(preco[i]+frete).toFixed(2)}`)
}