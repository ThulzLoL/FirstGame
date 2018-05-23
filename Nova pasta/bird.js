function player() {
    this.x = height/2;
    this.y = width/2;

    this.show = function() {
        fill(255);
        rect(this.x, this.y, 50, 50)
    }
}