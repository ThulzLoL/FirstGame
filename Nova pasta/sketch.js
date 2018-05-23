var player;
function setup() {
    let canvas = createCanvas(550, 550);
    canvas.parent('canvascontainer');
    player = new Player();
}

function draw() {
    background(0);
    player.show();
}