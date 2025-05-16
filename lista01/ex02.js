// A linha de código abaixo é importante para facilita
// a obtenção de entrada do usuário no console do
// Node.js. O módulo prompt-sync fornece uma função que
// retorna uma nova função para coletar entradas do
// teclado, simplificando a interação com o usuário.
const prompt = require('prompt-sync')()


// Exercício 2: Crie um programa que classifique a idade de uma pessoa em
// categorias (criança, adolescente, adulto, idoso) com base no valor 
// fornecido, utilizando uma estrutura de controle if-else.


// Os dados abaixo foram retirados de uma pesquisa feita no google.
// Parte das informações vem da OMS, outras do IBGE. A IA do google
// mesclou e deu a seguinte resposta:
// crianças - até 12 anos;
// Adolescentes - de 13 até 19 anos; 
// Adultos - Indivíduos com idade entre 20 até 59 anos; 
// Idosos - Indivíduos de 60 anos em diante

// Faz a leitura da idade a partir da entrada do usuário.
let idade = Number(prompt(`Digite a idade: `));


// Se a idade é maior ou igual a 60 anos,
if(idade >= 60)
{
    // Então é idoso
    console.log(`A pessoa com ${idade} é considerada idoso.`);
}
// Senão, se a idade é maior ou igual a 20, 
else if(idade >= 20)
{
    // Então é adulta
    console.log(`A pessoa com ${idade} é considerada adulta.`);
}
// Senão, se a idade é maior ou igual a 13,
else if(idade >= 13)
{
    // Então é adulto.
    console.log(`A pessoa com ${idade} é considerada adolescente.`);
}
// Senão
else{
    // Então é criança.
    console.log(`A pessoa com ${idade} é considerada criança.`);
}




