const prompt = require('prompt-sync')()



// Exercício 1: Cálculo da redução do tempo de vida de um fumante
function calcularReducaoVidaFumante() {

    // Declara as constantes usadas para o cálculo e realiza a leitura
    const cigarrosPorDia = Number(prompt("Quantos cigarros você fuma por dia? "));
    const anosFumando = Number(prompt("Há quantos anos você fuma? "));
    
    // o total de cigarros é dado por
    const totalCigarros = cigarrosPorDia * anosFumando * 365;

    // Os minutos perdidos são
    const minutosPerdidos = totalCigarros * 10;

    // Os dias perdidos são
    const diasPerdidos = minutosPerdidos / (24 * 60);
    
    // Imprime o resultado na tela
    console.log(`Você perderá aproximadamente ${diasPerdidos.toFixed(2)} dias de vida.`);
}



// Chama função 
calcularReducaoVidaFumante();