let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let diceImage1 = "dice" + randomNumber1 + ".png";
let diceImage2 = "dice" + randomNumber2 + ".png";

document.getElementById("player1").setAttribute("src", diceImage1);
document.getElementById("player2").setAttribute("src", diceImage2);

let heading = document.querySelector("h1");

if (randomNumber1 > randomNumber2) {
  heading.textContent = " Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  heading.textContent = "Player 2 Wins! ";
} else {
  heading.textContent = "It's a Draw!";
}