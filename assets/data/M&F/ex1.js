const prompt = require("prompt-sync")()

//Elaborar um programa que leia nome e nota de ‘n’ alunos (até ser digitado ‘Fim’ no nome ou que o usuário indique que não quer continuar). Após, liste os alunos em 2 grupos: Aprovados (nota >= 7) e Reprovados (nota < 7)

let alu = 1
let rep = []
let apr = []
let temp = 0

do {
    alutemp = prompt(`${alu}º Aluno: `)
    if((alutemp.toUpperCase()) == "FIM"){
        break;
    }
    nottemp = Number(prompt("Nota: "))
    fimtemp = `${alutemp.padEnd(10)} = ${nottemp}`

    if(nottemp >= 7){
        apr.push(fimtemp)
    } else{
        rep.push(fimtemp)
    }
    alu++
} while (true);

console.log("Aprovados")
console.log("-".repeat(20))
do {
    console.log(apr[temp])
    temp++
    if(temp == alu-1){
        break;
    }
} while (true);
temp = 0
console.log("Reprovados")
console.log("-".repeat(20))
do {
    console.log(rep[temp])
    temp++
    if(temp == alu-1){
        break;
    }
} while (true);