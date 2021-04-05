const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var snowman,Snowman;
var maxSnow;
var maxDrops=100;


function preload() {
  backgroundImg=loadImage("snow1.jpg")
  snowman=loadImage("snowman.jpg")
  Boy=loadImage("boy.jpg")


  snow1=loadImage("snow4.webp");
  snow2=loadImage("snow5.webp")
}



function setup() {
  var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
  
    Snowman=createSprite(1050,370,20,20)
    Snowman.addImage(snowman);
    
    Snowman.scale=0.75

    Ground1= new Ground(600,550,1200,20);
    Ground1.shapeColor=("brown");

    Boy1 = createSprite(350,440,20,20)
    Boy1.addImage(Boy)
    Boy1.scale=0.3

   /* if(frameCount % 150 === 0){

      for(var i=0; i<maxSnow; i++){
          maxSnow.push(new createSnow(random(0,400), random(0,400)));
      }

  }
   */
}

function draw() {
  background(backgroundImg);
  Engine.update(engine); 
  Ground1.display();
  

  rand = Math.round(random(1,2));
    if(frameCount%80===0){
       
        Snow = createSprite(random(10,1100), random(10,50), 10, 10);
        
        switch(rand){
            case 1: Snow.addImage(snow1);
            break;
            case 2: Snow.addImage(snow2);
            break; 
           
            
            default: break;
        }
        Snow.scale=0.15
        Snow.velocityY=2
      }

  
  drawSprites();
  keyPressed();
}

function keyPressed(){
  if(keyCode===32){
    Boy1.x=Boy1.x + 2;
  }
}