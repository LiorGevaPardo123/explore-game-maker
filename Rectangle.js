class Rectangle
{
   constructor(x1,y1,x2,y2)
  {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }  
  
  Draw(r, g, b, a)
  {
  let arr = [];  //create an array that have all the spots of the pixels 
   for(let i = this.x1; i < this.x2; i++)
   {
     for(let j = this.y1; j < this.y2; j++)
     {
      arr.push([i, j]);
     }
   } 
   gameEngine.fillPixels(arr, r, g, b, a);       
  }

  MoveRight()
  {    
    this.x1 += 9;
    this.x2 += 9;
  }

  MoveLeft()
  {   
    this.x1 -= 9;
    this.x2 -= 9;
  }
}


