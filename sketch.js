

 var cat,catImg;
 var mouse,mouseImg;
 var Cheesse,cheesseImg;
 var ground,groundImg;
var rock ,rockImg;
var invisibleGround;
var enter,enterImg;
var cheeseGroup
var cheesse
 function preload(){

catImg=loadImage("images/cat.png");
mouseImg=loadImage("images/mouse.png");
cheesseImg=loadImage("images/cheesse.png"); 
groundImg=loadImage("images/ground.jpg");
rockImg=loadImage("images/rock.png");
enterImg=loadImage("images/enter.png");


 }
 
 function setup() {
  createCanvas(1920,800);
 
  cat=createSprite(100,620,50);
  cat.addImage(catImg);
  cat .scale=0.7;

  mouse=createSprite(400,650,1000,1000);
  mouse.addImage(mouseImg);
  mouse.scale=0.2;  


  

 enter=createSprite(250,100,50,50)
enter.addImage(enterImg);
enter.scale=0.5;
 invisibleGround=createSprite(1000,780,2000,50)
 invisibleGround.visible=false;


 
}

function draw() {
  background(0); 
  
 

image(groundImg,0,0,1920,800)

if(keyDown ("UP_ARROW")){
  cat.velocityY=-20;
}

if(keyDown("w")){
   mouse.velocityY=-20;
}
mouse.velocityY+=5;
cat.velocityY+=5;

mouse.collide(invisibleGround);
cat.collide(invisibleGround);

if(keyDown("enter")){
  cat.velocityX=10;
  mouse.velocityX=10;
}
if(cat.x>2000||mouse.x>2000){
  cat.x=100;
  mouse.x=400;
}

if(frameCount%400===0)
  {cheesse=createSprite(2100,650,1000,1000);
  cheesse.addImage(cheesseImg);
  cheesse.scale=0.2;
  cheesse.velocityX = -4

   
  if(mouse.isTouching(cheesse)){ 
    mouse.velocityX++
    cheesse.destroy();
  }
    
  }

 if(frameCount%400===0){
   rock=createSprite(3000,650,50,50);
   rock.addImage(rockImg);
   rock.scale=0.4;
   rock.velocityX=-4;
 }


  drawSprites();
}


