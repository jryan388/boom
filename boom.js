var x = null;
var y = null;
var xoff = null;
var yoff = null;

$(function() {
    xoff = $("#game-canvas").offset().left;
    yoff = $("#game-canvas").offset().top;

    var canvas = $("#game-canvas")[0];
    var context = $("#game-canvas")[0].getContext("2d");
    
    var fps = 60;
    var frameLength = Math.round(1000/fps);
    
    // initialize map
    var map = new Map(0, 0, context, canvas.width, canvas.height, 20);
    var chars = new Array();
    
    // initialize new character cat, in location 50,50 with 20 pix^2 as size, 200 pixels/sec speed, path to sprite, and map
    var cat = new Character(50, 50, 20, 200, "knight-small", map);
    chars.push(cat);
    
    // render!
    $(window).load(function() { map.draw(); } );
    
    setInterval(function() {render(chars, frameLength)}, frameLength);
    
    
    
    $("#game-canvas").click(function(event) {
        
	    // context.clearRect(x-10, y-10, 20, 20);
        var msg = "Handler for .click() called at ";
        x = (event.pageX-xoff);
	    y = (event.pageY-yoff);
        msg += x + ", " + y;
	    console.log(msg);
	    cat.x2=x+map.x*map.tileSize;
	    cat.y2=y+map.y*map.tileSize;
	   
	
    });
    
    
    $(document).keypress(function(e) { 

        var keyPressed = (e.keyCode ? e.keyCode : e.which);
        console.log(e.keyCode);
        switch(keyPressed) {
            // hotkeys for changing material
            case 97: // a
                console.log("Handler for .keypress() for a called");
                map.reMake(map.x-1, map.y);
                break;
            case 100: // d
                console.log("Handler for .keypress() for d called");
                map.reMake(map.x+1, map.y);
                break;
            case 115: // s
                console.log("Handler for .keypress() for d called");
                map.reMake(map.x, map.y+1);
                break;
            case 119: // w
                console.log("Handler for .keypress() for d called");
                map.reMake(map.x, map.y-1);
                break;
        }
    });
    
    
    
});
