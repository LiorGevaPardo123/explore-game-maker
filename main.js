"use strict";
//initializing the game engine
const gameEngine = new GameEngine();
const width = gameEngine.getScreenWidth();
const height = gameEngine.getScreenHeight();
let generator = new RGen();
// Nativ: Make sure to give meaningful names to your functions.
// Nativ: Make sure your rectangle function accepts x, y, height, width, and color.
// Nativ: Make sure your circle function accepts x, y, radius, and color.

//radius = 15
let redBall = new Circle(gameEngine.getScreenWidth()/2,50+15, 15); 
let rec = new Rectangle(370,20,490,50);
let recs = generator.rect();

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

  for(let reco of recs)
  {
    gameEngine.fillPixels(reco.Draw(), 0, 206, 209, 255); 
  }
  gameEngine.fillPixels(redBall.Draw(), 0, 206, 209, 255);   
  gameEngine.fillPixels(rec.Draw(), 0, 206, 209, 255);      

  ///init();
  }

  
gameEngine.startMainLoop(mainLoop, {});
