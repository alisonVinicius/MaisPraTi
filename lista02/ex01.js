const prompt = require('prompt-sync')()

// 1. Validação de Datas
// Crie a função ehDataValida(dia, mes, ano) que
// retorne true se os valores formarem uma data
// real (meses de 28–31 dias, ano bissexto para
// fevereiro) e false caso contrário.
function ehDataValida(dia, mes, ano)
{
    // Checa se dia é maior que 31
    if(dia > 31) return false;

    // Checa se mes é maior que 12
    if(mes > 12) return false;

    // Checa se ano é bissexto 
    if(ano%4==0)
    {
        // Checa se janeiro possui mais de 29 dias
        if(mes === 2  &&  dia > 29) return false;
    }
    
    switch (mes)
    {
        // Se janeiro tem mais de 28 dias
        case 2:
            if(dia > 28) return false;
            break;
        
        // Se abril tem mais de 30 dias
        case 4:
            if(dia > 30) return false;
            break;
        
        // Se junho tem mais de 30 dias
        case 6:
            if(dia > 30) return false;
            break;
 
        // Se Setembro tem mais de 30 dias
        case 9:
            if(dia > 30) return false;
            break;

        // Se novembro tem mais de 30 dias
        case 11:
            if(dia > 30) return false;
            break;
    }
    
    return true;
}

// Recolhe a data digitada pelo usuário
let data = prompt("digita a data (dd/mm/aaaa): ");


// Como a data digitada é uma string e sabemos que
// o formato é dd/mm/aaaa, então fazemos o seguinte:
// Utilizamos o método split para separar os números de /
const array = data.split('/');

// recolhe-se os valores e converte para inteiro.
// A função parseInt recolhe o valor do vetor 
// e o converte para inteiro. O parâmetro 10 é 
// usado para interpretar a string como um 
// número da base 10.
const dia = parseInt(array[0], 10);
const mes = parseInt(array[1], 10);
const ano = parseInt(array[2], 10);

// Invoca a função
console.log(ehDataValida(dia, mes, ano));








