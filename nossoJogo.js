/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

//     console.log("Bem-vindo(a) ao jogo de blackjack")

// let jogo = confirm("Quer iniciar uma nova rodada?")

// if (jogo) {
//     let carta1Usuario = comprarCarta()
//     let carta2Usuario = comprarCarta()
//     let carta1Pc = comprarCarta()
//     let carta2Pc = comprarCarta()

//     let pontuacaoUsuario = carta1Usuario.valor + carta2Usuario.valor
//     let pontuacaoPc = carta1Pc.valor + carta2Pc.valor

//     console.log(`Usuário - cartas: ${carta1Usuario.texto} ${carta2Usuario.texto} - ${pontuacaoUsuario}`)
//     console.log(`Computador - cartas: ${carta1Pc.texto} ${carta2Pc.texto} - ${pontuacaoPc}`)

//     if (pontuacaoUsuario > pontuacaoPc) {
//         console.log("O usuário ganhou!")
//     } else if (pontuacaoPc > pontuacaoUsuario) {
//         console.log("O computador ganhou!")
//     } else if (pontuacaoUsuario === pontuacaoPc) {
//         console.log("Empate!")
//     }
   
//     document.getElementById("jogador").innerHTML=`
//     <h1>Jogador</h1>
//     <h1>${carta1Usuario.texto}</h1>
//     <h1>${carta2Usuario.texto}</h1>
//     <h1>pontos:${pontuacaoUsuario}</h1>

//     `

//     document.getElementById("computador").innerHTML=`
//     <h1>Computador</h1>
//     <h1>${carta1Pc.texto}</h1>
//     <h1>${carta2Pc.texto}</h1>
//     <h1>pontos:${pontuacaoPc}</h1>`

//     document.getElementById("resultado").innerHTML=`
//     <h1>${}
//     `


//    }

function start (){
    const novoJogo= confirm("Quer começar um novo jogo ?")
    console.log(novoJogo)
    // se for verdadeiro chama a função jogo
    if(novoJogo){
        jogo()
        // se não finaliza o jogo
    }else {
        console.log("O jogo acabou");
    }
}



 function jogo(){
    console.log("Bem vindos ao jogo de BlackJack ou 21")
    const carta1Usuario=comprarCarta()
    const carta2Usuario=comprarCarta()
    const carta1Pc=comprarCarta()
    const carta2Pc=comprarCarta()

    const somaJogador = carta1Usuario.valor + carta2Usuario.valor
    const somaComputador = carta1Pc.valor + carta2Pc.valor

    let resultado=""

    if (somaJogador > somaComputador || somaJogador<=21){
          resultado="Jogador Ganhou!"
    }else if (somaJogador < somaComputador && somaComputador <= 21) {
        resultado= "Computador Gahou!"
    } else if(somaComputador=somaJogador){
        resultado="Empate!"
    }

    document.getElementById("jogador").innerHTML=`
        <h1>Jogador</h1>
     <h1>${carta1Usuario.texto}</h1>
         <h1>${carta2Usuario.texto}</h1>
         <h1>pontos:${somaJogador}</h1>
    
         `
    
        document.getElementById("computador").innerHTML=`
        <h1>Computador</h1>
        <h1>${carta1Pc.texto}</h1>
        <h1>${carta2Pc.texto}</h1>
        <h1>pontos:${somaComputador}</h1>`
    
        document.getElementById("resultado").innerHTML=`
         <h1>${resultado}</h1>`
    
}
start()