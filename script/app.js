var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.setAttribute("width", window.innerWidth + "px");
canvas.setAttribute("height", window.innerHeight + "px");


var caracter = {
  x: 0, 
  y: 0,
  w: 75,
  h:120,
  image:document.getElementById('bob'),
}

function DrawCaracter () {
 ctx.drawImage(caracter.image, caracter.x, caracter.y, caracter.w, caracter.h);
}


//----------------------------
//GAME LOOP
//----------------------------
function loop () {
  requestAnimationFrame(loop);
  
  
   
}
requestAnimationFrame(loop);
