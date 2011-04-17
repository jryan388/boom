
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

    
    var editMaterial = "dirt";
    
    
    $("#game-canvas").click(function(event) {
	
	    var msg = "Handler for .click() called at ";
	    x = (event.pageX-xoff);
    	y = (event.pageY-yoff);
	    msg += x + ", " + y;
    	console.log(msg + "         material = " + editMaterial);
    	
    	var currentTile = map.findTile(x, y);
    	
	    currentTile.material = editMaterial;
	    currentTile.draw(context);
	    
    });
    
    $(document).keypress(function(e) { 

        var keyPressed = (e.keyCode ? e.keyCode : e.which);
        switch(keyPressed) {
            // hotkeys for changing material
            case 100: // d
                console.log("Handler for .keypress() for d called");
                editMaterial = "dirt";
                break;
            case 114: // r
                console.log("Handler for .keypress() for r called");
                editMaterial = "rocks";
                break;
            case 119: // w
                console.log("Handler for .keypress() for w called");
                editMaterial = "water";
                break;
            case 109: // m
                console.log("Handler for .keypress() for m called");
                editMaterial = "mountain";
                break;
            default:
                console.log("Keycode " + keyPressed + " pressed");
                break;
                
            // hotkey for randomizing map
            case 122: //z
                map.randomize(2, 2, 50);
                break;
        }
    });
    
});
