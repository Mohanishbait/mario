var mario , mario_running , mario_collided ;
var bg , bgImage ;
function preload(){
mario_running=loadAnimation("images/mar1.png",
"images/mar2.png",
"images/mar3.png",
"images/mar4.png",
"images/mar5.png",
"images/mar6.png",
"images/mar7.png");
bgImage=loadImage("images/bgnew.jpg");

}

function setup() {
createCanvas(1000, 600);
bg=createSprite(500,300);
bg.addImage(bgImage)
bg.scale=0.5;
mario=createSprite(100,500,30,70)
mario.scale=0.3
mario.addAnimation("running",mario_running);
ground=createSprite(100,580,400,10)
ground.visible=false
mario.debug=true
}

function draw() {

background("lightblue")
if(keyDown("space")){
    mario.velocityY = -12.5 
}
mario.velocityY=mario.velocityY+0.5
mario.collide(ground)

drawSprites();

}


