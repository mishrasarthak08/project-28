class Mango {
    constructor(x,y,radius) {
      var options = {
          isStatic: true
          
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;
      this.image = loadImage("Plucking mangoes/mango.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      fill("pink");
      imageMode(RADIUS);
      image(this.image,pos.x, pos.y,this.radius,this.radius);
    }
  };
