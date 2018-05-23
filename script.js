let canvas = document.querySelector('#canvas');
let context = canvas.getContext('2d');

let xPos = 250;
let yPos = 250;

let player = context.rect(xPos, yPos, 50, 50);
context.stroke();


function move(e){

    //alert(e.keyCode);

    if(e.keyCode===39){
xPos+=50;
    }
    if(e.keyCode===37){
    xPos-=50;
    }
    if(e.keyCode===38){
        yPos-=50;
    }
    if(e.keyCode===40){
        yPos+=50;
    }
    canvas.width=canvas.width;
    let player = context.rect(xPos, yPos, 50, 50);
context.stroke();

}
setInterval(make_fire, 4000);


function make_fire(){
context.rect(0, 0, 50, 50);
context.stroke();
}

document.onkeydown = move;

