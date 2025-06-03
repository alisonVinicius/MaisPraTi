const prompt = require('prompt-sync')()


// Exercício 4: Verificação se três segmentos formam um triângulo
function verificarTriangulo() {

    
    const a = parseFloat(prompt("Comprimento do primeiro segmento:"));
    const b = parseFloat(prompt("Comprimento do segundo segmento:"));
    const c = parseFloat(prompt("Comprimento do terceiro segmento:"));
    
    if (a < b + c && b < a + c && c < a + b) {
        console.log("Os segmentos podem formar um triângulo.");
    } else {
        console.log("Os segmentos NÃO podem formar um triângulo.");
    }
}
