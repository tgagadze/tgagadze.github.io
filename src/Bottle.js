class Bottle {
  constructor(x, speed) {
    this.x = x;
    this.y = -200;
    this.speed = speed;
    this.width = 30;
    this.height = 100;
  }
  show() {
    image(beerImage, this.x, this.y, this.width, this.height);
  }
  move() {
    this.y = this.y + this.speed;
  }
}
