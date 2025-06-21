const prompt = require('prompt-sync')()

// 2. Jogo de Adivinhação
// Escreva um script que gere um número 
// aleatório de 1 a 100 e peça ao usuário, 
// para adivinhar. Use while para repetir 
// até acertar, contando tentativas e 
// exibindo “mais alto” ou “mais baixo” 
// a cada palpite errado.

// A função abaixo retorna um número aleatório entre min e max
function numberRand(min, max)
{

    // O retorno dessa função é o piso de um número real
    // aleatório, multiplicado pelo limite superior(max) 
    // menos o limite inferior(min) somados com 1.
    // Isso Garante que o número retornado estará entre 
    // o intervalo [min, max].
    return Math.floor((Math.random() * (max - min + 1)));
}

// Recolhe o numero aleatorio
let num = numberRand(1, 100);

// Declara e inicializa variável tentativa
// para contar a quantidade de tentativas
let tentativa = 0;

// A variável value irá armazenar o número digitado
let value = Number(prompt("digite o número: "));

// Cotabiliza a primeira tentativa
tentativa++;


// Loop que verifica se acertou valor
while(value != num)
{
    // Se o valor menos o numero aleatorio for negativo
    if(value - num < 0)
    {
        // Significa que o chute precisa ser mais alto
        console.log("mais alto.");
    }
    else{

        // Senão, significa que o chute precuisa ser mais baixo
        console.log("mais baixo");
    }

    // Pede para o usuário digitar novamente o número
    value = Number(prompt("digite o número: "));

    // Contabiliza mais uma tentativa
    tentativa++;
}

// Demonstra o final e imprime o número de tentativas.
console.log(`parabéns, você acertou o número com ${tentativa} tentativas.`);