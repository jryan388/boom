Character = function(x, y, size, speed, sprite, map) {
    this.init(x, y, size, speed, sprite, map);
}

$.extend(Character.prototype, {
    // object variables
    x: null,
    y: null,
    size: null,
    speed: null,
    sprite: null,
    map: null,
    
    init: function(x1, y1, size, speed, sprite, map) {
	// do initialization here
    	this.x1 = x1;
    	this.y1 = y1;
    	this.x2 = x1;
    	this.y2 = y1;
	    this.size = size;
	    this.speed = speed;
	    this.map = map;
	    this.sprite = document.getElementById(sprite);
	    
	    
    },
    
    draw: function() {
        var self = this;
        // console.log("draw function " + self.x1 + " " + self.y1);
	    var d = Math.floor(this.size/2);
	    var xcoord = (this.x1-d)-this.map.x*this.map.tileSize;
	    var ycoord = (this.y1-d)-this.map.y*this.map.tileSize;
	    this.map.context.drawImage(self.sprite, xcoord, ycoord);
	    
    },
    
    drawTiles: function() {
        if ((this.x1 == this.x2) && (this.y1 == this.y2)) {return 0;}
        var d = Math.floor(this.size/2);
        var canvas = document.getElementById('game-canvas');
        var width = canvas.width;
        var height = canvas.height;
        // four corners of the character's image
        var x1 = this.x1-d-this.map.x*this.map.tileSize;
        var x2 = this.x1+d-this.map.x*this.map.tileSize;
        var y1 = this.y1-d-this.map.y*this.map.tileSize;
        var y2 = this.y1+d-this.map.y*this.map.tileSize;
        if ((0<x1)&&(x1<width) && (0<y1)&&(y1<height)) { 
            this.map.findTile(x1, y1).draw(); 
        }
        if ((0<x2)&&(x2<width) && (0<y1)&&(y1<height)) { 
            this.map.findTile(x2, y1).draw(); 
        }
        if ((0<x1)&&(x1<height) && (0<y2)&&(y2<height)) { 
            this.map.findTile(x1, y2).draw(); 
        }
        if ((0<x2)&&(x2<height) && (0<y2)&&(y2<height)) { 
            this.map.findTile(x2, y2).draw(); 
        }
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
