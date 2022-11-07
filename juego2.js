window.onload = updateClock;

var tiempo = 20;

function updateClock() {
  document.getElementById("cuentaAtras").innerHTML = tiempo;
  if(tiempo<=0){
	window.location.href = "muerte.html";
  }else{
    tiempo-=1;
    setTimeout("updateClock()",60000);
  }
}

$("#pista1").addEventListener("click",function(){
    alert("El orden esta en código morce en las estanterias"); 
 });

 $("#pista2").addEventListener("click",function(){
    alert("1. Bidon + espejo \n 2. Manguera \n 3. Letras en los sprais \n 4. Cerilla + vela"); 
 });

 $("#codigo").addEventListener("click",function(){
    var codigo = prompt("Si quieres salir antes de que te descubran introduzca el codigo de la puerta:") 
    codigo = codigo.toUpperCase().trim();
    if(codigo == "36CUADRADO5"){
        window.location.href = "victoria.html";
    }else{
        tiempo-=1;
        document.getElementById("cuentaAtras").innerHTML = tiempo;
        alert("No has introducido bien el codigo")
		if(tiempo<=0){
			window.location.href = "muerte.html";
		}
    }
 });

// Clase para gestionar el movimiento de cualquier elemento
movimiento=function(div)
{
	// Estas variables obtienen la diferencia en pixels entre el punto del raton
	// pulsado dentro del div y el top y left del elemento. Es para que cuando 
	// realizemos el movimiento, el cursor del raton siempre este en la misma
	// posición dentro del div que mueve.
	difX=0;
	difY=0;
 
	// Creamos el evento en el div para controlar la pulsación sobre el elemento
	// cuando se pulsa sobre el elemento se ejecuta la funcion inicio()
	div.addEventListener('mousedown',inicio,false);
 
	// Iniciamos el arrastre
	function inicio(e)
	{
		// Obtenemos la posición del raton
		var eX=e.pageX;
		var eY=e.pageY;
		// Obtenemos los valores de la posicion left y top del elemento
		var oX=parseInt(div.style.left);
		var oY=parseInt(div.style.top);
		// Calculamos la diferencia entre la posicion del div con la del raton.
		difX=oX-eX;
		difY=oY-eY;
 
		// Cremos los eventos mousemove y mouseup
		document.addEventListener('mousemove',mover,false);
		document.addEventListener('mouseup',soltar,false);
	}
 
	// Movemos el elemento por la pantalla cada vez que se mueve el cursor
	function mover(e)
	{
		var tY=e.pageY+difY+'px';
		var tX=e.pageX+difX+'px'
		div.style.top=tY;
		div.style.left=tX;
	}
 
	// Funcion que se ejecuta el botón del ratón
	function soltar(e)
	{
		// Eliminamos los eventos creados en la funcion inicio
		document.removeEventListener('mousemove',mover,false);
		document.removeEventListener('mouseup',soltar,false);
	}
}
 
// Inicializamos el movimiento del div con id "arrastrar"
var recu1=new movimiento(document.getElementById("arrastrar"));


function $(selector){
    return document.querySelector(selector);
}