class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeimage  = loadImage("sprites/smoke.png")
    this.arr1 = []
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    //control the smoke image
    if(this.body.position.x>200 && this.body.velocity.x>10){

    var position = [this.body.position.x,this.body.position.y]
    //locating the position of angrybird
    this.arr1.push(position)
    console.log(this.arr1)
    for(var i = 0;i< this.arr1.length;i++){
      image(this.smokeimage,this.arr1[i][0],this.arr1[i][1])
    }
  }
}
}