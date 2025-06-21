const prompt = require('prompt-sync')()



// 9. Conversão Entre Formatos
// Escreva duas funções:
// ○ paresParaObjeto(pares) recebe um array de 
// pares [ [chave,// valor], ... ] e retorna o 
// objeto equivalente. ○ objetoParaPares(obj) 
// faz o inverso, retornando um array de pares.

// Função que recebe um par e retorna um objeto
function paresParaObjeto(pares) 
{

    // O retorno é dado pelo método reduce com uma 
    // arrowFunction que agrega os pares para tornar
    // o objeto vazio passado, um objeto completo.
    return pares.reduce((objeto, [chave, valor]) => {
    objeto[chave] = valor;
    return objeto;},
    {});
}

// Funçaõ que recebe um objeto e o torna em par
function objetoParaPares(obj) 
{
    // O retorno consiste do uso do método 
    // entries que transforma o conteúdo do
    // objeto em array de arrays. O que corresponde
    // aos pares desejados.
    return Object.entries(obj);
}


// pares fictícios
const pares = [['nome', 'João'], ['idade', 30], ['cidade', 'São Paulo']];

// invoca paresParaObjeto para construir objeto
const objeto = paresParaObjeto(pares);
console.log(objeto);





// Objeto Fictício
const pessoa = { nome: 'Maria', idade: 25, profissao: 'Engenheira' };

// invoca objetoParaPares para criar pares a partir de um objeto
const paresResultantes = objetoParaPares(pessoa);
console.log(paresResultantes);
