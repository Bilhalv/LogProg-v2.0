const prompt = require("prompt-sync")();

let normal = [40000, 50000, 32000, 60000, 45000]
let entrada = normal.map(x => x * 0.3)

console.log(`\nR$ dos Veículos: ${normal.join(", ")}`)
console.log(`R$ das Entradas: ${entrada.join(", ")}\n`)