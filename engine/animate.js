singleFrame = function(character, x1, y1, x2, y2, dx, dy, frameLength, finalFrame, frameCount) {
    console.log("singleFrame function" + " " + character.x + " " + character.y + " " + frameCount);
    character.x = 200;
    character.y = 200;
    console.log("singleFrame function" + " " + character.x + " " + character.y + " " + frameCount);
    if (frameCount=0) { 
        character.draw(context); 
        }
    else if (frameCount>=finalFrame) {
        character.x=x2;
        character.y=y2;
        character.draw(context);
        clearInterval();
        }
    else {
        character.x = Math.round(x1+(dx*(frameCount/finalFrame)));
        character.y = Math.round(y1+(dx*(frameCount/finalFrame)));
        character.draw(document.getElementById("game-canvas").getContext("2d"));
        }
    ++frameCount;
    
}






/*
// very basic and ugly animation system. maybe in the future try and have acceleration rather than just a set velocity.

animate = function(context, character, x2, y2) {
    
    var x1 = character.x;
    var y1 = character.y;
    var speed = character.speed;
    var dx = x2 - x1;
    var dy = y2 - y1;
    var dt = Math.floor(sqrt(pow(dx,2)+pow(dy,2)));
    var frameLength = 20;
    var frameCount = 0;
    var animTime = dt/character.speed;
    var finalFrame = Math.floor(animTime*1000/frameLength)
    var timeElapsed = 0;
    
    // i used all of these variables because I thought it would be easier than referencing them from character each time
    setInterval(instance(context, character, x1, y1, x2, y2, dx, dy, dt, speed, frameLength, finalFrame),frameLength);
}
    
instance = function(context, character, x1, y1, x2, y2, dx, dy, dt, speed, frameLength, finalFrame) {
    
    if (frameCount=0) { 
        character.draw(context); 
        }
    else if (framecount>=finalFrame) {
        character.x=x2;
        character.y=y2;
        character.draw(context);
        clearInterval();
        }
    else {
        character.x = Math.floor(x1+(dx*(frameCount/finalFrame)));
        character.y = Math.floor(y1+(dx*(frameCount/finalFrame)));
        character.draw(context);
        }
    ++frameCount;
    
}




    // this loop runs by setting the starting time, checking to make sure it is less/equal to end time, and then after each run, it resets the current time. Maybe just waiting like 20ms or something would be better but I thought there's no point while its in development.
    for (currentTime=startTime;currentTime<=endTime;currentTime=Date.getTime()) {
        
        // generates coordinates by checking how far along the animation is, dividing that by the total animation time to get a fraction, multiplying that to the distance to travel, and adding that to the starting distance.
        var runningTime = currentTime-startTime;
        var fractionOfDoneness = runningTime/animTime;
        // fx means "change in x for this frame only", same for y
        var fxc = fractionOfDoneness*dx;
        var fyc = fractionOfDoneness*dy;
        // find coordinates for this frame with starting coords and generated displacement
        var xCoord = Math.floor(x1+fx);
        var yCoord = Math.floor(y1+fy);
        
        cat.x=xcoord;
        cat.y=ycoord;
        cat.draw(context);
        
        // alternatively, this is the same but a little more convoluted. IDK if its faster. If it is use it I guess.
        // context.drawImage(this.sprite, Math.floor(x1+((currentTime-startTime)/animTime)*dx), Math.floor(y1+((currentTime-startTime)/animTime)*dy));
        
    }
    */
