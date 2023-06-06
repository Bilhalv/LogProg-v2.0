const prompt = require("prompt-sync")();

let alunos = ["Silvana", "Juliano", "Ricardo", "Patrícia", "Bianca"]

console.log("\nAlunos: ", alunos.join(", "))
let pesq = prompt("Pesquisar aluno: ")
let pos = alunos.indexOf(pesq)

if (pos == -1) {
    console.log("Aluno não encontrado")
}
else {
    console.log(`Consta na ${pos+1}ª posição`)
}