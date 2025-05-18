const prompt = require('prompt-sync')()


// Exercício 10. Escreva um algoritmo
// para ler um número inteiro e escrevê-lo
// na tela 10 vezes.


// Função que imprime o número 10 vezes.
function numeroPrint10X(numero)
{
    console.log(numero); // 1
    console.log(numero); // 2
    console.log(numero); // 3
    console.log(numero); // 4
    console.log(numero); // 5
    console.log(numero); // 6
    console.log(numero); // 7
    console.log(numero); // 8
    console.log(numero); // 9
    console.log(numero); // 10

}
// Obs: utilizar uma sequência de console.log é mais
// rápido do que qualquer outro método de loop.
// Utilizar 10 console.log serão feitas apenas 10
// chamadas de sistema para imprimir numero.
// utilizar loops, haverão condicionais sendo checadas,
// contadores e outras chamadas de sistema.
// Utilizei função aqui para ser possível estudar funções
// em javascript. A chamada de uma função já conta como
// mais um passo a ser feito no algoritmo, porém irá 
// depender da tratativa do compilador.

// Faz a leitura do número a partir do usuário
let numero = Number(prompt("digite o número: "));

// imprime o número 10x
numeroPrint10X(numero);


