//CANVAS SETUP

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.setAttribute("width", window.innerWidth + "px");
canvas.setAttribute("height", window.innerHeight + "px");


//CARACTER SETUP

var caracter = {
  x:0, 
  y:0,
  w:75,
  h:120,
  image:document.getElementById('bob'),
  draw:function(){
    ctx.drawImage(caracter.image, caracter.x, caracter.y, caracter.w, caracter.h);
  },
}


//CONTROLS AND MOVEMENT
var movement = {
  left:false, 
  right:false,
  up:false,
  down:false,
  move:function(){
    if(movement.left===true){caracter.x-=5;}
    if(movement.right===true){caracter.x+=5;}
    if(movement.up===true){caracter.y-=5;}
    if(movement.down===true){caracter.y+=5;}
  },
}
document.body.onkeydown = function(event){
  var k = event.key;
  if(k==="ArrowLeft" || k==="a"){movement.left=true;}
  if(k==="ArrowRight" || k==="d"){movement.right=true;}
  if(k==="ArrowUp" || k==="w"){movement.up=true;}
  if(k==="ArrowDown" || k==="s"){movement.down=true;}
}

//GAME LOOP

function loop () {
  requestAnimationFrame(loop);
  
  
   
}
requestAnimationFrame(loop);
