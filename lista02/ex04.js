const prompt = require('prompt-sync')()


// 4. Fatorial Recursivo
// Implemente function fatorial(n) de 
// forma recursiva; trate n < 0 lançando
// um Error, e n === 0 retornando 1.

function fatorial(n)
{
    // Se n é igual a zero
    if(n === 0)
    {
        // retorna 1
        return 1;
    }
    
    // retorna n * (n - 1) * (n - 2) * ... * 1
    return n * fatorial(n-1);
}


// Faz a leitura de n
let n = Number(prompt("digite n: "));

// Se n é menor do que zero
if(n < 0)
{
    // Emite sinal ERROR
    console.log("ERROR");

    // Encerra programa com 0.
    return 0;
}

console.log(`O fatorial de ${n} é ${fatorial(n)}`);