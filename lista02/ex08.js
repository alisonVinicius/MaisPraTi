const prompt = require('prompt-sync')()


// 8. Agrupamento por Propriedade
// Em vendas = [{ cliente, total }, ...], 
// use reduce para gerar um objeto onde
// cada chave é um cliente e o valor é 
// a soma de todos os seus total.


// Vendas diárias fictícias
const vendasDiarias = [
  { cliente: 'Amazon', total: 12500 },
  { cliente: 'Google', total: 8500 },
  { cliente: 'Amazon', total: 4300 },
  { cliente: 'Microsoft', total: 9200 },
  { cliente: 'Google', total: 6200 }
];



// O primeiro argumento passado para reduce é uma arrowFunction que soma
// cada valor de cada cliente armazenando a soma em acc e, o segundo 
// argumento é um objeto vazio que será armazenado o cliente junto com
// o valor somado.*
const totalClientes = vendasDiarias.reduce((acc, { cliente, total }) => {
    acc[cliente] = (acc[cliente] || 0) + total; 
    return acc;}, 
    {});


console.log(totalClientes);
