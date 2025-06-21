const prompt = require('prompt-sync')()


// 3. Palavras Únicas
// Dada uma string (ex.: "olá olá mundo mundo"), 
// use if/else e for para extrair todas as 
// palavras únicas e exibi-las em um array.


// Recolhe a string digitada
let StringDigitada = prompt("digite uma frase: ");

// Declara vetor vazio
let arr = []

// Aqui separamos as palavras digitas pelos espaços.
let palavras = StringDigitada.split(" ");


// Loop para percorrer o vetor de palavras
for(let i = 0; i < palavras.length; i++)
{
    
    // Cria variável booleana para realizar a testagem no vetor arr.
    let esta = false;

    // Loop que percorre as palavras em arr.
    for(let j = 0; j < arr.length  &&  !esta; j++)
    {

        // Se a palavra está no arr então
        if(palavras[i] === arr[j])
        {
            // a variável boolena recebe true
            esta = true;
        }
    }

    // Se a variável boolena é false, a negamos para entrar na condição.
    if(!esta)
    {
        // Adiciona a palavra em arr
        arr.push(palavras[i]);
    }

}

// Exibe array arr.
console.log(arr);

