var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

  var turn = 0;
 
var particles = [];
var plinkos = [];
var divisions = [];

var particles;

var ground;

var divisionHeight=300;
var score = 0;

var PLAY = 1;
var END = 0;
var gameState = PLAY;

var count = 1;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    if (turn>=5) {
    gameState === END;
    }

    //if (gameState === END) {
      //text("GAME OVER", 400, 400);
    //}

    console.log(gameState);
    console.log(turn);
    
}
 


function draw() {
  background("black");
  textSize(20)
  text("Score :"+score, 20, 30);
  //text("Chance :"+count, 100, 30);
  text(mouseX + "," + mouseY, mouseX, mouseY);
  text("500", 25, 520);
  //25,520
  text("500", 105, 520);
  //125,520
  text("500", 185, 520);
  //185,520
  text("500", 265, 520);
  //265,520
  text("100", 345, 520);
  //345,520
  text("100", 425, 520);
  //425,520
  text("100", 505, 520);
  //505,520
  text("200", 585, 520);
  //585,520
  text("200", 665, 520);
  //665,520
  text("200", 745, 520);
  //745,520
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
    
     
   }

 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   if (particles != null) {
     particles.display();
     if (particles.body.position.x > 10 && particles.body.position.x < 320) {
       if(particles.body.position.y > 450) {
         score = score+500;
       }
       if(particles.body.position.x > 320 && particles.body.position.x < 565) {
         if(particles.body.position.y > 400) {
         score = score+100;
       }
       }
      }
     if(particles.body.position.x > 565 && particles.body.position.x > 800) {
       if(particles.body.position.y > 400) {
         score = score+200;
       }
     }
   }

   console.log(score);

   //drawSprites();
 }

function mousePressed() {
  if (gameState !== END) {
  turn++;
  particles.push(new Particle(mouseX, 10, 10));
  }
}