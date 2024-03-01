/* Desenvolva seu código abaixo */
function playRockPaperScissor(player1, player2) {

   if (player1 == player2) {
      let expectedResult = "Empate!";
      return expectedResult;
   }

   else if ((player1 == "Pedra" && player2 == "Tesoura") || (player1 == "Papel" && player2 == "Pedra") || (player1 == "Tesoura" && player2 == "Papel")) {
      let expectedResult = "Jogador 1 venceu!";
      return expectedResult;
   } else if ((player1 == "Pedra" && player2 == "Papel") || (player1 == "Papel" && player2 == "Tesoura") || (player1 == "Tesoura" && player2 == "Pedra")) {
      let expectedResult = "Jogador 2 venceu!";
      return expectedResult;
   }

}
const resultado = playRockPaperScissor("", "");
console.log(resultado);

