"use strict";
//initializing the game engine
const gameEngine = new GameEngine();
const width = gameEngine.getScreenWidth();
const height = gameEngine.getScreenHeight();
//let generator = new RGen();

let rnd = Math.floor(Math.random() * 2*Math.PI/3) + Math.PI/6; // returns a random integer from 1 to 100
//radius = 15
let ball = new Circle(gameEngine.getScreenWidth()/2,50+15, 15, 6, rnd); 
let rec = new Rectangle(370, 20, 490, 50, 15);
//let recs = generator.rect();

let rec11 = new Rectangle(60,280,110,300);
let rec12 = new Rectangle(140,280,190,300);
let rec13 = new Rectangle(220,280,270,300);
let rec14 = new Rectangle(300,280,350,300);
let rec15 = new Rectangle(380,280,430,300);
let rec16 = new Rectangle(460,280,510,300);
let rec17 = new Rectangle(540,280,590,300);
let rec18 = new Rectangle(620,280,670,300);
let rec19 = new Rectangle(700,280,750,300);

let rec21 = new Rectangle(60,350,110,370);
let rec22 = new Rectangle(140,350,190,370);
let rec23 = new Rectangle(220,350,270,370);
let rec24 = new Rectangle(300,350,350,370);
let rec25 = new Rectangle(380,350,430,370);
let rec26 = new Rectangle(460,350,510,370);
let rec27 = new Rectangle(540,350,590,370);
let rec28 = new Rectangle(620,350,670,370);
let rec29 = new Rectangle(700,350,750,370);

let rec31 = new Rectangle(60,420,110,440);
let rec32 = new Rectangle(140,420,190,440);
let rec33 = new Rectangle(220,420,270,440);
let rec34 = new Rectangle(300,420,350,440);
let rec35 = new Rectangle(380,420,430,440);
let rec36 = new Rectangle(460,420,510,440);
let rec37 = new Rectangle(540,420,590,440);
let rec38 = new Rectangle(620,420,670,440);
let rec39 = new Rectangle(700,420,750,440);

//array of rectangles
let blocks = [rec11,rec12,rec13,rec14,rec15,rec16,rec17,rec18,rec19,
rec21,rec22,rec23,rec24,rec25,rec26,rec27,rec28,rec29,
rec31,rec32,rec33,rec34,rec35,rec36,rec37,rec38,rec39]

function init()//A function that draws the initial blocks in the game
{
  for(let i =0; i<27; i++)
  {
    blocks[i].Draw(215, 55, 55, 255);
  }   

  ball.Draw(0, 206, 209, 255);
  rec.Draw(0, 206, 209, 255);    

}

function checkRec(block)
{
  if ((ball.yCenter + ball.rad > block.y1) && (ball.xCenter - ball.rad < block.x2) && (ball.xCenter + ball.rad > block.x1) && (block.visible === true))
  {
    ball.angle = 2*Math.PI - ball.angle;
    block.Delete();
  }

  if ((ball.yCenter - ball.rad < block.y2) && (ball.xCenter - ball.rad < block.x2) && (ball.xCenter + ball.rad > block.x1) && (block.visible === true))
  {
    ball.angle = 2*Math.PI - ball.angle;
    block.Delete();
  }

}

function check()
{
  for(let i = 0; i < 27; i++)
  {
    checkRec(blocks[i]);
  }   
}


let num =1;
function mainLoop(data)
{
  gameEngine.clear();   
  ball.Move();    
  

  if ((ball.yCenter - ball.rad <= rec.y2) && (ball.xCenter - ball.rad < rec.x2) && (ball.xCenter + ball.rad > rec.x1))
  {
    ball.angle = 2*Math.PI - ball.angle;
  }

  if ((ball.yCenter + ball.rad + ball.speed < height) && (ball.xCenter - ball.rad - ball.speed > 0) && (ball.xCenter + ball.rad + ball.speed < width))
  {
    ball.Move();    
  }
  else
  {
    ball.angle = num*Math.PI - ball.angle;
    num++;
    ball.Move();
  }


  if (gameEngine.isKeyHeld("ArrowRight")&& (rec.x2 + rec.step < width))
  {
    gameEngine.clear();
    rec.MoveRight();
  }

  if (gameEngine.isKeyHeld("ArrowLeft") && (rec.x1 - rec.step > 0))
  {
    gameEngine.clear();
    rec.MoveLeft();
  }    

  init(); 
} 

gameEngine.startMainLoop(mainLoop, {});