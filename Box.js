class Box extends BaseClass {
    constructor(x, y, width, height) {
      super(x, y, width, height)
      this.Visiblity = 255;
    }
    score(){
      if(this.Visiblity < 0 && this.Visiblity > -105){
        score++
      }
    }
    display(){
    if(this.body.speed < 3){
      var angle = this.body.angle;
      var pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rect(0, 0, this.width, this.height);
      pop();
     }
     else{
       World.remove(world, this.body);
       push();
       this.Visiblity = this.Visiblity - 5;
       tint(255, this.Visiblity);
       pop();
     }
    }
    
  }