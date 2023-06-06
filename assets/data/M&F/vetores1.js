const prompt = require("prompt-sync")();

let nomes = ["Silvana", "Juliano", "Ricardo", "Patrícia", "Bianca"]
let caps = nomes.map(x => x.toUpperCase())

console.log("\nNomes: ", nomes.join(", "))
console.log("\nDestaques: ", caps.join(", "), "\n")