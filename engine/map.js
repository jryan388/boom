Map = function(x, y, context, width, height, tileSize) {
    this.init(x, y, context, width, height, tileSize);
}

$.extend(Map.prototype, {
    // object variables
    x: null,
    y: null,
    context: null,
    tileSize: null,
    tiles: [],
    w: null,
    h: null,
    numTiles: null,
    materials: [],
    materialPics: [],
    
    init: function(x, x, context, width, height, tileSize, tileType) {
        this.x = x;
        this.y = y;
	    this.context = context;
	    this.tileSize = tileSize;
	    this.w = width/this.tileSize;
	    this.h = height/this.tileSize;
	
	    this.numTiles = this.w * this.h;
	    
	    
	    for(var i=0; i<this.numTiles; i++) {
	        var w = i%this.w;
	        var h = Math.floor(i/this.w);
	        var tile = new Tile(w, h, 0, tileSize, 0, this);
	        this.tiles.push(tile);
	    }
	    
	    this.materialPics[0] = document.getElementById("dirt" + this.tileSize);
	    this.materialPics[1] = document.getElementById("water" + this.tileSize);
	    this.materialPics[2] = document.getElementById("rock" + this.tileSize);
	    this.materialPics[3] = document.getElementById("mountain" + this.tileSize);
    },
    
    reMake:function(x, y) {
        this.x = x;
        this.y = y;
        for(var i=0; i<this.numTiles; i++) {
	        var tile = this.tiles[i];
	        var self = this;
	        tile.material = tile.getMat(self.x+tile.x, self.y+tile.y);
	    }
	    this.draw();
    },
    
    draw: function() {
        // this.context.clearRect(0, 0, this.w*this.tileSize, this.h*this.tileSize);
        for(var i=0; i<this.numTiles; i++) {
            this.tiles[i].draw(this);
        }
    },
    
    findTile: function(x, y) {
        // console.log("findTile function" + " x: " + x + " y: " + y);
        // tx and ty are for the tile's x and y coords on the map, not the pixel on the screen  
        var tx = Math.floor(x / this.tileSize);
        var ty = Math.floor(y / this.tileSize);
        var tileNum = (this.w*ty+tx);
        var tile = this.tiles[tileNum];
        
        return tile;
    },
});
