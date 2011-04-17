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
	    
    },
    
    draw: function(context) {
    
        context.clearRect(this.x, this.y, this.size, this.size);
        
        var pic = new Image();
	    var x = this.x;
	    var y = this.y;
	    
        switch(this.size) {
            case 20:
                switch (this.material) {
                    case "rocks":
                        pic.src = "pics/rock20.png"
                        break;
                    case "water":
                        pic.src = "pics/water20.png"
                        break;
                    case "mountain":
                        pic.src = "pics/mountain20.png"
                        break;
                    case "dirt":
                        // console.log("perlin");
                        // $(this.image).perlin({tileSize: 20});
                        pic.src = "pics/dirt20.png"
                        // console.log(this.image);
                        break;
                        
                }
                break;
        }
	    pic.onload = function() {context.drawImage(pic, x, y);};
	    console.log("lksdfjlskdf");
	    
    },
    

});
