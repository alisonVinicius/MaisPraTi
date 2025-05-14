// A linha de código abaixo é importante para facilita
// a obtenção de entrada do usuário no console do
// Node.js. O módulo prompt-sync fornece uma função que
// retorna uma nova função para coletar entradas do
// teclado, simplificando a interação com o usuário.
const prompt = require('prompt-sync')()


// Escreva um algoritmo para repetir a leitura de um número
// enquanto o valor fornecido for diferente de 0. para cada
// número fornecido, imprimir se ele é NEGATIVO ou Positivo.
// Quando o número 0 for fornecido a repetição deve ser 
// encerrada sem imprimir mensagem alguma.

// declara variável numero
let numero

// Enquanto o numero for diferente de 0, irá repetir o laço abaixo
do{

    numero = Number(prompt("Digite um número: "))
    // Se o número for maior do que zero,
    if(numero > 0)
    {
        // então o número é positivo
        console.log("POSITIVO")
    }
    else if(numero == 0){
        break;
    }
    else{

        // Senão o número é negativo
        console.log("NEGATIVO")
    }

}while(numero != 0);
