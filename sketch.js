var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount;
var carro,carro2
var pista
var carros,carros2
var allplayers
var matrix=[]
var gameState

function preload() {
  backgroundImage = loadImage("./assets/planodefundo.png");
carro = loadImage("./assets/car1.png");
carro2 = loadImage("./assets/car2.png");
pista= loadImage("./assets/PISTA.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState()
  game.start();

}

function draw() {
  background(backgroundImage);
  if(playerCount===2){
  game.update(1)
  }
  if(gameState===1){
  game.play()

  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
