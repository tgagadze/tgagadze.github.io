class Box {
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.w = 100;
        this.height = 90;
        this.speed = 5;
    }

    show(){
        image(boxImage, this.x, this.y, this.w, this.height)
    }
    move(){
        this.x = mouseX - 50;
    }
    
}