function render(chars, frameLength) {
    var i;
    for (i=0;i<chars.length;i++) {
        chars[i].drawTiles();
        chars[i].move(frameLength);
        chars[i].draw();
    }
    
}
