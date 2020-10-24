class Ship {
 
  constructor(x) {
    this.x = x;
    this.score = 0;
    this.respawn();
    this.r = 15;
    this.image = loadImage("spaceshipIMG.png");
  }
 
  respawn() {
    this.y = height - 50;
    this.isUp = false
    this.isDown = false;
  }
  
  update() {
    if (this.isUp && this.y > 0) {
      this.up();
    } else if (this.isDown && this.y < height - 20) {
      this.down();
    }
     
    if (this.hasPlayerScoredAPoint()) {
      this.score ++;
      this.respawn();
    }
  }
   
  display() {
    image(this.image, this.x, this.y - 10, this.r * 2);
  }
   
   
  up() {
    this.y--;
  }
   
  down() {
   this.y++;
  }
   
  hasPlayerScoredAPoint() {
    if (this.y <= 0) {
      return true;
    }
    return false;
  }
}