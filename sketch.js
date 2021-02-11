var BgImg;
var TechDragon, TDImg;
var RedGem, Rgimg;
var SmallRedGem, SRGimg;
var Obstacle, Obsimg;
var ground;
var SmallGemGroup, ObstacleGroup, GemGroup;
var highground;

function preload(){
  BgImg = loadImage("Background.png")  
  TDImg = loadImage("Hi-Tech.png")
  Rgimg = loadImage("RedGem.png")
  SRGimg = loadImage("SmallerRedGem.png")
  Obsimg = loadImage("FlyingObstacle.png")
}

function setup() {
  createCanvas(1100,500);
  TechDragon = createSprite(100,450,40,40)
  TechDragon.velocityY = TechDragon.velocityY +0.8
  TechDragon.addImage("TDimg", TDImg)
  TechDragon.scale = 0.8

  ground = createSprite(0,460,1200,10)
  ground.visible = false

  highground = createSprite(0,0,1200,10)
  highground.visible = false

  SmallGemGroup = new Group();
  ObstacleGroup = new Group();
  GemGroup = new Group();
}



function draw() {
  background(BgImg);
  TechDragon.collide(ground)  
  
  if(keyDown("UP_ARROW")){
    TechDragon.y = TechDragon.y-5
  }
  
  if(keyDown("DOWN_ARROW")){
    TechDragon.y = TechDragon.y+5
  }

 
  SpawnObstacle();
  SpawnSmallGem();

  drawSprites();
}

function SpawnObstacle(){
  if(frameCount % 50 === 0){
    Obstacle = createSprite(1200,100,30,30)
    Obstacle.y = Math.round(random(50,350))
    Obstacle.addImage(ObsImg)
    Obstacle.velocityX = -15
    Obstacle.lifetime = 150;
    ObstacleGroup.add(Obstacle)
  }
}


function SpawnSmallGem(){
  if(frameCount % 30 === 0){
    SmallRedGem = createSprite(1200,100,30,30)
    SmallRedGem.y = Math.round(random(50,350))
    SmallRedGem.addImage(SRGimg)
    SmallRedGem.scale = 0.5
    SmallRedGem.velocityX = -15
    SmallRedGem.lifetime = 100;
    SmallGemGroup.add(SmallRedGem)
  }
}