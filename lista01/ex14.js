const prompt = require('prompt-sync')()


// Exercício 14. Crie um programa que calcula o
// fatorial de um número fornecido pelo usuário
// utilizando um loop for ou while.


// lê o valor do usuário
let valor = Number(prompt("digite um número: "));

// varíavel fatorial
let fatorial = 1;

// loop for que calcula fatorial
for(let i = 1; i <= valor; i++)
{
    fatorial *= i;
}

console.log(`${valor}! = ${fatorial}`);

// inicializa novamente fatorial
fatorial = 1;

// inicializa variável auxilar 
let contador = valor;

// loop while para calcular fatorial
while(contador > 0)
{
    fatorial *= contador;
    contador--;
}

console.log(`${valor}! = ${fatorial}`);





// BONUS: fatorial via recursividade
function fat(n)
{
    if(n == 1)
    {
        return 1;
    }
    
    return n * fat(n-1);
}

console.log(`${valor}! = ${fat(valor)}`);
