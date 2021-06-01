class Paper extends baseClass {
    constructor(x,y){
        var options = {
            'restitution':0.3,
            'friction':0,
            'density':1.2
        }
      super(x,y,50,50);
      this.image = loadImage("paper.png");
    }
    display(){
     // this.body.position.x = mouseX;
      //this.body.position.y = mouseY;
      super.display();
    }
  }