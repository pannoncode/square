var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

class square {
    constructor(beginingX, beginingY, squareWidth, squareHeight, color) {
        this.beginingX = beginingX;
        this.beginingY = beginingY;
        this.squareWidth = squareWidth;
        this.squareHeight = squareHeight;
        this.color = color;
    }
    drawSquare() {
        context.fillStyle = this.color;
        context.fillRect(this.beginingX, this.beginingY, this.squareWidth, this.squareHeight);
        context.stroke();
    }
}

function draw() {
    var beginX = parseInt(prompt("Add meg a négyzet kezdési pontját az X tengelyen: "));
    var beginY = parseInt(prompt("Add meg a négyzet kezdési pontját az Y tengelyen: "));
    var sqWidth = parseInt(prompt("Add meg a négyzet szélességét: "));
    var sqHeight = parseInt(prompt("Add meg a négyzet magasságát: "));
    var color = String(prompt("Add meg a négyzet színét (angolul): "));

    var nSquare = new square(beginX, beginY, sqWidth, sqHeight, color);

    return nSquare.drawSquare();
};