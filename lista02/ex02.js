const prompt = require('prompt-sync')()



// Exercício 2: Verificação de velocidade e cálculo de multa
function verificarVelocidade() {

    // Faz a leitura da velocidade do carro
    const velocidade = Number(prompt("Qual a velocidade do carro (km/h)? "));
    
    // Se a velocidade é maior que 80,
    if (velocidade > 80) {

        // Calcula o excesso de velocidade
        const excesso = velocidade - 80;

        // calcula a multa pelo excesso
        const multa = excesso * 5;

        // Imprime que foi multado. Utiliza duas casas decimais.
        console.log(`Você foi multado! Valor da multa: R$ ${multa.toFixed(2)}`);
    } 
    // Senão,
    else{

        // A pessoa não foi multada
        console.log("Velocidade dentro do limite permitido.");
    }
}

verificarVelocidade();
