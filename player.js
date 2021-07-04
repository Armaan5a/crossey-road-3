class player{
    constructor(x,y){
        this.x=x
        this.y=y
        this.spt=createSprite(this.x,this.y,50,50)
        this.spt.shapeColor="orange"
        this.spt.scale=0.07;
        this.spt.addImage(p1)    
    }

    moveLeft(){
        this.spt.x=this.spt.x-10
       }
      
    moveRight(){
          this.spt.x=this.spt.x+10
         }
    moveUp(){
          this.spt.y=this.spt.y-10
    }
    moveDown(){
        this.spt.y=this.spt.y+10
  }
}