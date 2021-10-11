var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

var width = canvas.getAttribute('width');
var height = canvas.getAttribute('height');

//create image variable
var bgImage = new Image();
var singleplayerImage = new Image();
var multiplayerImage = new Image();
var quitImage = new Image();
var cardsImage = new Image();

//arrays for the button position
var buttonX = [192,110,149,160];
var buttonY = [100,140,180,220];
var buttonWidth = [96,260,182,160];
var buttonHeight = [40,40,40,40];

var backgroundY = 0;
var speed = 1;

//import images
bgImage.src = "Images/table.png";
bgImage.onload = function(){
    context.drawImage(bgImage, 0, backgroundY);
}
singleplayerImage.src = "Images/SinglePlayer.png";
singleplayerImage.onload = function(){
    context.drawImage(singleplayerImage, buttonX[0], buttonY[0]);
}
multiplayerImage.src = "Images/MultiPlayer.png";
multiplayerImage.onload = function(){
    context.drawImage(multiplayerImage, buttonX[1], buttonY[1]);
}
quitImage.src = "Images/Quit.png";
quitImage.onload = function(){
    context.drawImage(quitImage, buttonX[2], buttonY[2]);
}
cardsImage.src = "Images/cards.png";
cardsImage.onload = function(){
    context.drawImage(cardsImage, 50, -10);
}

