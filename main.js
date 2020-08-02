"use strict";
//initializing the game engine
const gameEngine = new GameEngine();
const width = gameEngine.getScreenWidth();
const height = gameEngine.getScreenHeight();

// Nativ: Make sure to give meaningful names to your functions.
// Nativ: Make sure your rectangle function accepts x, y, height, width, and color.
// Nativ: Make sure your circle function accepts x, y, radius, and color.

//radius = 15
let redBall = new Circle(gameEngine.getScreenWidth()/2,50+15, 15); 
let rec = new Rectangle(370,20,490,50);

let rec11 = new Rectangle(width/24, 4*height/36 , 5*width/24, height/36);
let rec12 = new Rectangle(7*width/24, 4*height/36 , 11*width/24, height/36);
let rec13 = new Rectangle(13*width/24, 4*height/36 , 17*width/24, height/36);
let rec14 = new Rectangle(19*width/24, 4*height/36 , 23*width/24, height/36);

let rec21 = new Rectangle(width/24, 8*height/36 , 5*width/24, 5*height/36);
let rec22 = new Rectangle(7*width/24, 8*height/36 , 11*width/24, 5*height/36);
let rec23 = new Rectangle(13*width/24, 8*height/36 , 17*width/24, 5*height/36);
let rec24 = new Rectangle(19*width/24, 8*height/36 , 23*width/24, 5*height/36);

let rec31 = new Rectangle(width/24, 12*height/36 , 5*width/24, 9*height/36);
let rec32 = new Rectangle(7*width/24, 12*height/36 , 11*width/24, 9*height/36);
let rec33 = new Rectangle(13*width/24, 12*height/36 , 17*width/24, 9*height/36);
let rec34 = new Rectangle(19*width/24, 12*height/36 , 23*width/24, 9*height/36);


function init()
{
  gameEngine.fillPixels(rec11.Draw(), 0, 206, 209, 255);
  gameEngine.fillPixels(rec12.Draw(), 0, 206, 209, 255); 
  gameEngine.fillPixels(rec13.Draw(), 0, 206, 209, 255); 
  gameEngine.fillPixels(rec14.Draw(), 0, 206, 209, 255);    

  gameEngine.fillPixels(rec21.Draw(), 0, 206, 209, 255);
  gameEngine.fillPixels(rec22.Draw(), 0, 206, 209, 255); 
  gameEngine.fillPixels(rec23.Draw(), 0, 206, 209, 255); 
  gameEngine.fillPixels(rec24.Draw(), 0, 206, 209, 255);   

  gameEngine.fillPixels(rec31.Draw(), 0, 206, 209, 255);
  gameEngine.fillPixels(rec32.Draw(), 0, 206, 209, 255); 
  gameEngine.fillPixels(rec33.Draw(), 0, 206, 209, 255); 
  gameEngine.fillPixels(rec34.Draw(), 0, 206, 209, 255);   

}


function mainLoop(data) {  
  if(gameEngine.isKeyClicked("Space"))
  {
    gameEngine.clear();
    redBall.Move();
  }  
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
  gameEngine.fillPixels(redBall.Draw(), 0, 206, 209, 255);   
  gameEngine.fillPixels(rec.Draw(), 0, 206, 209, 255);      

  init();
  }

  
gameEngine.startMainLoop(mainLoop, {});
