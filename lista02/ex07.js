const prompt = require('prompt-sync')()


// Dado um array produtos = [{ nome, preco }, ...], 
// crie uma função que retorne um novo array apenas 
// com os nomes, ordenados por preço crescente, 
// usando map, sort.

// Produtos fictícios 
const produtos = [
  { nome: 'Notebook', preco: 2500 },
  { nome: 'Celular', preco: 1500 },
  { nome: 'Tablet', preco: 1200 },
  { nome: 'Fones de ouvido', preco: 300 }
];



function ordenarNomesPorPreco(produtos)
{
    // Ordena por preço crescente, extraindo apenas os nomes.
    return produtos.sort((a, b) => a.preco - b.preco).map(produto => produto.nome);     
}

// Captura os nomes ordenados a partir da função.
const nomesOrdenados = ordenarNomesPorPreco(produtos);


console.log(nomesOrdenados); 



