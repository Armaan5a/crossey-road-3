class Log{
    constructor(speed){
        this.x = random([200,430,660,890,1120]);
        this.y = random([1050,1150,1250,1850,1950,2050]);
        this.width = 1500;
        this.height = 800;
        this.speed = speed;
        this.spt = createSprite(this.x,this.y,this.width,this.height);
        this.spt.velocityX = this.speed;
        this.spt.shapeColor = "brown";
        this.spt.scale=0.07;
        this.spt.addImage(log)
    }

   
}