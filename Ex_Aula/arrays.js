// Crie um array chamado 'numeros' contendo 10 valores
// numericos à sua escolha.
let numeros = new Array();

// Adicionando 10 números aleatórios
numeros.push(10)
numeros.push(5)
numeros.push(2)
numeros.push(3)
numeros.push(9)
numeros.push(4)
numeros.push(7)
numeros.push(8)
numeros.push(6)
numeros.push(1)

// Use métodos de array para calcular:


// Em python chamamos uma função simples de lambda.
// Aqui, em javascript, é chamado de arrow function
// 1 - A soma de todos os elementos
let sumWithReduce = numeros.reduce((a,b) => a + b)

let sumWithForLoop = 0
for(let i = 0; i < numeros.length; i++)
{
    sumWithForLoop += numeros[i]
}



