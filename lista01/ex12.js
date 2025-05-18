const prompt = require('prompt-sync') ()


// Exercício 12. Crie um programa que exibe
// a tabuada de um número fornecido pelo
// usuário (de 1 a 10) utilizando um loop for.



// Faz a leitura do número 
let numero = Number(prompt("Digite o número: "));

// numero anterior para fazer tabuada
let anterior = 0;


// Loop for para cálcular a tabuada do 1 ao 10 de numero.
for(let i = 1; i <= 10; i++)
{
    // numero.i
    console.log(`${numero} x ${i} = ${numero + anterior}`);
    anterior += numero;
}

// Obs. 1: A multiplicação é uma soma de um número x vezes.
// portanto, salvar o valor da multiplicação anterior e 
// soma-lo mais uma vez com o número retornará o valor
// da mutiplicação da sequência.
// 
// Obs. 2: Este formato só funciona se for realizado em 
// sequência. Se for necessário uma multiplicação específica,
// é melhor utilizar o formato normal.
//
// Obs. 3: utilizar a soma economiza processamento devido
// a forma que o processador realiza multiplicação.