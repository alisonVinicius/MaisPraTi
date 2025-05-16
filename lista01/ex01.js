// A linha de código abaixo é importante para facilita
// a obtenção de entrada do usuário no console do
// Node.js. O módulo prompt-sync fornece uma função que
// retorna uma nova função para coletar entradas do
// teclado, simplificando a interação com o usuário.
const prompt = require('prompt-sync')()


// Exercício 01: Escreva um programa que recebe um número inteiro
// e verifica se ele é par ou ímpar utilizando uma estrutura de 
// controle if.

// Imprime na tela o pedido para o usuário digitar um número
let numero = Number(prompt("Digite um número: "));


// Se o módulo do número por dois é igual a zero,
if(numero%2 == 0)
{
    // Então o número é par
    console.log(`O número ${numero} é par.`);
}
// Caso contrário
else{
    // Então o número é impar
    console.log(`O número ${numero} é impar.`);
}

