const prompt = require('prompt-sync')()


// Exercício 11. Escreva um programa que solicita
// ao usuário 5 números e calcula a soma total
// utilizando um loop for.


// Declara variável valor
let valor;

// Declara variável que receberá a soma.
let soma = 0;


// Faz a leitura dos 5 valores
// e soma-os.
for(let i = 1; i <= 5; i++)
{
    valor = Number(prompt(`Digite o ${i}º número: `));
    soma  += valor;  
}

console.log(`soma = ${soma}`);






