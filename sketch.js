var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var Score_ ;
var ground;
var backgroundImage;
var bacKground;

var PLAY = 1;
var END = 0;
var gameState = PLAY;

function preload(){
 
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 backgroundImage = loadImage("forest.jpg");

}


function setup() {
  createCanvas(displayWidth,displayHeight-150);
 
  FoodGroup = createGroup();
  obstacleGroup = createGroup();
  TimeGroup = createGroup();
 
  monkey = createSprite(100, 250, 10, 10);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale = 0.1;
 
  ground = createSprite(700, 610, 900, 10);
  ground.velocityX = -4;
  ground.x=ground.width/2;
  ground.visible=false;
 
   bacKground=createSprite(620,280,100,100);
    bacKground.addImage("i",backgroundImage);
   bacKground.scale=3;
    monkey.depth = bacKground.depth;
   monkey.depth = monkey.depth+1 ;
  bacKground.velocityX=-1;
   
 
  score = 0;
}


function draw() {
 
  background ("0");
 
 
 
  monkey.collide(ground);
  if(gameState === PLAY){
      monkey.changeAnimation("running", monkey_running);
   
   
    if (ground.x < 0){
      ground.x = ground.width/2;
    }

    if(keyDown("space")) {
        monkey.velocityY = -12;
    }    
   
   
  monkey.velocityY = monkey.velocityY + 0.8;
 
   
 
 
 
  food();
  obstacles();
   
    if(FoodGroup.isTouching(monkey)){
       
    monkey.scale = monkey.scale+0.01;
      score=score+1;
      FoodGroup.destroyEach();    
    }
   
     
   
   
    if(obstacleGroup.isTouching(monkey)){
       
    monkey.scale = 0.09;
    }
 
    if (bacKground.x < 0){
    bacKground.x = bacKground.width/2;
  }
 
 

  drawSprites();
 stroke("black");
    fill("black");
      textSize(20);
  text("Score:"+  score, 610, 50);
  }

function food() {
  if (frameCount % 80 === 0) {
    banana = createSprite(400,560,40,10);
    banana.addImage(bananaImage);
    banana.y = Math.round(random(590,200));
    banana.scale = 0.1;
   
    banana.velocityX = -3;
    banana.lifetime = 200;
   
    FoodGroup.add(banana);
  }
}

function obstacles() {
  if (frameCount % 300 === 0){
    obstacle = createSprite(250,610,10,10);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX = -3;
    obstacle.lifetime = 200;
    obstacle.scale = 0.1 ;
     obstacleGroup.add(obstacle);
  }

}


 
 

}


 
