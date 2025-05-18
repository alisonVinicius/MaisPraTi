const prompt = require('prompt-sync')()


// Exercício 07: As maçãs custam R$ 0,30 se 
// forem compradas menos do que uma dúzia,
// e R$ 0,25 se forem compradas pelo menos doze.
// Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.



function maca(quantidade)
{

    // Se a quantidade de maçãs for maior ou igual a 12,
    if(quantidade >= 12)
    {
        return quantidade * 0.25;
    }
    // Senão,
    else{
        return quantidade * 0.30;
    }
}

// Lê a quantidade de maçãs
let quantidade = Number(prompt('Informe a quantidade de maçãs: '))

// Imprime o valor total para as maçãs
console.log(`O valor de ${quantidade} de maçãs é R\$ ${maca(quantidade)}.`);

