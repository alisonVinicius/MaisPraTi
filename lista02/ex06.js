const prompt = require('prompt-sync')()



// Memoization
// Implemente function memoize(fn) que armazene 
// em cache chamadas anteriores de fn (por argumentos), 
// retornando resultados instantâneos em repetidas 
// invocações.


function fatorial(n)
{
    if(n === 0) return 1;

    return n * fatorial(n - 1);
}

// A função memoize é utilizada para simular uma cache do processador.
// A função fn é calculada uma única vez e, nas próximas chamadas,
// é retornado o valor armazenado na cache. Economiza processamento e tempo.
function memoize(fn)
{

    // cache para armazenar os resultados
    const cache = {}; 
    

    return function(...args) {

        // Cria uma chave única para os argumentos utilizando JSON
        const key = JSON.stringify(args); 
        
        // Se existir no cache 
        if (cache.hasOwnProperty(key)) {

            // retorna o valor armazenado
            return cache[key];

        } 
        else{

            // Se não existir, 
            // calcula 
            const result = fn.apply(this, args);
            
            // e armazena no cache
            cache[key] = result;

            // retorna resultado
            return result;
        }
    };
}

let calcFat = memoize(fatorial)


// Calcula fatorial de 2
calcFat(2)

// Calcula fatorial de 3
calcFat(3)

// retorna valor já calculado de fatorial de 2 que está na cache
calcFat(2)

// retorna valor já calculado de fatorial de 2 que está na cache
calcFat(2)

// retorna valor já calculado de fatorial de 3 que está na cache
calcFat(3)

