var seaImage;
var ship,ship1;
function preload(){
  seaImage = loadImage("sea.png")
  ship1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
  
}

function setup(){
  createCanvas(600,600);
  
  //creating the sea
  sea = createSprite(400,300);
  sea.addImage(seaImage)
  sea.scale = 0.3;
  sea.velocityX = -1;
  sea.visible=true;
//creating the ship
ship = createSprite(50,250,20,50);
ship.addAnimation("running",ship1);
edges = createEdgeSprites();

//adding scale and position to ship
ship.scale = 0.25;
ship.x = 90;
ship.y = 300;
}

function draw() {
 
  

  

 
//reseting background
  if(sea.x < 0){
    sea.x = sea.width/2;
  }

  
 drawSprites()
}