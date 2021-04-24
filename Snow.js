class Snow {
    constructor(x,y,r) {
      var options = {
        'restitution':0.1,
        'friction':0.1
      }
      this.snow = Matter.Bodies.circle(x,y,r,options);
      this.x = x
      this.y = y
      this.r=r;
      this.image=loadImage("snow5.webp")
      World.add(world, this.snow);
    }

    update()
    {
      if(this.snow.position.y > height){
        Matter.Body.setPosition(this.snow,{x:random(0, 900), y:random(0, 500)});
      }
    }

    display()
    {
      var pos = this.snow.position
      push()
      translate(pos.x,pos.y);
      ellipseMode(RADIUS);
      imageMode(CENTER)
      image(this.image,0,0, this.r*2,this.r*2)
      pop()

    }
  };