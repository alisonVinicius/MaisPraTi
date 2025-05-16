// A linha de código abaixo é importante para facilita
// a obtenção de entrada do usuário no console do
// Node.js. O módulo prompt-sync fornece uma função que
// retorna uma nova função para coletar entradas do
// teclado, simplificando a interação com o usuário.
const prompt = require('prompt-sync')()


//Implemente um programa que recebe uma nota de 0 a 10 e classifica como
//"Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

// Levando em consideração a relação:
// Aprovado nota >= 7.0
// recuperação 5 <= nota <= 6.9
// reprovado nota <= 4.9

// Lê a nota do usuário de 0 a 10.
let nota = Number(prompt(`Digite uma nota de 0 a 10: `));

// Se a nota é maior ou igual a 7.0
if(nota >= 7.0)
{
    // Está aprovado
    console.log(`Aprovado com a nota ${nota}.`);
}
// Senão, se a nota é maior ou igual a 5.0,
else if(nota >= 5.0)
{
    // Está de recuperação
    console.log(`Está de recuperação com a nota ${nota}.`);
}
// Senão
else{
    console.log(`Está reprovado com a nota ${nota}.`);
}
