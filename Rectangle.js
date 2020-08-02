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
    this.x1 += 7;
    this.x2 += 7;
  }
  MoveLeft()
  {   
    this.x1 -= 7;
    this.x2 -= 7;
  }
}

class RGen 
{
  constructor()
  {
    this.margin = 60;
    this.width = 70;
    this.alienboi = [];
    for(let i = this.margin; i < gameEngine.canv.width - this.margin; i += this.width)
    {
      for(let j = this.margin; j < gameEngine.canv.height/2; j += this.width)
        this.alienboi.push(new Rectangle(i,j+220,i+50,j+240));
        console.log("Hippity hoppety you are now my property!");
    }
  }

  rect(){
    return this.alienboi;
  }
}