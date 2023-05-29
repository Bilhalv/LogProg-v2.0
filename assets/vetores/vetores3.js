const prompt = require("prompt-sync")()

let times = []
let clu = 1

do {
    let tim = prompt(`${clu}o Clube: `)
    times.push(tim)
    clu++
} while (times.length < 10);

console.log("Jogos")
console.log("-".repeat(20))

for(let i = 0; i < 10; i += 2){
    console.log(`${times[i]} x ${times[(i+1)]}`)
}