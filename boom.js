var x = null;
var y = null;
var xoff = null;
var yoff = null;

// var logTime = function() { var date = new Date; var time = date.getTime(); console.log(time);}
// logTime();


// create character array and add characters





$(function() {
    xoff = $("#game-canvas").offset().left;
    yoff = $("#game-canvas").offset().top;

    var canvas = $("#game-canvas")[0];
    var context = $("#game-canvas")[0].getContext("2d");
    
    var fps = 60;
    var frameLength = Math.round(1000/fps);
    
    // initialize map
    var map = new Map(context, canvas.width, canvas.height, 20);
    var chars = new Array();
    map.findTile(200,200).material = 1;
    
    // initialize new character cat, in location 50,50 with 20 pix^2 as size, 200 pixels/sec speed, and path to sprite
    var cat = new Character(50, 50, 20, 200, "knight-small");
    chars.push(cat);
    
    // render!
    $(window).load(function() { map.draw(); } );
    
    setInterval(function() {render(map, chars, frameLength)}, frameLength);
    
    
    
    $("#game-canvas").click(function(event) {
        
	    // context.clearRect(x-10, y-10, 20, 20);
        var msg = "Handler for .click() called at ";
        x = (event.pageX-xoff);
	    y = (event.pageY-yoff);
        msg += x + ", " + y;
	    console.log(msg);
	    cat.x2=x;
	    cat.y2=y;
	
    });
    
    
    
});
