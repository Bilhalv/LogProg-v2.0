const prompt = require("prompt-sync")();

let salarios = [2300, 3000, 1900, 4500, 2550, 2800]
console.log("\nSalários: ", salarios.join(", "))
let pesq = Number(prompt("Valor Mínimo: "))
let ttl = salarios.filter(x => x >= pesq)

console.log(`Maiores ou iguais: ${ttl.join(", ")}\n`)