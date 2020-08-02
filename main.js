"use strict";
//initializing the game engine
const gameEngine = new GameEngine();
const width = gameEngine.getScreenWidth();
const height = gameEngine.getScreenHeight();
//let generator = new RGen();
// Nativ: Make sure to give meaningful names to your functions.
// Nativ: Make sure your rectangle function accepts x, y, height, width, and color.
// Nativ: Make sure your circle function accepts x, y, radius, and color.

//radius = 15
let redBall = new Circle(gameEngine.getScreenWidth()/2,50+15, 15); 
let rec = new Rectangle(370,20,490,50);
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

function init()
{
   gameEngine.fillPixels(rec11.Draw(), 255, 206, 209, 255); 
   gameEngine.fillPixels(rec12.Draw(), 255, 206, 209, 255); 
   gameEngine.fillPixels(rec13.Draw(), 255, 206, 209, 255); 
   gameEngine.fillPixels(rec14.Draw(), 255, 206, 209, 255);     
   gameEngine.fillPixels(rec15.Draw(), 255, 206, 209, 255); 
   gameEngine.fillPixels(rec16.Draw(), 255, 206, 209, 255); 
   gameEngine.fillPixels(rec17.Draw(), 255, 206, 209, 255); 
   gameEngine.fillPixels(rec18.Draw(), 255, 206, 209, 255); 
   gameEngine.fillPixels(rec19.Draw(), 255, 206, 209, 255);   

   gameEngine.fillPixels(rec21.Draw(), 255, 206, 209, 255); 
   gameEngine.fillPixels(rec22.Draw(), 255, 206, 209, 255); 
   gameEngine.fillPixels(rec23.Draw(), 255, 206, 209, 255); 
   gameEngine.fillPixels(rec24.Draw(), 255, 206, 209, 255);     
   gameEngine.fillPixels(rec25.Draw(), 255, 206, 209, 255); 
   gameEngine.fillPixels(rec26.Draw(), 255, 206, 209, 255); 
   gameEngine.fillPixels(rec27.Draw(), 255, 206, 209, 255); 
   gameEngine.fillPixels(rec28.Draw(), 255, 206, 209, 255); 
   gameEngine.fillPixels(rec29.Draw(), 255, 206, 209, 255);   

   gameEngine.fillPixels(rec31.Draw(), 255, 206, 209, 255); 
   gameEngine.fillPixels(rec32.Draw(), 255, 206, 209, 255); 
   gameEngine.fillPixels(rec33.Draw(), 255, 206, 209, 255); 
   gameEngine.fillPixels(rec34.Draw(), 255, 206, 209, 255);     
   gameEngine.fillPixels(rec35.Draw(), 255, 206, 209, 255); 
   gameEngine.fillPixels(rec36.Draw(), 255, 206, 209, 255); 
   gameEngine.fillPixels(rec37.Draw(), 255, 206, 209, 255); 
   gameEngine.fillPixels(rec38.Draw(), 255, 206, 209, 255); 
   gameEngine.fillPixels(rec39.Draw(), 255, 206, 209, 255);   
}

function mainLoop(data){ 

  gameEngine.clear();   

  redBall.Move();

  if(gameEngine.isKeyHeld("ArrowRight")&& rec.x2<gameEngine.getScreenWidth())
  {
    gameEngine.clear();
    rec.MoveRight();
  }
  if(gameEngine.isKeyHeld("ArrowLeft")&&rec.x1>0)
  {
    gameEngine.clear();
    rec.MoveLeft();
  }

  //for(let reco of recs)
  //{
   // gameEngine.fillPixels(reco.Draw(), 0, 206, 209, 255); 
  //}
  gameEngine.fillPixels(redBall.Draw(), 0, 206, 209, 255);   
  gameEngine.fillPixels(rec.Draw(), 0, 206, 209, 255);        

  init();
  }

  
gameEngine.startMainLoop(mainLoop, {});
