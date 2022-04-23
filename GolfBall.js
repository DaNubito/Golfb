class Golfball {
    constructor(x,y, width, height, angle){
       this.x = x;
       this.y = y;
       this.width = width;
       this.angle = angle;
       this.height = height;
    
        var options = {
            isStatic: true
        };
    this.r = 30
    this.body = Bodies.circle(x,y,this.r,options);
    this.image =  loadImage("./Assets/ball.png");
    World.add(world, this.body);
    }

}