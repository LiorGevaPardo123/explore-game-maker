"use strict";
// initializing the game engine
const gameEngine = new GameEngine();

function bla()
{
  let arr = [];
  for(let i = 80; i < (gameEngine.getScreenWidth())/3; i++)
  {
    for(let j = 80; j < (gameEngine.getScreenHeight())/2; j++)
    {
      arr.push([i, j]);
    }
  }
  console.log(arr);
  gameEngine.fillPixels(arr, 100, 0, 150, 255); 
}

function blabla()
{
  let xCenter = gameEngine.getScreenWidth/2;
  let yCenter = gameEngine.getScreenHeight/2;
  let rad = 50;
  let arr = [];
  let y = 0;
  for(let x = - rad ; x <= rad; x++)
  {
    y = Math.round(Math.sqrt(rad*rad - x*x));
    for (let i = -y; i <= y; i++)
    {
      arr.push(xCenter + x, yCenter + i);
    }
  }
  gameEngine.fillPixels(arr, 255, 0, 0, 255); 
}
/**
 * Run a single loop of the game.
 * @param {object}   data    the game state.
 */
function mainLoop(data) {
  //bla();
  blabla();
}

gameEngine.startMainLoop(mainLoop, {});
