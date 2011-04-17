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
    
    init: function(x, y, size, speed, sprite) {
	// do initialization here
    	this.x = x;
    	this.y = y;
	    this.size = size;
	    this.speed = speed;
	    this.sprite = new Image();
	    this.sprite.src = sprite;
	    
    },
    
    draw: function(context) {
        console.log("draw function" + " " + this.x + " " + this.y);
	    var d = Math.floor(this.size/2);
	    var xcoord = this.x-d;
	    var ycoord = this.y-d;
	    context.drawImage(this.sprite, xcoord, ycoord);
	    
    },
    

    animate: function(context, x2, y2, frameLength) {
        console.log("animate function"  + " " + this.x + "," + this.y + " to: " + x2 + "," + y2)
        // maybe in the future try and have acceleration rather than just a set velocity
        var x1 = this.x;
        var y1 = this.y;
        var speed = this.speed;
        var dx = x2 - x1;
        var dy = y2 - y1;
        var dt = Math.floor(Math.sqrt(Math.pow(dx,2)+Math.pow(dy,2)));
        var frameLength = frameLength;
        var frameCount = 0;
        var animTime = dt/speed;
        var finalFrame = Math.floor(animTime*1000/frameLength)
        var timeElapsed = 0;
        var character = this;
        // i used all of these variables because I thought it would be easier than referencing them from character each time
        setInterval(function() {singleFrame(character, x1, y1, x2, y2, dx, dy, frameLength, finalFrame, frameCount);}, frameLength);
    }

});
