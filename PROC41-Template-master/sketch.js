const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var canvas, backgroundImage;

var manimage,umbrellaimage,lightningimage,lightningimage2;
var drop,dropGroup;

function preload(){
    manimage=loadImage("project41man.png")
    umbrellaimage=loadImage("project41umbrella.png")
    lightningimage=loadImage("project41lightning.jpg")
    lightningimage2=loadImage("project41lightning2.jpg")
}

function setup(){
   createCanvas(200,400)
   engine = Engine.create();
   world = engine.world;

   man=createSprite(100,350);
   man.addImage(manimage,"project41man.png")

   umbrella=createSprite(100,320);
   umbrella.addImage(umbrellaimage,"project41umbrella.png")

   

function draw(){
    background(0)
    Engine.update(engine);

    lightning();
    spawnDrops();

   
    drop.display();
}   

function spawnDrops(){
    if (frameCount%20===0){
        drop= new Drops(random(10,200),0)
        drop.velocityY=3
        //drop.bounceOff(umbrella)
    
        dropGroup.add(drop);
}
    }
}


function lightning() { 
    if(frameCount%50===0) { 
        lightning1.addImage("image1", lightningimage) } 
        else 
        lightning1.addImage("image2", lightningimage2) }

