// Exercício 15. Escreva um programa que gera
// e imprime os primeiros 10 números da sequência
// de Fibonacci utilizando um loop for.

// Os dois primeiros números da sequência de Fibonnaci 
// são:
let a = 0;
let b = 1;

// Imprime os dois primeiros números da sequência
console.log(a);
console.log(b);

for(let i = 2; i < 10; i++)
{
    // o próximo número da sequência é
    let proximo = a + b;

    // imprime o próximo número da sequência
    console.log(proximo);

    // atualiza a e b
    a = b;
    b = proximo;
}