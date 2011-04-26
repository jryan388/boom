Character = function(x, y, size, speed, sprite) {
    this.init(x, y, size, speed, sprite);
}

$.extend(Character.prototype, {
    // object variables
    x: null,
    y: null,
    size: null,
    speed: null,
    sprite: null,
    
    init: function(x1, y1, size, speed, sprite) {
	// do initialization here
    	this.x1 = x1;
    	this.y1 = y1;
    	this.x2 = x1;
    	this.y2 = y1;
	    this.size = size;
	    this.speed = speed;
	    this.sprite = sprite;
	    console.log("drawing character " + sprite);
	    
    },
    
    draw: function(context) {
        var self = this;
        // console.log("draw function " + self.x1 + " " + self.y1);
	    var d = Math.floor(this.size/2);
	    var xcoord = this.x1-d;
	    var ycoord = this.y1-d;
	    //var pic = new Image();
	    //pic.src = "pics/knight-small.png";
	    //pic.onload = function() {
	    //    context.drawImage(pic, xcoord, ycoord)
	    //};
	    var pic = document.getElementById(this.sprite);
	    context.drawImage(pic, xcoord, ycoord);
	    
    },
    

    move: function(frameLength) {
        var self = this;
        if (this.x1 == this.x2 || this.y1 == this.y2) { return 0; };
        // console.log("moving from " + self.x1 + ", " + self.y1 + " to " + self.x2 + ", " + self.y2);
        var dx = this.x2 - this.x1;
        var dy = this.y2 - this.y1;
        var angle = Math.atan(dy/dx);
        var speedInMS = this.speed/1000;
        // var dt = Math.floor(Math.sqrt(dx*dx+dy*dy));
        var dt = Math.round(dx/Math.cos(angle));
        
        // moveT is how much the character should move in a single frame
        var moveT = speedInMS*frameLength;
        
        // if x is negative, moveT should be negative
        if (Math.abs(dx) == dx*-1) { moveT *= -1 }
        
        var moveX = Math.cos(angle)*moveT;
        var moveY = Math.sin(angle)*moveT;
        if (Math.abs(moveT) >= Math.abs(dt)) {
            this.x1 = this.x2;
            this.y1 = this.y2;
        } else {
        this.x1 += moveX;
        this.y1 += moveY;
        }
    }

});
