var form,game,player,database;
var gameState = 0;
var playerCount,canvas,backgroundImage

function setup(){
    canvas = createCanvas(400,400);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
      
}