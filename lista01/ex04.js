const prompt = require('prompt-sync')()


// Exercício 03: Crie um menu interativo no console
// que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica
// de cada opção selecionada.


// -------- MENU --------
// 1 - IMPRIMIR GATO
// 2 - IMPRIMIR CACHORRO
// 3 - IMPRIMIR CASA

// Define o procedimento que imprime o menu
function menu(){
    console.log("-------- MENU --------");
    console.log("1 - IMPRIMIR GATO     ");
    console.log("2 - IMPRIMIR CACHORRO ");
    console.log("3 - IMPRIMIR CASA     ");
    console.log("0 - SAIR              ");
}



// Define os procedimentos para cada opção.
function gato(){
    console.log(`
    X                    X    
   X X                  X X   
  X   X                X   X  
 X  X  X XXXXXXXXXXXX X  X  X 
X  X X  X            X  X X  X
X  XXX                  XXX  X
X                            X
X      XXXX        XXXX      X
X      XXXX        XXXX      X
 X      XXX        XXX      X 
 X                          X 
 XX                        XX 
  X         XXXXXX         X  
   XX        XXXX        XX   
     XX       XX       XX     
      XXXXXXXXXXXXXXXXX       
      
      
      
      `);

}

function cachorro()
{
    console.log(`
 XXXXXX                XXXXXX 
X      X              X      X
X XXX  X              X  XXX X
X XXX  X XXXXXXXXXXXX X  XXX X
X X X   X            X   X X X
X                            X
X     XXXX          XXXX     X
X     XXXX          XXXX     X
X     XXXX          XXXX     X
 X         XXXXXXXX         X 
 X         X XXXX X         X 
 XX           XX           XX 
  X                        X  
   XX         X          XX   
     XX      XXX       XX     
      XXXXXXXXXXXXXXXXX
      
      
      
      `);

}


function casa()
{
    console.log(`
     XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX     
    X               X                                  X    
   X                 X                                  X   
  X                   X                                  X  
 X                     X                                  X 
X                       X                                  X
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
X                       XX                                 X
X                       XX                                 X
X                       XX                                 X
X                       XX                                 X
X       XXXXXXXXX       XX         XXXXXXXXXXXXXXX         X
X       X       X       XX         X      X      X         X
X       X       X       XX         X      X      X         X
X       X       X       XX         X      X      X         X
X       X       X       XX         XXXXXXXXXXXXXXX         X
X       X       X       XX                                 X
X       X       X       XX                                 X
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX



`);
}

// declara a variável opcao
let opcao;

// loop para checar as opções 
do{
    // Faz a leitura da opção
    opcao = Number(prompt(menu()))

    // Para cada valor de opcao, existe um caso
    switch(opcao){
        
        // Caso do gato
        case 1:
            gato();
            break;

        // Caso do cachorro
        case 2:
            cachorro();
            break;

        // Caso da casa
        case 3:
            casa();
            break;

        // Encerra o programa
        case 0:
            break;
        
        // Qualquer outro valor, repete
        default:
            console.log(`opção inválida.`);
            break;
        
    }
}while(opcao != 0);


