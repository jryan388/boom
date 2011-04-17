
var x = null;
var y = null;
var xoff = null;
var yoff = null;

$(function() {
    xoff = $("#game-canvas").offset().left;
    yoff = $("#game-canvas").offset().top;

    var canvas = $("#game-canvas")[0];
    var context = $("#game-canvas")[0].getContext("2d");
    
    // initialize map
    var map = new Map(context, canvas.width, canvas.height, 20);
    map.draw();
    
    var tile = findTile(50,20,0,map.tileSize,"black");
    tile.draw(context);
    
    // initialize new character cat, in location 50,50 with 20 pix^2 as size, 100 pixels/sec speed, and path to sprite
    var cat = new Character(50, 50, 20, 100, "pics/knight-small.png");
    
    
    $("#game-canvas").click(function(event) {
        
	    context.clearRect(x-10, y-10, 20, 20);
	
        var msg = "Handler for .click() called at ";
        x = (event.pageX-xoff);
	    y = (event.pageY-yoff);
        msg += x + ", " + y;
	    console.log(msg);
	    clearInterval();
	    //cat.x=x;
	    //cat.y=y;
        //cat.draw(context);
        cat.draw(context);
	
    });
    
});
