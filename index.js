//Generate Random Number for the Dice 1
var randomNumber1= Math.floor(Math.random() * 6) + 1;

var randomDice1 = "dice" + randomNumber1 + ".png";

var randomImage1 = "Images/"+ randomDice1;

document.querySelector("img.img1").setAttribute("src", randomImage1);

//Generate random number for Dice 2
var randomNumber2= Math.floor(Math.random() * 6) + 1;

var randomDice2 = "dice" + randomNumber2 + ".png";

var randomImage2 = "Images/"+ randomDice2;

document.querySelector("img.img2").setAttribute("src", randomImage2);

//Select the winner of the challenge (player1 or player2?)

if (randomNumber1 > randomNumber2) {
    document.getElementById("display").innerHTML = "Player 1 Wins!";
}

else if (randomNumber2 > randomNumber1) {
    document.getElementById("display").innerHTML = "Player 2 Wins!";
}

else{
    document.getElementById("display").innerHTML = "Match Draw!";
}