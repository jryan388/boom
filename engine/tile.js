Tile = function(x, y, z, size, material) {
    this.init(x,y,z, size, material);
}

$.extend(Tile.prototype, {
    // object variables
    x: null,
    y: null,
    z: null,
    size: null,
    material:"dirt",
    image:null,
    
    init: function(x,y,z, size, material) {
	    // do initialization here
	    this.x = x;
	    this.y = y;
	    this.z = z;
	    this.size = size;
	    this.material = material;
	    this.image = new Image();
	    
    },
    
    draw: function(map) {
        
        //map.context.clearRect(this.x, this.y, this.size, this.size);
        
        var self = this;
        
        var pic = document.getElementById(map.materials[this.material] + this.size);
        map.context.drawImage(pic, self.x, self.y);
        
        //var pic = new Image();
	    //pic.src = map.materialSrc[self.material]
	    //pic.onload = function() { 
	    //    map.context.drawImage(pic, self.x, self.y); 
	    //};
	    
	    //console.log(map.materialPics[self.material]);
	    //map.context.drawImage(map.materialPics[self.material], self.x, self.y);
	    
	    //this.image.src = map.materialSrc[self.material];
	    
	    
    },
    

});
