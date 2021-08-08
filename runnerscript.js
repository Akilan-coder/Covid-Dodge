
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let gamespeed = 5;

let status = "down";

let score = 0;
let highscore = localStorage.getItem("hiscore")||0;



let mscbg = new Image();
mscbg.src = "muscle.jpg";

let stream1 = new Image();
stream1.src = "bloodstream1.png";

let stream2 = new Image();
stream2.src = "bloodstream2.png";

let stream3 = new Image();
stream3.src = "bloodstream3.png";

let stream4 = new Image();
stream4.src = "bloodstream4.png";

let charup = new Image();
charup.src = "charup.png";

let chardown = new Image();
chardown.src = "chardown.png";

let bac = new Image();
bac.src = "bacteria.png"


let cdbg = new Image();
cdbg.src = "virus.png";




const player ={
    y: canvas.height - 250,
    dy: 5
}

let hole1 = {
    
    x: canvas.width - 100,
    dx:gamespeed
}

let hole2 = { 
    x: 150,
    dx:gamespeed
}


let enemy ={
    x: canvas.width-400,
    dx:gamespeed,
    y:200,
    dy:2
}

let Y = player.y+25;


function scoring() {
    ctx.fillStyle = "white";
    ctx.font = "30px Arial";
 ctx.fillText("SCORE:", 500, 50);

 ctx.fillText(score, 650,50);



 ctx.fillText("HIGH SCORE:", 900, 50);
 ctx.fillText(highscore, 1100, 50);

  score++;
}



let x12 = 1400;
let x13 = 1400;
let st22 = 1400;
let st32 = 1400;
let st42 = 1400;


let x5 = 0;
let xp = 0;
let st2 = 200;
let st3 = 600;
let st4 = 100;


function drawenemy(){
  

    ctx.drawImage(bac,enemy.x - 40, enemy.y -40,80,80);

    
}

let d = Math.floor(Math.sqrt(Math.pow(enemy.x-455,2) + Math.pow(enemy.y-Y,2)));
  





function drawbg() {
    
    

    ctx.drawImage(stream1,x5,0,canvas.width-500,canvas.height);
    ctx.drawImage(stream1,x12,0,canvas.width-500,canvas.height);  

    ctx.drawImage(stream2,st2,0,canvas.width-500,canvas.height-100);
    ctx.drawImage(stream2,st22,0,canvas.width-500,canvas.height-100);  

    ctx.drawImage(stream3,st3,0,canvas.width-500,canvas.height);
    ctx.drawImage(stream3,st32,0,canvas.width-500,canvas.height);  

    ctx.drawImage(stream4,st4,0,canvas.width-500,canvas.height);
    ctx.drawImage(stream4,st42,0,canvas.width-500,canvas.height);  

    ctx.fillStyle = "gray";
    ctx.fillRect(0,0,canvas.width,150);

    ctx.fillStyle = "gray";
    ctx.fillRect(0,canvas.height - 150,canvas.width,150);

    ctx.drawImage(mscbg,x13,canvas.height - 150,canvas.width,150);
    ctx.drawImage(mscbg,x13,0,canvas.width,150);
    ctx.drawImage(mscbg,xp,canvas.height - 150,canvas.width,150);
    ctx.drawImage(mscbg,xp,0,canvas.width,150);
    
}

function drawplayer() {



    if(status ==="up"){
        

     Y = player.y+25;

    

     ctx.drawImage(charup,400,player.y-50,150,150);
        

    

    }


    if(status ==="down"){
       
        Y = player.y+75;
      

        ctx.drawImage(chardown,400,player.y,150,150);

    }
}


function drawhole(){


    ctx.drawImage(cdbg,hole2.x,canvas.height - 175,150,170);
    ctx.drawImage(cdbg,hole1.x,10,150,170);

    
}
function update() {
    ctx.clearRect(0,0,canvas.width,canvas.height);


    d = Math.floor(Math.sqrt(Math.pow(enemy.x-455,2) + Math.pow(enemy.y-Y,2)));
    console.log(d);
        

    if(player.y === 150 && hole1.x === 400||player.y === 150 && hole1.x === 350){
       
        alert("game over!");
        location.reload();
        
highscore =localStorage.getItem("hiscore");


if(score>highscore){
    highscore = score;
    localStorage.setItem("hiscore", highscore);
}

    }

   else if(player.y === canvas.height - 250 && hole2.x === 400 ||player.y === canvas.height - 250 &&  hole2.x === 350){
      
        alert("game over!");
        location.reload();
        
highscore =localStorage.getItem("hiscore");
   

if(score>highscore){
    highscore = score;
    localStorage.setItem("hiscore", highscore);

}


 }

     if(d<55){
        console.log("yaaay");
        alert("game over!");
        location.reload();
        enemy.y = Y +100;


        highscore =localStorage.getItem("hiscore");
   

if(score>highscore){
    highscore = score;
    localStorage.setItem("hiscore", highscore);

}


    }

    
   

    drawbg();
    drawenemy(); 
    drawplayer();
    drawhole();
    scoring();

    hole2.x-= hole2.dx;
    hole1.x-= hole1.dx;

    enemy.x-=enemy.dx;
    enemy.y-=enemy.dy;

    if(enemy.y>= 180){
        enemy.dy = -1*enemy.dy;
    }

    if(enemy.y<=canvas.height-180){
        enemy.dy = -1*enemy.dy;
    }
    

    
    st2 -=gamespeed-1;
    st22 -=gamespeed-1;

    st3 -=gamespeed-1.5;
    st32 -=gamespeed-1.5;

    st4 -=gamespeed-2;
    st42 -=gamespeed-2;
  
    x5 -= gamespeed - 0.5;
    x12-=gamespeed - 0.5;


    x13-= gamespeed;
    xp -= gamespeed;

if(hole2.x === -150){
    hole2.x = canvas.width;
    
}

if(hole1.x === -150){
    hole1.x = canvas.width;
    
}

if(enemy.x ===-50){
    enemy.x = canvas.width+50;
}
if(x12 ===-1400){
    x12 = 1400;
}
if(x13 ===-1400){
    x13 = canvas.width;
}


if(x5 === -1400){
    x5 = 1400;
}
if(xp === -1400){
    xp = canvas.width;
}

if(st2 === -1400){
    st2 = 1400;
}
if(st22 === -1400){
    st22 = 1400;
}



if(st3 === -1400){
    st3 = 1400;
}
if(st32 === -1400){
    st32 = 1400;
}


if(st4 === -1400){
    st4 = 1400;
}
if(st42 === -1400){
    st42 = 1400;
}
 
    
    requestAnimationFrame(update);
 
}

function moveplayer(e) {
    console.log("entered");
    
    if(player.y === canvas.height - 250){
        
        player.y = 150;
        status = "up";
    }

   else if(player.y === 150){
       
        player.y = canvas.height - 250;
        status = "down";
    }

    
    
}

 






document.addEventListener('click',moveplayer);




update();

  







