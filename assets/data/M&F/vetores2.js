const prompt = require("prompt-sync")();

let idade1 = [18, 24, 16, 25, 32, 30]
let idade2 = idade1.map(x => x + 1)

console.log("\nIdades em 2023: ", idade1.join(", "))
console.log("\nIdades em 2024: ", idade2.join(", "), "\n")