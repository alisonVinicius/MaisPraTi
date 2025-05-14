// A linha de código abaixo é importante para facilita
// a obtenção de entrada do usuário no console do
// Node.js. O módulo prompt-sync fornece uma função que
// retorna uma nova função para coletar entradas do
// teclado, simplificando a interação com o usuário.
const prompt = require('prompt-sync')()


// A turma C é composta de 60 alunmos, e a turma D de 20 
// alunos. Escreva um algoritmo que leia o percentual de
// alunos reprovados na turma C, o percentual de aprovados
// na turma D, calcule e escreva:

// a) O número de alunos reprovados na turma C.
// b) O número de alunos reprovados na turma D.
// c) A percentagem de alunos reprovados em relação ao 
// total de alunos das turmas.

// [Exemplo de dados de entrada]
// 10 (percentual de alunos reprovados na turma C)
// 85 (percentual de alunos aprovados na turma D)

// [Saída para os dados da entrada acima]
// 5 (quantidade de alunos reprovados na turma C)
// 3 (quantidade de alunos reprovados nma turma D)
// 11.25 (percentual de alunos reprovados em relação ao
// de alunos das duas)

// Cria variável que irá armazenar a quantidade de alunos 
// turma C e D.
let turmaC = 60
let turmaD = 20

// Colhe os dados do usuário
let percentReprovadosC = Number(prompt("Digite o percentual de alunos reprovados na turma C: "))
let percentAprovadosD = Number(prompt("Digite o percentual de alunos aprovados na turma D: "))

// Calcula o total de reprovados para turmas C e D
let reprovadosC = percentReprovadosC*(turmaC/100.00)
let reprovadosD  = (100 - percentAprovadosD)*(turmaD/100.00)

// Soma o total de reprovados
let totalReprovados = reprovadosC + reprovadosD

// Calcula a porcentagem do total de reprovados
let percentTotalReprovados = (totalReprovados/(turmaC + turmaD))*100.00


// Imprime os resultados
console.log(`reprovados turma C: ${reprovadosC}`)
console.log(`reprovados turma D: ${reprovadosD}`)
console.log(`reprovados total %: ${percentTotalReprovados}%`)