var sea, seaImg, ship, shipImg;
function preload(){
seaImg = loadImage("sea.png");
shipImg = loadImage("ship-1.png");
}

function setup(){
  createCanvas(2000,2000);
  sea = createSprite(width/2,height/2-500,width,height);
  sea.addImage(seaImg);
  sea.scale = 0.9;
  sea.velocity.x = -5;
  ship = createSprite(width/5,height/5+100,100,100);
  ship.addImage(shipImg);
  
  

}

function draw() {
  background("blue");
    drawSprites();
    console.log(sea.x);
    if(sea.x < 100){
      sea.x = width/2;
    }
}
