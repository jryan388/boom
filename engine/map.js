Map = function(context, width, height, tileSize) {
    this.init(context, width, height, tileSize);
}

$.extend(Map.prototype, {
    // object variables
    context: null,
    tileSize: null,
    tiles: [],
    w: null,
    h: null,
    numTiles: null,
    
    init: function(context, width, height, tileSize, tileType) {
	    this.context = context;
	    this.tileSize = tileSize;
	    this.w = width/this.tileSize;
	    this.h = height/this.tileSize;
	
	    this.numTiles = this.w * this.h;
	    
	    
	    
	    
	    // var logTime = function() { var date = new Date; var time = date.getTime(); console.log(time);}
	    
	    for(var i=0; i<this.numTiles; i++) {
	        var w = i%this.w;
	        var h = Math.floor(i/this.w);
	        var tile = new Tile(w*this.tileSize, h*this.tileSize, 0, tileSize, "dirt");
	        this.tiles.push(tile);
	        // logTime();
	    }
	    
    },
    
    draw: function() {
	    for(var i=0; i<this.numTiles; i++) {
	        this.tiles[i].draw(this.context);
	    }
    },
    
    findTile: function(x, y) {
        console.log("findTile function" + " x: " + x + " y: " + y);
        // tx and ty are for the tile's x and y coords on the map, not the pixel on the screen  
        var tx = Math.floor(x / this.tileSize);
        var ty = Math.floor(y / this.tileSize);
        
        var tileNum = (this.w*ty+tx);
        var tile = this.tiles[tileNum];
        
        return tile;
    },
    
    randomize: function(numRivers, numMountains, percentRocks) {
        console.log("randomMap function" + numRivers + " " + numMountains + " " + percentRocks);
        for (i = 0; i < numRivers; ++i) {
            
            // randAxis is 0 for x, 1 for y
            var randAxis = Math.floor(Math.random()*2);
            var randStartPixel = (randAxis == 0) ? Math.floor(Math.random()*(this.w*this.tileSize+1)) : Math.floor(Math.random()*(this.h*this.tileSize+1));
            
            // startile is random tile on either the x or y axis
            console.log(randAxis + " " + randStartPixel);
            
            
            var startTile = (randAxis == 1) ? this.findTile(randStartPixel, 1) : this.findTile(1, randStartPixel);
            startTile.material = "water";
            startTile.draw(this.context);
        }
    }
});
