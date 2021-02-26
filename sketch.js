var gameState = 0;
var contestantCount;
var contestant;
var database;
var quiz;
var question;
var logo, logoImage;
var pIcon, pIconImage;

function preload()
{
  logoImage = loadImage('DeeeeP_Learning_Logo.png');
  pIconImage = loadImage('ProfileIcon.png');
}

function setup(){
  let canvas = createCanvas(windowWidth, windowHeight);
  
  database = firebase.database();
  canvas = createCanvas(windowWidth, windowHeight);
  quiz = new Quiz();
  quiz.getState();
  quiz.start();

  // Creating sprites
  logo = createSprite(75, 75);
  logo.addImage(logoImage);
  logo.scale = 0.3;

  pIcon = createSprite(500, 150);
  pIcon.addImage(pIconImage);
  pIcon.scale = 0.5;
}


function draw(){
  // background('#8C79DF');
  background('#F89494');

  drawSprites();
}