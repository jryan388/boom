function render(map, chars, frameLength) {

    map.draw();
    
    var i;
    for (i=0;i<chars.length;i++) {
        chars[i].move(frameLength);
        chars[i].draw(map.context);
    }
    
    
}
