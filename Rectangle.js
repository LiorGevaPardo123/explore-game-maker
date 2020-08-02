class Rectangle
{
   constructor(x1,y1,x2,y2)
  {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }  
  Draw()//create an array that have all the spots of the pixels 
  {
  let arr = [];
   for(let i = this.x1; i < this.x2; i++)
   {
     for(let j = this.y1; j < this.y2; j++)
     {
      arr.push([i, j]);
     }
   } 
   return arr;
  }
  MoveRight()
  {    
    this.x1 += 2;
    this.x2 += 2;
  }
  MoveLeft()
  {   
    this.x1 -= 2;
    this.x2 -= 2;
  }
}