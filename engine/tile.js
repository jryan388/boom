Tile = function(x, y, z, size, material, map) {
    this.init(x,y,z, size, material, map);
}

$.extend(Tile.prototype, {
    // object variables
    x: null,
    y: null,
    z: null,
    size: null,
    material:0,
    map:null,
    
    init: function(x,y,z, size, material, map) {
	    // do initialization here
	    this.x = x;
	    this.y = y;
	    this.z = z;
	    this.size = size;
	    this.map = map;
	    this.material = this.getMat(this.x+map.x, this.y+map.y);
	    
    },
    
    draw: function() {
    
        var map = this.map
        
        map.context.clearRect(this.x*this.size, this.y*this.size, this.size, this.size);
        var self = this;
        
        map.context.drawImage(map.materialPics[self.material], self.x*self.size, self.y*self.size);
        
    },
    
    getMat: function(x, y) {
        var sinX = Math.sin(x/5);
        var cosY = Math.cos(y/5);
        var product = sinX*cosY;
        var resultMat = (product > 0) ? 1 : 0;
        return resultMat;
    }

});
