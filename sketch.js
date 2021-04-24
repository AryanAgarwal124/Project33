
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var backgroundImage 
var sprite1Image, sprite1
var sprite2, sprite2Image
var sprite3Image, sprite3

var maxSnow = 30

var snow = []

var invisibleGround

var sound


function preload()
{
   backgroundImage = loadImage("snow2.jpg")
   sprite1Image = loadImage("sprite1.png")
   sprite2Image = loadImage("sprite2.png")
   sprite3Image = loadImage("sprite3.png")
   sound=loadSound("christmas.mp3")
}

function setup() 
{
  createCanvas(900,500);

  engine = Engine.create();
  world = engine.world;

  sprite1 = createSprite(310,410)
  sprite1.addImage("sprites",sprite1Image)
  sprite1.scale = 0.8
  sprite1.debug = false
  sprite1.setCollider("rectangle",0,0,50,175)

  sprite2 = createSprite(710,380)
  sprite2.addImage("sprite2",sprite2Image)
  sprite2.scale = 0.90

  sprite3 = createSprite(570,355)
  sprite3.addImage("sprite3",sprite3Image)
  sprite3.scale = 0.48

  invisibleGround = createSprite(450,468,900,5)
  invisibleGround.shapeColor = "black"
  invisibleGround.visible = false;

  if(frameCount % 60 === 0){

    for(var i=0; i<maxSnow; i++){
        snow.push(new Snow(random(0,900), random(0,500),9));
    }
  } 

  sound.setVolume(0.3)
  sound.loop()

  sound.play()
}



function draw() 
{
  background(backgroundImage);  
  
  Engine.update(engine);

  sprite1.collide( invisibleGround)

  textSize(26)
  fill("darkGreen")
  text("Use the right ,left and space key to move", 120,90)
  text(" one of the characters and enjoy the song",190,125)

  for(var i=0; i<maxSnow; i++){
    snow[i].display();
    snow[i].update();
   }

   if(keyDown("space")  && sprite1.y >= 380){
    sprite1.velocityY = -12
  }

  sprite1.velocityY = sprite1.velocityY + 0.8

 
    drawSprites();
}

function keyPressed()
{
  if(keyCode === RIGHT_ARROW){
    sprite1.x = sprite1.x + 20;
  }

  if(keyCode === LEFT_ARROW){
    sprite1.x = sprite1.x - 20;
  }

}