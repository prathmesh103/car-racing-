var canvas, backgroundImage;
var allPlayers;
var gameState = 0;
var playerCount;
var car1,car2,car3,car4
var cars 
var database;

var form, player, game;


function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){

  if(playerCount===4){
game.update(1)

    
  } 
  if(gameState===1){

    game.play()
  }
}
