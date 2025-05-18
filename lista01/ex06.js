const prompt = require('prompt-sync')()


// Exercício 06: Ler três valores para os lados
// de um triângulo: A, B e C. Verificar se os
// lados fornecidos formam realmente um
// triângulo. Caso forme, deve ser indicado
// o tipo de triângulo: Isósceles, escaleno ou eqüilátero.


function Triangulo(a, b, c)
{
    // Verifica se os lados formam um triângulo.
    // Se a soma de dois lados são maiores que o 
    // terceiro lado, então os lados formam um 
    // triângulo.
    if(a + b > c  &&  b + c > a  &&  c + a > b)
    {
        // Se os lados são iguais,
        if(a == b  &&  b == c)
        {
            return 'Triângulo Equilátero'
        }
        // Senão, se existem dois lados iguais
        else if(a == b  ||  a == c  ||  b == c)
        {
            return 'Triângulo Escaleno'
        }
        // Senão, se todos os lados são iguais,
        else{
            return 'Triângulo Escaleno'
        }
    }
    // Senão, não formam um triâgulo
    else{
        return 'Os lados não formam um Triângulo.'
    }
}

// Recolhe os lados do triângulo a partir do usuário
let a = Number(prompt('Digite o primeiro lado: '));
let b = Number(prompt('Digite o segundo lado: '));
let c = Number(prompt('Digite o terceiro lado: '));


console.log(Triangulo(a,b,c));
