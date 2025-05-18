const prompt = require('prompt-sync')()


// Exercício 09: Implemente um programa que exibe
// uma contagem regressiva de 10 até 1 no console
// utilizando um loop for.

// Função que realiza a contagem regressiva de inicio 
// até 1 utilizando recursividade
function loopRecursive(i, inicio)
{
    // Se i for igual a inicio, então
    if(i == inicio)
    {
        // retorna exatamente o mesmo valor de i.
        return i;
    }
    
    // Imprime o retorno da recursividade
    console.log(loopRecursive(i + 1, inicio));
    

    // Retorna o valor de i.
    return i;
}

// Chama a função que conta de um inicio até 1.
// observe que o primeiro parâmetro é zero e 
// o segundo parâmentro será o valor que se deseja
// começar a contagem. Se inicia de zero pelo fato
// do intervalo da recursividade ser no formato 
// (0, 100]. Ou seja, o zero não é contabilizado.
//loopRecursive(0, 100);

// O loop abaixo realiza a impressão da contagem regressiva
// solicitada pelo exercício.
for(let i = 10; i > 0; i--)
{
    console.log(i);
}








