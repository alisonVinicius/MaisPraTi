// A linha de código abaixo é importante para facilita
// a obtenção de entrada do usuário no console do
// Node.js. O módulo prompt-sync fornece uma função que
// retorna uma nova função para coletar entradas do
// teclado, simplificando a interação com o usuário.
const prompt = require('prompt-sync')()


// Faça um programa que leia o dia da semana (Domingo, 
// Segunda, Terça, Quarta, Quinta, Sexta e Sabado).
// Esse dia deve ser um texto. Se for Sábado ou Domingo
// imprimir "Final de Semana", senão imprimir "Dia Útil"

// Recolhe o dado do usuário
let dia = prompt("Digite o dia: ")

// se o dia for Sábado ou Domingo, então
if(dia === "Sabado" || dia === "Domingo")
{
    // é final de semana
    console.log("Final de Semana");
}
// Senão 
else{

    // é dia útil
    console.log("Dia Útil");
}

