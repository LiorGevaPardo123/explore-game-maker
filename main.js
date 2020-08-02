"use strict";
// initializing the game engine
const gameEngine = new GameEngine();

function AClassy(data)
{
  let arr = [];
  for(let i = 0; i < (getScreenWidth())/3; i++)
  {
    for(let j = 0; i < (getScreenHeight())/4; i++)
    {
      arr.push([i, j]);
    }
  }

  gameEngine.fillPixels(arr, 100, 0, 100, 255);  
}
/**
 * Run a single loop of the game.
 * @param {object}   data    the game state.
 */
function mainLoop(data) {
  

}

gameEngine.startMainLoop(mainLoop, {});
