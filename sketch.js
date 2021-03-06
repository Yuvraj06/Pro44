var player;

var role = "1";

var ground;

var bg;

function setup() {
	createCanvas(2048, 1546);

	player=createSprite(200,200);
	player.debug = false;
	player.setCollider("rectangle",-110,0,300,430);


	// player.addAnimation("ani1",player1Idle );
	// player.addAnimation("ani2",player2Idle );
	// player.addAnimation("ani3",player3Idle );
	player.addAnimation("run1",player1Run);
	player.addAnimation("run2",player2Run);
	player.addAnimation("run3",player3Run);
	player.scale = 0.5

	ground = createSprite(810,1310,1620,10)
	ground.visible = false;

	bg = createSprite(0,773);
	bg.addImage("without_parralax",bgI);
	bg.depth = 0;
	bg.velocityX = -5;

	
	

	
  
}


function draw() {
  background(0);

  movementIRG();

  if(bg.x <= 0){
	  bg.x=2048;
  }

  console.log(bg.x);
 
  
  drawSprites();
 
}




