
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var PLAY = 1;
var END = 0;
var gameState = PLAY;

var boy;
var bg_img;
var backgroundd;
var tree;

function preload(){
	bg_img=loadImage("background.jpg");
	boyimage=loadAnimation("Run.png","Run1.png","Run2.png","Run3.png","Run4.png","Run5.png","Run6.png","Run7.png","Run8.png","Run9.png");
    groundImage=loadImage("ground2.png");
	treeImg=loadImage("tree.png");
	boyImg=loadImage("Idle.png");



	
}

function setup() {
	createCanvas(900, 600);
	backgroundd=createSprite(50,50,500,600);
	backgroundd.addImage(bg_img);
	
	boy=createSprite(50,200,12,12);
	boy.addAnimation("running", boyimage);
	boy.scale=0.3;

	invisibleGround = createSprite(900,330,2000,10);
	invisibleGround.visible=false;
	
	
	
	obstacleGroup=createGroup();
  
	


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  

    backgroundd.velocityX = -3 

    if (backgroundd.x < 0){
      backgroundd.x = backgroundd.width/2;
    }

	if(keyDown("space") && boy.y >= 200) {
	   boy.velocityY = -12;
	  }
	  boy.velocityY=boy.velocityY+0.9;

	  boy.collide(invisibleGround);

	  if(obstacleGroup.isTouching(boy)){
		boy.velocityX=0;
        boy.changeAnimation("idle",boyImg);
		backgroundd.velocityX = 0;
		tree.velocityX=0;
		

		
    }
	
      tree1();

	 
	 
  
  drawSprites();
 
}

function tree1(){
  
	if(frameCount % 300 === 0) {
	var obstacles=createSprite(200,175,10,10);
	  obstacles.x = Math.round(random(60,750));
	  
	  obstacles.addImage(treeImg);
	  obstacles.scale = 1.5;
	  obstacles.velocityX = -4;
	  
	  obstacles.lifetime = 200;
	  
	  obstacleGroup.add(obstacles);
	
	
	}
}


