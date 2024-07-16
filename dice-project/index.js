var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage1 = "dice" + randomNumber1 + ".png";
var randomSource1 = "images/" + randomDiceImage1;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomSource1);

/* create the second random image for dice  */
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "dice" + randomNumber2 +".png";
var randomSource2 = "images/" + randomDiceImage2;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomSource2);

/* do the dice number match and give different output title */
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩Play 1 Wins";
}
else if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML = "Draw";
}
else {
  document.querySelector("h1").innerHTML = "🚩Play 2 Wins";
}