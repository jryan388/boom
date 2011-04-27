function render(map, chars, frameLength) {
    var i;
    for (i=0;i<chars.length;i++) {
        chars[i].drawTiles(map);
        chars[i].move(frameLength);
        chars[i].draw(map.context);
    }
    
}
