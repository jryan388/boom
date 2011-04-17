Character = function(x, y, size, speed, sprite) {
    this.init(x, y, size, speed, sprite);
}

$.extend(Char.prototype, {
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
	    this.sprite = sprite;
    },
    
    draw: function(context) {
	    var d = Math.floor(this.size/2);
	    var xcoord = this.x-d;
	    var ycoord = this.y-d;
        var src = this.sprite;
        var pic = new Image();
        pic.src = src;
        pic.onload = function() {
	    context.drawImage(pic, xcoord, ycoord);
        };
	    
    }

});
