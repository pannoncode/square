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

//*
function draw() {
    var nSquare = new square();
    nSquare.beginingX = parseInt(prompt("Add meg a négyzet kezdési pontját az X tengelyen: "));
    nSquare.beginingY = parseInt(prompt("Add meg a négyzet kezdési pontját az Y tengelyen: "));
    nSquare.squareWidth = parseInt(prompt("Add meg a négyzet szélességét: "));
    nSquare.squareHeight = parseInt(prompt("Add meg a négyzet magasságát: "));
    nSquare.color = String(prompt("Add meg a négyzet színét (angolul): "));
    nSquare.drawSquare();
};

//*/

/*
var nSquare = new square();
nSquare.beginingX = parseInt(prompt("Add meg a négyzet kezdési pontját az X tengelyen: "));
nSquare.beginingY = parseInt(prompt("Add meg a négyzet kezdési pontját az Y tengelyen: "));
nSquare.squareWidth = parseInt(prompt("Add meg a négyzet szélességét: "));
nSquare.squareHeight = parseInt(prompt("Add meg a négyzet magasságát: "));
nSquare.color = String(prompt("Add meg a négyzet színét (angolul): "));
nSquare.drawSquare();
//*/