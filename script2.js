let canvas = document.querySelector('#canvas');
let context = canvas.getContext('2d');

// imagens

let personagem = new Image();
personagem.src = "avatar.png";
let bg;
let fg;
let fogoRight;
let fogoLeft;

function aleatorio(min, max){
    return Math.floor(Math.random()*(max-min+1))+min;
  }

function spawn1(){
    context.fillStyle = "red";
    context.fillRect(cPx, cPy, 550, 50);
    console.log("aconteceu");
}

    function spawn(){

            context.fillStyle = "red";
            context.fillRect(0, 0, 50, 50);

            context.fillStyle = "red";
            context.fillRect(50, 0, 50, 50);

            context.fillStyle = "red";
            context.fillRect(100, 0, 50, 50);

            context.fillStyle = "red";
            context.fillRect(150, 0, 50, 50);

            context.fillStyle = "red";
            context.fillRect(200, 0, 50, 50);

            context.fillStyle = "red";
            context.fillRect(250, 0, 50, 50);

            context.fillStyle = "red";
            context.fillRect(300, 0, 50, 50);

            context.fillStyle = "red";
            context.fillRect(350, 0, 50, 50);

            context.fillStyle = "red";
            context.fillRect(400, 0, 50, 50);

            context.fillStyle = "red";
            context.fillRect(450, 0, 50, 50);

            context.fillStyle = "red";
            context.fillRect(500, 0, 50, 50);
        }
    


window.onload = function() {
    document.addEventListener("keydown", keyPush);
    setInterval(game, 1000/20);
    }

    let pPx = 250;
    let pPy = 250;
    let cPx = 0;
    let cPy = 0;
    let gs = 550;
    let tc = 550;

function game() {	
    if(pPx<0) {
    pPx= tc-1;
}
if(pPx>tc-1) {
    pPx= 0;
}
if(pPy<0) {
    pPy= tc-1;
}
if(pPy>tc-1) {
    pPy= 0;
}

    context.fillStyle = "red";
    context.fillRect(0, 0,)

    context.fillStyle = "#000";
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.drawImage(personagem, pPx, pPy, 50, 50);
}
function keyPush(e) {
	switch(e.keyCode) {
		case 37:
			pPx-=10;
			break;
		case 38:
			pPy-=10;
			break;
		case 39:
			pPx+=10
			break;
		case 40:
			pPy+=10;
			break;
	}
}
