// A linha de código abaixo é importante para facilita
// a obtenção de entrada do usuário no console do
// Node.js. O módulo prompt-sync fornece uma função que
// retorna uma nova função para coletar entradas do
// teclado, simplificando a interação com o usuário.
const prompt = require('prompt-sync')()



// Escreva um algoritmo para repetir a leitura de uma senha
// até que ela seja válida. Para cada leitura da senha incorreta
// informada escrever a mensagem "SENHA INVÁLIDA". Quando a senha
// for informada corretamente, deve ser impressa a mensagem "ACESSO
// PERMITIDO" e o algoritmo encerrado. Considere que a senha correta
// é o valor 2807.

// Guarda a senha numa variável senha
let senha = 2807

//  Cria variável que armazena senha digitada pelo usuário
let senhaUsuario = Number(prompt("digite a senha: "))

// Enquanto a senha digitada não é igual a senha
while(senhaUsuario != senha)
{
    // A senha é inválida
    console.log("SENHA INVÁLIDA");
    
    // Pergunta mais uma vez ao usuário
    senhaUsuario = Number(prompt("digite a senha: "))

}

// A senha está correnta. Programa finaliza.
console.log("ACESSO PERMITIDO");