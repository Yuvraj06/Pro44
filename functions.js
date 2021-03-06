

//                                          JKL CHANGING CHARECTORS


function jkl(){
	if(keyDown("j")){
		player.changeAnimation("run1",player1Run );
		player.scale = 0.5	
		player.setCollider("rectangle",-110,0,300,430);	
	}
	else if(keyDown("k")){
		player.changeAnimation("run2",player2Run );
		player.scale = 0.5
		player.setCollider("rectangle",-100,0,380,350);
	}
	else if(keyDown("l")){
		player.changeAnimation("run3",player3Run );
		player.scale = 0.4
		player.setCollider("rectangle",0,0,370,600);
	}
}




//                                               SIMPLE MOVEMENT

function movement(){
	if (keyDown(RIGHT_ARROW) || keyDown("d")) {
	  player.x += 10;
	  player.changeAnimation("run1",player1Run );
	  player.scale = 0.5 
	}
	else if (keyDown(LEFT_ARROW) || keyDown("a")) {
	  player.x -= 10;
	  player.changeAnimation("run1",player1Run );
	}
	else if ((keyDown(UP_ARROW) || keyDown("w")|| keyDown("space"))) {
	  player.velocityY=-23;
	}else{
		player.changeAnimation("run3",player1Idle );
		player.scale = 0.5
	}
	
	
	// player.velocityY= player.velocityY+2;
	
  
	
  }




  //                                           MOVEMENT OF INFINITE RUNNER GAME

  function movementIRG(){

    if ((keyDown(UP_ARROW) || keyDown("w")|| keyDown("space"))&& player.collide(ground)) {
        if(role === "1"){
            player.velocityY=-35;
        }
        else if(role === "2"){
            player.velocityY=-17;
        }
        else if(role === "3"){
            player.velocityY=-23;
        }
      
    }	
	
    if(keyDown("j")){
		player.changeAnimation("run1",player1Run );
		player.scale = 0.5	
		player.setCollider("rectangle",-110,0,300,430);
        role = "1";	
	}
	else if(keyDown("k")){
		player.changeAnimation("run2",player2Run );
		player.scale = 0.5
		player.setCollider("rectangle",-100,0,380,350);
        role = "2";
	}
	else if(keyDown("l")){
		player.changeAnimation("run3",player3Run );
		player.scale = 0.4
		player.setCollider("rectangle",0,0,370,600);
        role = "3";
	}

    player.velocityY= player.velocityY+2;

	player.collide(ground);
 
	
  }