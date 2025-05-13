const prompt = require('prompt-sync')()


// Escreva um algoritmo que leia uma temperatura em graus
// Celsius e devolva em Fahrenheit.

// Realiza a leitura da temperatura
let temperatura = Number(prompt('Informe a temperatura em graus celsius: '))

// realiza o cálculo para encontrar a temperatura em Fahrenheit
let Fahrenheit = (temperatura * 9/5) + 32

// Imprime na tela a temperatura em Fahrenheit
console.log('A temperatura em Fahrenheit é: ', Fahrenheit)


