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
	    this.sprite = document.getElementById(sprite);
	    console.log("drawing character " + sprite);
	    
    },
    
    draw: function(context) {
        var self = this;
        // console.log("draw function " + self.x1 + " " + self.y1);
	    var d = Math.floor(this.size/2);
	    var xcoord = this.x1-d;
	    var ycoord = this.y1-d;
	    context.drawImage(self.sprite, xcoord, ycoord);
	    
    },
    
    drawTiles: function(map) {
        if ((this.x1 == this.x2) && (this.y1 == this.y2)) {return 0;}
        var d = Math.floor(this.size/2);
        var canvas = document.getElementById('game-canvas');
        var width = canvas.width;
        var height = canvas.height;
        // four corners of the character's image
        var x1 = this.x1-d;
        var x2 = this.x1+d;
        var y1 = this.y1-d;
        var y2 = this.y1+d;
        //console.log((x1 > 0) && (x1 < width));
        //console.log((x2 > 0) && (x2 < width));
        //console.log((y1 > 0) && (y1 < height));
        //console.log((y2 > 0) && (y2 < height));
        //console.log("foo " + (0 < x1 < width));
        //console.log("foo " + ((0<x1) && (x1<width)));
        if ((0<x1)&&(x1<width) && (0<y1)&&(y1<height)) { map.findTile(x1, y1).draw(map); }
        if ((0<x2)&&(x2<width) && (0<y1)&&(y1<height)) { map.findTile(x2, y1).draw(map); }
        if ((0<x1)&&(x1<height) && (0<y2)&&(y2<height)) { map.findTile(x1, y2).draw(map); }
        if ((0<x2)&&(x2<height) && (0<y2)&&(y2<height)) { map.findTile(x2, y2).draw(map); }
    },

    move: function(frameLength) {
        var self = this;
        if ((this.x1 == this.x2) && (this.y1 == this.y2)) { return 0; };
        //console.log("moving from " + self.x1 + ", " + self.y1 + " to " + self.x2 + ", " + self.y2);
        var speedInMS = this.speed/1000;
        var dx = this.x2 - this.x1;
        var dy = this.y2 - this.y1;
        var dt = Math.round(Math.sqrt(dx*dx+dy*dy));
        var moveT = speedInMS*frameLength;
        var moveX = dx*moveT/dt;
        var moveY = dy*moveT/dt;
        if (moveT >= dt) {
            this.x1 = this.x2;
            this.y1 = this.y2;
            return;
        } else {
        this.x1 += moveX;
        this.y1 += moveY;
        }
    }

});
