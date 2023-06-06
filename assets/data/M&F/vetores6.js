const prompt = require("prompt-sync")();

let list = [4, 12, 20, 30, 15, 18]
let soma = list.reduce((sum, num) => sum + num);
let media = (soma/list.length)

console.log(`Quantidades: ${list.join(", ")}`)
console.log(`Média: ${media}`)
console.log(`Soma: ${soma}`)