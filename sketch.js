
var background;

var spiderman, cat, web, villian;

var catGroup, webGroup, villianGroup;

function preload()
{

//bgImage = loadImage("cbimg.png");
 spiderMan = loadAnimation("spidey.gif");
 webImage = loadImage ("web.png");
 kittyImage = loadImage("kitty.png");
 villianImage = loadImage("venom.png");


}

function setup() {
  createCanvas(500,500);
 
  //bg = createSprite(displayWidth,displayHeight-430);
  //bg.addImage(bgImage);
  //bg.scale = 4.2;
  //bg.velocityX = -5;

  spiderman = createSprite(200, 200);
  spiderman.addAnimation("swinging", spiderMan);
  spiderman.scale = 0.5;
  

}

function draw() 
{
  background(51);
  //if(bg.x <0){
 //   bg.x=bg.width/2
//  }


  drawSprites();
}


