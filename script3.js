// se a velocidade > 0 desativas teclas
// quando mudo o pulo
let canvas = document.querySelector('#canvas');
let context = canvas.getContext('2d');

// imagens

let personagem = new Image();
personagem.src = "avatar.png";
let bg = new Image();
bg.src = "12.png"
let fg;
let fogoRight = new Image();
fogoRight.src = "barreira1.png"
let fogoLeft = new Image();
fogoLeft.src = "barreira.png";
let bg2 = new Image();
bg2.src = "bg2.png";


function aleatorio(min, max){
    return Math.floor(Math.random()*(max-min+1))+min;
}

let gap = 75;

let fogoCima = [];
let fogoLat = [];
let player = {
    x: 40, y:350,
    width: 50, height: 50
};
//esquerda
let madeira1 = {
    x: 20, y: 425,
    height: 3, width: 100,
}
let madeira2 = {
    x: 20, y: 325,
    height: 3, width: 100,
}
let madeira3 = {
    x: 20, y: 220,
    height: 3, width: 100,
}
let madeira4 = {
    x: 20, y: 120,
    height: 3, width: 100,
}
//direita
let madeira5 = {
    x: 425, y: 120,
    height: 3, width: 100,
}
let madeira6 = {
    x: 425, y: 220,
    height: 3, width: 100,
}
let madeira7 = {
    x: 425, y: 325,
    height: 3, width: 100,
}
let madeira8 = {
    x: 425, y: 425,
    height: 3, width: 100,
}
//centrais
let madeira9 = {
    x: 200, y: 472,
    height: 5, width: 150,
}
let madeira10 = {
    x: 200, y: 372,
    height: 5, width: 150,
}
let madeira11 = {
    x: 200, y: 272,
    height: 5, width: 150,
}
let madeira12 = {
    x: 200, y: 172,
    height: 5, width: 150,
}
let madeira13 = {
    x: 200, y: 72,
    height: 5, width: 150,
}


let madeiras = [];


fogoLat[0] = {
    x : 510,
    y: 20,
    width: aleatorio(20, 435)
}

fogoCima[0] = {left: {
    x : 20,
    y : 0,
    width: aleatorio(20, 435),
    height: 50
}, right: {
    x: 0, y: 0, height: 50 
}}
fogoCima[0].right.x = fogoCima[0].left.x + fogoCima[0].left.width + 75;
 
fogoCima[0].right.width = 530 - fogoCima[0].right.x;


window.onload = function() {
    document.addEventListener("keydown", keyPush);
    // document.keyPush = keyPush;
    document.addEventListener("keyup", keyUp);
    setInterval(game, 1000/20);
    
}
function primeira(){
    context.drawImage(fogoLeft, fogoCima[0].x, fogoCima[0].y, 550 / 2 - constante, 50);
    context.drawImage(fogoRight, fogoCima[0].x + 550 / 2 + constante, fogoCima[0].y, 550 / 2, 50);
    
}

function update(){
    velocity += gravity;
    player.y += velocity - jump
    
    if (velocity > 10){
        velocity = 10;
    }
    if (fireSpeed >= 10){
        fireSpeed = 10;
    }
    movePlayer();
}

function update2(){
    if (acelerationR < 1){
        acelerationR = 0;
    }
    if (acelerationR > 12){
        acelerationR = 12;
    }
    if (acelerationL < 1){
        acelerationL = 0;
    }
    if (acelerationL > 12){
        acelerationL = 12;
    }
    player.x += acelerationR;
    player.x -= acelerationL;
}
function jumpUpdate(){
    if (jump < 1){
        jump = 0;
    }
    jump -= 10
}

let tc = 550;
let limitDown = 530;
let limitLeft = 20;
let limitRight = 530;
let velocity = 0
let gravity = 0.5
let jump = 0;
let acelerationR = 0;
let acelerationL = 0;
let leftArm = player.x + 17;
let rArm = player.x + 35;
let center = aleatorio(95, 435);
let counter = 0;
let fireSpeed = 2

