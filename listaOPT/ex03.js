const prompt = require('prompt-sync')()


// Exercício 3: Cálculo do preço da passagem
function calcularPrecoPassagem() {

    // Faz a leitura da distância a percorrer
    const distancia = Number(prompt("Qual a distância a percorrer (km)? "));
    
    // Declara a variável preco
    let preco;
    
    // Se a distância é menor ou igual a 200
    if (distancia <= 200) {
        
        // Então o preco é a distância vezes 0.5
        preco = distancia * 0.5;

    }
    // Senão 
    else{

        // a distância é multiplicada por 0.45
        preco = distancia * 0.45;
    }
    
    // Imprime o preço da passagem com 2 casas decimais
    console.log(`Preço da passagem: R$ ${preco.toFixed(2)}`);

}

// Chama a função
calcularPrecoPassagem();
