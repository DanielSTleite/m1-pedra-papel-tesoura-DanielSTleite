/* Desenvolva seu código abaixo */
function playRockPaperScissor(player1, player2) {
   // Pedra
   if (player1 == "Pedra" && player2 == "Pedra") {
      let player1 = "Pedra";
      let player2 = "Pedra";
      let expectedResult = "Empate!";
      return expectedResult;
   }
   else if (player1 == "Pedra" && player2 == "Tesoura") {
      let player1 = "Pedra";
      let player2 = "Tesoura";
      let expectedResult = "Jogador 1 venceu!";
      return expectedResult;
   } else if (player1 == "Pedra" && player2 == "Papel") {
      let player1 = "Pedra";
      let player2 = "Papel";
      let expectedResult = "Jogador 2 venceu!";
      return expectedResult;
   } else if (player1 == "Papel" && player2 == "Papel")   // Papel
   {
      let player1 = "Papel";
      let player2 = "Papel";
      let expectedResult = "Empate!";
      return expectedResult;
   } else if (player1 == "Papel" && player2 == "Pedra") {
      let player1 = "Papel";
      let player2 = "Pedra";
      let expectedResult = "Jogador 1 venceu!";
      return expectedResult;
   } else if (player1 == "Papel" && player2 == "Tesoura") {
      let player1 = "Papel";
      let player2 = "Tesoura";
      let expectedResult = "Jogador 2 venceu!";
      return expectedResult;
   } else if (player1 == "Tesoura" && player2 == "Tesoura")   // Tesoura
   {
      let player1 = "Tesoura";
      let player2 = "Tesoura";
      let expectedResult = "Empate!";
      return expectedResult;
   } else if (player1 == "Tesoura" && player2 == "Papel") {
      let player1 = "Tesoura";
      let player2 = "Papel";
      let expectedResult = "Jogador 1 venceu!";
      return expectedResult;
   } else if (player1 == "Tesoura" && player2 == "Pedra") {
      let player1 = "Tesoura";
      let player2 = "Pedra";
      let expectedResult = "Jogador 2 venceu!";
      return expectedResult;
   }
};


const resultado = playRockPaperScissor("Tesoura", "Tesoura");
console.log(resultado); // Saída: "Jogador 1 venceu!"

