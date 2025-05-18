const prompt = require('prompt-sync')()



// Exercício 08: Escreva um algoritmo para
// ler 2 valores (considere que não serão
// lidos valores iguais) e escreve-los
// em ordem crescente.

// A função abaixo retorna os valores a e b
// ordenados de forma crescente.
function sortTwoValues(a, b)
{
    return a < b? `${a} ${b}` : `${b} ${a}`;
}


// Lê os valores
let a = Number(prompt('Digite o primeiro valor: '));
let b = Number(prompt('Digite o segundo valor: '));

// Imprime os valores ordenados
console.log(sortTwoValues(a,b));