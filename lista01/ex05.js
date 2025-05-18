const prompt = require('prompt-sync')()



// Exercício 05: Escreva um programa que calcula
// o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso,
// peso normal, sobrepeso, obesidade) utilizando if-else.

// Os dados para classificar o IMC foram retirados
// de uma simples consulta no google.

// A função abaixo calcula o IMC de uma pessoa
function IMC(peso, altura)
{

    // Realiza o cálculo do IMC
    // imc = peso/altura^2
    const imc = peso / (altura * altura);

    // Se imc é maior ou igual a 30,
    if(imc >= 30)
    {
        // A pesso está com obesidade
        return 'Obeso'
    }
    // Senão, se imc é maior ou igual a 25,
    else if(imc >= 25)
    {
        // A pessoa está com Sobrepeso
        return 'Sobrepeso'
    }
    // Senão, se imc é maior que 18.5,
    else if(imc >= 18.5)
    {
        // A pessoa está com peso normal
        return 'peso normal'
    }
    // Senão
    else{
        // a pessoa está abaixo do peso
        return 'Baixo do peso'
    }

}

// Recolhe os dados do usuário
let peso   = Number(prompt('digite o peso: '));
let altura = Number(prompt('digite a altura: '));


console.log(`O IMC se classifica como: ${IMC(peso,altura)}`);