function game() {
    console.log(fireSpeed);
    let leftArm = player.x + 17;
    let rArm = player.x + 35;
    update();
    update2();
    jumpUpdate();	
    if(player.y + player.height>limitDown){
        player.y = limitDown - player.height;
        velocity = 0;
    }
    if(player.x + 15<limitLeft){
        player.x = limitLeft - 15;
        velocity = 0;
    }
    if(player.x + 35>limitRight){
        player.x = limitRight - 35;
        velocity = 0;
    }
    if(player.y < 10){
        player.y = 10;
    }
    if(player.y + player.height > madeira1.y && player.x + 15 <= madeira1.x + madeira1.width && player.y + player.height < madeira1.y + 21){
        player.y = madeira1.y + madeira1.height - player.height;
        velocity = 0;
    }
    if(player.y + player.height > madeira2.y && player.x + 15 <= madeira2.x + madeira2.width && player.y + player.height < madeira2.y + 21){
        player.y = madeira2.y + madeira2.height - player.height;
        velocity = 0;
    }
    if(player.y + player.height > madeira3.y && player.x + 15 <= madeira3.x + madeira3.width && player.y + player.height < madeira3.y + 21){
        player.y = madeira3.y + madeira3.height - player.height;
        velocity = 0;
    }
    if(player.y + player.height > madeira4.y && player.x + 15 <= madeira4.x + madeira4.width && player.y + player.height < madeira4.y + 21){
        player.y = madeira4.y + madeira4.height - player.height;
        velocity = 0;
    }
    if(player.y + player.height > madeira5.y && player.x + 15 <= madeira5.x + madeira5.width && player.y + player.height < madeira5.y + 21 && player.x + 28 > 425){
        player.y = madeira5.y + madeira5.height - player.height;
        velocity = 0;
    }
    if(player.y + player.height > madeira6.y && player.x + 15 <= madeira6.x + madeira6.width && player.y + player.height < madeira6.y + 21 && player.x + 28 > 425){
        player.y = madeira6.y + madeira6.height - player.height;
        velocity = 0;
    }
    if(player.y + player.height > madeira7.y && player.x + 15 <= madeira7.x + madeira7.width && player.y + player.height < madeira7.y + 21 && player.x + 28 > 425){
        player.y = madeira7.y + madeira7.height - player.height;
        velocity = 0;
    }
    if(player.y + player.height > madeira8.y && player.x + 15 <= madeira8.x + madeira8.width && player.y + player.height < madeira8.y + 21 && player.x + 28 > 425){
        player.y = madeira8.y + madeira8.height - player.height;
        velocity = 0;
    }
    if(player.y + player.height > madeira9.y && player.x + 15 <= madeira9.x + madeira9.width && player.y + player.height < madeira9.y + 20 && player.x + 31 > 200 && player.x + 11 < 350){
        player.y = madeira9.y + madeira9.height - player.height;
        velocity = 0;
    }
    if(player.y + player.height > madeira10.y && player.x + 15 <= madeira10.x + madeira10.width && player.y + player.height < madeira10.y + 21 && player.x + 31 > 200 && player.x + 11 < 350){
        player.y = madeira10.y + madeira10.height - player.height;
        velocity = 0;
    }
    if(player.y + player.height > madeira11.y && player.x + 15 <= madeira11.x + madeira11.width && player.y + player.height < madeira11.y + 21 && player.x + 31 > 200 && player.x + 11 < 350){
        player.y = madeira11.y + madeira11.height - player.height;
        velocity = 0;
    }
    if(player.y + player.height > madeira12.y && player.x + 15 <= madeira12.x + madeira12.width && player.y + player.height < madeira12.y + 21 && player.x + 31 > 200 && player.x + 11 < 350){
        player.y = madeira12.y + madeira12.height - player.height;
        velocity = 0;
    }
    if(player.y + player.height > madeira13.y && player.x + 15 <= madeira13.x + madeira13.width && player.y + player.height < madeira13.y + 21 && player.x + 31 > 200 && player.x + 11 < 350){
        player.y = madeira13.y + madeira13.height - player.height;
        velocity = 0;
        jump = 0;
    }
    
    acelerationR -=2
    acelerationL -=2
    
    context.drawImage(bg,0,0);
    
    /*for (let item of fogo) {
        fazer tarefa de posicionamento
        push({x: valor, y: valor})
    }

    
    for (let item of fogo) {
        context.drawImage(fogoLeft || fogoRight, item.x, item.y, width, height)
    }
    
    for (let item of fogo) {
        if (player.x > item.x && player.x < item.x + item.width && player.y > item.y && player.y < item.y + item.height)
        
    }
}
*/

for(let i = 0; i < fogoCima.length; i++){
    //1
    let leftFire = fogoCima[i].left;
    let rightFire = fogoCima[i].right;

    context.drawImage(fogoLeft, leftFire.x, leftFire.y, leftFire.width, leftFire.height);
    context.drawImage(fogoRight, rightFire.x, rightFire.y, rightFire.width, rightFire.height);

    fogoCima[i].right.y += fireSpeed;
    fogoCima[i].left.y += fireSpeed;

    
    //2
    if(fogoCima[i].left.y == 180 && counter <= 4){
        let novoFogo = {
            x: 20, y: 0, width: aleatorio(20, 435), height: 50
        }
        let novoFogo2 = {
                x: novoFogo.x + novoFogo.width + 75, y: 0, height: 50
        }
        novoFogo2.width = 530 - novoFogo2.x;
        
        fogoCima.push({left: novoFogo, right: novoFogo2});
        counter++;
        fireSpeed++;
    }  
    if(fogoCima[i].left.y == 182 && counter == 5){
        let novoFogo = {
            x: 20, y: 0, width: aleatorio(20, 435), height: 50
        }
        let novoFogo2 = {
                x: novoFogo.x + novoFogo.width + 75, y: 0, height: 50
        }
        novoFogo2.width = 530 - novoFogo2.x;
        
        fogoCima.push({left: novoFogo, right: novoFogo2});
        counter++;
        fireSpeed++;
    }
    if(fogoCima[i].left.y == 184 && counter == 6){
        let novoFogo = {
            x: 20, y: 0, width: aleatorio(20, 435), height: 50
        }
        let novoFogo2 = {
                x: novoFogo.x + novoFogo.width + 75, y: 0, height: 50
        }
        novoFogo2.width = 530 - novoFogo2.x;
        
        fogoCima.push({left: novoFogo, right: novoFogo2});
        counter++;
        fireSpeed++;
    }   
    if(fogoCima[i].left.y == 180 && counter >= 7){
        let novoFogo = {
            x: 20, y: 0, width: aleatorio(20, 435), height: 50
        }
        let novoFogo2 = {
                x: novoFogo.x + novoFogo.width + 75, y: 0, height: 50
        }
        novoFogo2.width = 530 - novoFogo2.x;
        
        fogoCima.push({left: novoFogo, right: novoFogo2});
        counter++;
        fireSpeed++;
    } 
    if(fogoCima[i].left.y == 181 && counter >= 7){
        let novoFogo = {
            x: 20, y: 0, width: aleatorio(20, 435), height: 50
        }
        let novoFogo2 = {
                x: novoFogo.x + novoFogo.width + 75, y: 0, height: 50
        }
        novoFogo2.width = 530 - novoFogo2.x;
        
        fogoCima.push({left: novoFogo, right: novoFogo2});
        counter++;
        fireSpeed++;
    }     
}
/*if(counter > 11){
    for(let i = 0; i < fogoLat.length; i++){
        context.drawImage()
    }
    
}*/

for(let linha of fogoCima) {
    let left = linha.left;
    if(leftArm > left.x && leftArm < left.x + left.width && player.y + 8 > left.y && player.y + 8 < left.y + left.height){
        location.reload();
    }

    let right = linha.right;
    if(leftArm > right.x && leftArm < right.x + right.width && player.y + 8 > right.y && player.y + 8 < right.y + right.height){
        location.reload();
    }
}




context.drawImage(bg2,0,0);
context.drawImage(personagem, player.x, player.y, player.width, player.height);
}

let movingLeft = false;
let movingRight = false;

function movePlayer() {
    
    if (movingLeft) {
        acelerationL += 5;
        player.x-= acelerationL;
    } else if (movingRight) {
        acelerationR += 5;
        player.x+= acelerationR;
    }
}

function keyPush(e) {
    if(velocity <= 1){
        if (e.keyCode === 37) {
            movingLeft = true;
        } else if (e.keyCode === 39) {
            movingRight = true;
        }
        
        if (e.keyCode === 32) {
            jump += 35
            player.y -= jump;
        }
        
        if (e.keyCode === 40) {
            player.y+=10;
        }
    }
}

function keyUp(e) {
    if (e.keyCode === 37) {
        movingLeft = false;
    } else if (e.keyCode === 39) {
        movingRight = false;
    }
}

