const prompt = require('prompt-sync') ()


// 13. Fazer um algoritmo para receber números
// decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.



let     soma = 0.0; // variável que irá somar os valores recebidos 
let    valor = 0;   // variável que irá receber os valores
let contador = 0.0; // variável que irá contar os valores recebidos 

// Faz a primeira leitura de valor
valor = Number(prompt('digite o valor: '));

// loop que irá receber os valores até que se digite 0.
while(valor != 0)
{
    // soma valores
    soma += valor;

    // incrementa contador
    contador++;

    // Faz a primeira leitura de valor
    valor = Number(prompt('digite o valor: '));

}

// Se o contador é maior do que zero
if(contador > 0)
{
    // Imprime média
    console.log(`média: ${soma/contador}`);

}
// Senão,
else{
    console.log("média: 0");
}
