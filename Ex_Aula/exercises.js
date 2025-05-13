
// A linha de código abaixo é importante para facilita
// a obtenção de entrada do usuário no console do
// Node.js. O módulo prompt-sync fornece uma função que
// retorna uma nova função para coletar entradas do
// teclado, simplificando a interação com o usuário.
const prompt = require('prompt-sync')()


// Escreva um algoritmo para ler o número de eleitores de um município,
// o número de votos brancos, nulos e válidos. Calcular e escrever o 
// percentual que cada um representa em relação ao total de eleitores.

// Lê o número de leitores, votos brancos, votos nulos e votos válidos, digitado pelo usuário
let numero_eleitores = Number(prompt('Informe a quantidade de eleitores: '))
let numero_votos_brancos = Number(prompt('Informe a quantidade de votos brancos: '))
let numero_votos_nulos = Number(prompt('Informe a quantidade de votos nulos: '))
let numero_votos_validos = Number(prompt('Informe a quantidade de votos válidos: '))

// Para o cálculo do percentual em branco



