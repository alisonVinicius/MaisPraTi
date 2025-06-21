const prompt = require('prompt-sync')()


// 5. Debounce
// Crie function debounce(fn, delay) que 
// receba uma função fn e um delay em ms, 
// retornando uma nova função que só 
// executa fn se não for chamada novamente 
// dentro do intervalo.


// Exemplo com função fatorial do ex anterior
function fatorial(n)
{
    if(n === 0) return 1;

    return n * fatorial(n - 1);
}


// Observação: a variável resultado utilizada 
// dentro da função debounce só serve para 
// capturar o valor retornado da função
// fatorial. Nem sempre será utilizado um 
// valor de retorno.



// função debounce
function debounce(fn, delay) {
    
    // timeoutId é o identificador que armazena
    // o idendificador do timeout atual.
    let timeoutId;
    
    // Aqui é realizado o retorno de uma nova função.
    // ...args é a aceitação de qualquer quantidade
    // de parâmetros passados.
    return function(...args) {
        
        // Aqui é "limpada" a execução 
        // anterior, garantindo somente
        // a execução da última chamada. 
        clearTimeout(timeoutId);
        
        // Cria a variável resultado para recolher
        // o retorno da função dada.
        let resultado;

        // Aqui é agendada a nova chamada
        // de função de acordo com o delay 
        // passado no parâmento original.
        timeoutId = setTimeout(() => {

            // resultado recebe o retorno de fn
            resultado = fn.apply(this, args);

            // imprime o resultado
            console.log(resultado);

        }, delay);
  };
}



let calcFat = debounce(fatorial, 100);

calcFat(5);
calcFat(6);
calcFat(7);
calcFat(8);
calcFat(9); // Somente este será executado.




