var parejasCons = 0;
var click = 0;
var numeroClick = 0;
var imageABoton = [];
var pulsarUno = false;
var pulsarDos = false;
var pulsarTres = false;
var pulsarCuatro = false;
var pulsarCinco = false;
var pulsarSeis = false;
var pulsarSiete = false;
var pulsarOcho = false;
var pulsarNueve = false;
var pulsarDiez = false;
var pulsarOnce = false;
var pulsarDoce = false;
var pulsarTrece = false;
var pulsarCatorce = false;
var pulsarQuince = false;
var pulsarDieciseis = false;
var pulsarDiecisiete = false;
var pulsarDieciocho = false;


$("#uno").addEventListener("click", function(){//Pareja con el 5
    var contador = document.getElementById("contador");
    numeroClick++;
    pulsarUno = true;
    var uno = document.querySelector("#uno");
    imageABoton.push("uno");
    uno.disabled = true;
    uno.setAttribute("type","image");
    uno.setAttribute("src","fotos/uno.jpg");
    contador.setAttribute("value","Parejas conseguidas ="+parejasCons+"| Clicks = "+numeroClick);
    if(numeroClick % 2 == 0){
        borrarLista();  
        if(pulsarUno && pulsarCinco){
            parejasCons++;
            contador.setAttribute("value","Parejas conseguidas ="+parejasCons+"| Clicks = "+numeroClick);
            setTimeout(function(){
                uno.classList.add("desaparece");
                cinco.classList.add("desaparece");    
            },500);
        }
        inicializarBotones();
    }
});

$("#cinco").addEventListener("click", function(){//Pareja con el 1
    var contador = document.getElementById("contador");
    numeroClick++;
    pulsarCinco = true;
    var cinco = document.querySelector("#cinco");
    imageABoton.push("cinco");
    cinco.setAttribute("type","image");
    cinco.disabled = true;
    cinco.setAttribute("src","fotos/uno.jpg");
    contador.setAttribute("value","Parejas conseguidas ="+parejasCons+"| Clicks = "+numeroClick);
    if(numeroClick % 2 == 0){
        borrarLista();  
        if(pulsarUno && pulsarCinco){
            parejasCons++;  
            contador.setAttribute("value","Parejas conseguidas ="+parejasCons+"| Clicks = "+numeroClick);
            setTimeout(function(){
                uno.classList.add("desaparece");
                cinco.classList.add("desaparece");    
            },500);
        }
        inicializarBotones();
    }
});

$("#dos").addEventListener("click", function(){//Pareja con el 6
    var contador = document.getElementById("contador");
    numeroClick++;
    pulsarDos = true;
    var dos = document.querySelector("#dos");
    imageABoton.push("dos");
    dos.setAttribute("type","image");
    dos.disabled = true;
    dos.setAttribute("src","fotos/dos.jpg");
    contador.setAttribute("value","Parejas conseguidas ="+parejasCons+"| Clicks = "+numeroClick);
    if(numeroClick % 2 == 0){
        borrarLista();
        if(pulsarDos && pulsarSeis){
            parejasCons++;
            contador.setAttribute("value","Parejas conseguidas ="+parejasCons+"| Clicks = "+numeroClick);
            setTimeout(function(){
                dos.classList.add("desaparece");
                seis.classList.add("desaparece");    
            },300);
        }
        inicializarBotones();
    }
});

$("#seis").addEventListener("click", function(){//Pareja con el 2
    var contador = document.getElementById("contador");
    numeroClick++;
    pulsarSeis = true;
    var seis = document.querySelector("#seis");
    imageABoton.push("seis");
    seis.setAttribute("type","image");
    seis.disabled = true;
    seis.setAttribute("src","fotos/dos.jpg");
    contador.setAttribute("value","Parejas conseguidas ="+parejasCons+"| Clicks = "+numeroClick);
    if(numeroClick % 2 == 0){
        borrarLista();  
        if(pulsarDos && pulsarSeis){
            parejasCons++;
            contador.setAttribute("value","Parejas conseguidas ="+parejasCons+"| Clicks = "+numeroClick);
            setTimeout(function(){
                dos.classList.add("desaparece");
                seis.classList.add("desaparece");    
            },300);
        }
        inicializarBotones();
    }
});
$("#tres").addEventListener("click", function(){//Pareja con el 4
    var contador = document.getElementById("contador");
    numeroClick++;
    pulsarTres = true;
    var tres = document.querySelector("#tres");
    imageABoton.push("tres");
    tres.setAttribute("type","image");
    tres.disabled = true;
    tres.setAttribute("src","fotos/tres.jpg");
    contador.setAttribute("value","Parejas conseguidas ="+parejasCons+"| Clicks = "+numeroClick);
    if(numeroClick % 2 == 0){
        borrarLista();
        if(pulsarTres && pulsarCuatro){
            parejasCons++;
            contador.setAttribute("value","Parejas conseguidas ="+parejasCons+"| Clicks = "+numeroClick);
            setTimeout(function(){
                tres.classList.add("desaparece");
                cuatro.classList.add("desaparece");    
            },300);
        }
        inicializarBotones();
    }
});

$("#cuatro").addEventListener("click", function(){//Pareja con el 3
    var contador = document.getElementById("contador");
    numeroClick++;
    pulsarCuatro = true;
    var cuatro = document.querySelector("#cuatro");
    imageABoton.push("cuatro");
    cuatro.setAttribute("type","image");
    cuatro.disabled = true;
    cuatro.setAttribute("src","fotos/tres.jpg");
    contador.setAttribute("value","Parejas conseguidas ="+parejasCons+"| Clicks = "+numeroClick);
    if(numeroClick % 2 == 0){
        borrarLista();  
        if(pulsarTres && pulsarCuatro){
            parejasCons++;
            contador.setAttribute("value","Parejas conseguidas ="+parejasCons+"| Clicks = "+numeroClick);
            setTimeout(function(){
                cuatro.classList.add("desaparece");
                tres.classList.add("desaparece");    
            },300);
        }
        inicializarBotones();
    }
});

$("#siete").addEventListener("click", function(){//Pareja con el 15
    var contador = document.getElementById("contador");
    numeroClick++;
    pulsarSiete = true;
    var siete = document.querySelector("#siete");
    imageABoton.push("siete");
    siete.disabled = true;
    siete.setAttribute("type","image");
    siete.setAttribute("src","fotos/cuatro.jpg");
    contador.setAttribute("value","Parejas conseguidas ="+parejasCons+"| Clicks = "+numeroClick);
    if(numeroClick % 2 == 0){
        borrarLista();  
        if(pulsarSiete && pulsarQuince){
            parejasCons++;
            contador.setAttribute("value","Parejas conseguidas ="+parejasCons+"| Clicks = "+numeroClick);
            setTimeout(function(){
                siete.classList.add("desaparece");
                quince.classList.add("desaparece");    
            },100);
        }
        inicializarBotones();
    }
});

$("#ocho").addEventListener("click", function(){//Pareja con el 12
    var contador = document.getElementById("contador");
    numeroClick++;
    pulsarOcho = true;
    var ocho = document.querySelector("#ocho");
    imageABoton.push("ocho");
    ocho.setAttribute("type","image");
    ocho.disabled = true;
    ocho.setAttribute("src","fotos/cinco.jpg");
    contador.setAttribute("value","Parejas conseguidas ="+parejasCons+"| Clicks = "+numeroClick);
    if(numeroClick % 2 == 0){
        borrarLista();  
        if(pulsarOcho && pulsarDoce){
            parejasCons++;
            contador.setAttribute("value","Parejas conseguidas ="+parejasCons+"| Clicks = "+numeroClick);
            setTimeout(function(){
                ocho.classList.add("desaparece");
                doce.classList.add("desaparece");    
            },100);
        }
        inicializarBotones();
    }
});

$("#nueve").addEventListener("click", function(){//Pareja con el 11
    var contador = document.getElementById("contador");
    numeroClick++;
    pulsarNueve = true;
    var nueve = document.querySelector("#nueve");
    imageABoton.push("nueve");
    nueve.setAttribute("type","image");
    nueve.disabled = true;
    nueve.setAttribute("src","fotos/seis.jpg");
    contador.setAttribute("value","Parejas conseguidas ="+parejasCons+"| Clicks = "+numeroClick);
    if(numeroClick % 2 == 0){
        borrarLista();
        if(pulsarNueve && pulsarOnce){
            parejasCons++;
            contador.setAttribute("value","Parejas conseguidas ="+parejasCons+"| Clicks = "+numeroClick);
            setTimeout(function(){
                nueve.classList.add("desaparece");
                once.classList.add("desaparece");    
            },100);
        }
        inicializarBotones();
    }
});

$("#diez").addEventListener("click", function(){//Pareja con el 18
    var contador = document.getElementById("contador");
    numeroClick++;
    pulsarDiez = true;
    var diez = document.querySelector("#diez");
    imageABoton.push("diez");
    diez.setAttribute("type","image");
    diez.disabled = true;
    diez.setAttribute("src","fotos/siete.jpg");
    contador.setAttribute("value","Parejas conseguidas ="+parejasCons+"| Clicks = "+numeroClick);
    if(numeroClick % 2 == 0){
        borrarLista();  
        if(pulsarDiez && pulsarDieciocho){
            parejasCons++;
            contador.setAttribute("value","Parejas conseguidas ="+parejasCons+"| Clicks = "+numeroClick);
            setTimeout(function(){
                diez.classList.add("desaparece");
                dieciocho.classList.add("desaparece");    
            },100);
        }
        inicializarBotones();
    }
});
$("#once").addEventListener("click", function(){//Pareja del 9
    var contador = document.getElementById("contador");
    numeroClick++;
    pulsarOnce = true;
    var once = document.querySelector("#once");
    imageABoton.push("once");
    once.setAttribute("type","image");
    once.disabled = true;
    once.setAttribute("src","fotos/seis.jpg");
    contador.setAttribute("value","Parejas conseguidas ="+parejasCons+"| Clicks = "+numeroClick);
    if(numeroClick % 2 == 0){
        borrarLista();
        if(pulsarOnce && pulsarNueve){
            parejasCons++;
            contador.setAttribute("value","Parejas conseguidas ="+parejasCons+"| Clicks = "+numeroClick);
            setTimeout(function(){
                nueve.classList.add("desaparece");
                once.classList.add("desaparece");    
            },100);
        }
        inicializarBotones();
    }
});

$("#doce").addEventListener("click", function(){//Parreja con el 8
    var contador = document.getElementById("contador");
    numeroClick++;
    pulsarDoce = true;
    var doce = document.querySelector("#doce");
    imageABoton.push("doce");
    doce.setAttribute("type","image");
    doce.disabled = true;
    doce.setAttribute("src","fotos/cinco.jpg");
    contador.setAttribute("value","Parejas conseguidas ="+parejasCons+"| Clicks = "+numeroClick);
    if(numeroClick % 2 == 0){
        borrarLista();  
        if(pulsarDoce && pulsarOcho){
            parejasCons++;
            contador.setAttribute("value","Parejas conseguidas ="+parejasCons+"| Clicks = "+numeroClick);
            setTimeout(function(){
                doce.classList.add("desaparece");
                ocho.classList.add("desaparece");    
            },100);
        }
        inicializarBotones();
    }
});

$("#trece").addEventListener("click", function(){//Pareja con el 16
    var contador = document.getElementById("contador");
    numeroClick++;
    pulsarTrece = true;
    var trece = document.querySelector("#trece");
    imageABoton.push("trece");
    trece.disabled = true;
    trece.setAttribute("type","image");
    trece.setAttribute("src","fotos/ocho.jpg");
    contador.setAttribute("value","Parejas conseguidas ="+parejasCons+"| Clicks = "+numeroClick);
    if(numeroClick % 2 == 0){
        borrarLista();  
        if(pulsarTrece && pulsarDieciseis){
            parejasCons++;
            contador.setAttribute("value","Parejas conseguidas ="+parejasCons+"| Clicks = "+numeroClick);
            setTimeout(function(){
                trece.classList.add("desaparece");
                dieciseis.classList.add("desaparece");    
            },100);
        }
        inicializarBotones();
    }
});

$("#catorce").addEventListener("click", function(){//Pareja con el 17
    var contador = document.getElementById("contador");
    numeroClick++;
    pulsarCatorce = true;
    var catorce = document.querySelector("#catorce");
    imageABoton.push("catorce");
    catorce.setAttribute("type","image");
    catorce.disabled = true;
    catorce.setAttribute("src","fotos/nueve.jpg");
    contador.setAttribute("value","Parejas conseguidas ="+parejasCons+"| Clicks = "+numeroClick);
    if(numeroClick % 2 == 0){
        borrarLista();  
        if(pulsarCatorce && pulsarDiecisiete){
            parejasCons++;
            contador.setAttribute("value","Parejas conseguidas ="+parejasCons+"| Clicks = "+numeroClick);
            setTimeout(function(){
                catorce.classList.add("desaparece");
                diecisiete.classList.add("desaparece");    
            },100);
        }
        inicializarBotones();
    }
});

$("#quince").addEventListener("click", function(){//Pareja con el 7
    var contador = document.getElementById("contador");
    numeroClick++;
    pulsarQuince = true;
    var quince = document.querySelector("#quince");
    imageABoton.push("quince");
    quince.setAttribute("type","image");
    quince.disabled = true;
    quince.setAttribute("src","fotos/cuatro.jpg");
    contador.setAttribute("value","Parejas conseguidas ="+parejasCons+"| Clicks = "+numeroClick);
    if(numeroClick % 2 == 0){
        borrarLista();
        if(pulsarQuince && pulsarSiete){
            parejasCons++;
            contador.setAttribute("value","Parejas conseguidas ="+parejasCons+"| Clicks = "+numeroClick);
            setTimeout(function(){
                quince.classList.add("desaparece");
                siete.classList.add("desaparece");    
            },100);
        }
        inicializarBotones();
    }
});

$("#dieciseis").addEventListener("click", function(){//Pareja con el 13
    var contador = document.getElementById("contador");
    numeroClick++;
    pulsarDieciseis = true;
    var dieciseis = document.querySelector("#dieciseis");
    imageABoton.push("dieciseis");
    dieciseis.setAttribute("type","image");
    dieciseis.disabled = true;
    dieciseis.setAttribute("src","fotos/ocho.jpg");
    contador.setAttribute("value","Parejas conseguidas ="+parejasCons+"| Clicks = "+numeroClick);
    if(numeroClick % 2 == 0){
        borrarLista();  
        if(pulsarDieciseis && pulsarTrece){
            parejasCons++;
            contador.setAttribute("value","Parejas conseguidas ="+parejasCons+"| Clicks = "+numeroClick);
            setTimeout(function(){
                dieciseis.classList.add("desaparece");
                trece.classList.add("desaparece");    
            },300);
        }
        inicializarBotones();
    }
});
$("#diecisiete").addEventListener("click", function(){//Pareja con el 14
    var contador = document.getElementById("contador");
    numeroClick++;
    pulsarDiecisiete = true;
    var diecisiete = document.querySelector("#diecisiete");
    imageABoton.push("diecisiete");
    diecisiete.setAttribute("type","image");
    diecisiete.disabled = true;
    diecisiete.setAttribute("src","fotos/nueve.jpg");
    contador.setAttribute("value","Parejas conseguidas ="+parejasCons+"| Clicks = "+numeroClick);
    if(numeroClick % 2 == 0){
        borrarLista();
        if(pulsarDiecisiete && pulsarCatorce){
            parejasCons++;
            contador.setAttribute("value","Parejas conseguidas ="+parejasCons+"| Clicks = "+numeroClick);
            setTimeout(function(){
                catorce.classList.add("desaparece");
                diecisiete.classList.add("desaparece");    
            },100);
        }
        inicializarBotones();
    }
});

$("#dieciocho").addEventListener("click", function(){//Pareja con el 10
    var contador = document.getElementById("contador");
    numeroClick++;
    pulsarDieciocho = true;
    var dieciocho = document.querySelector("#dieciocho");
    imageABoton.push("dieciocho");
    dieciocho.setAttribute("type","image");
    dieciocho.disabled = true;
    dieciocho.setAttribute("src","fotos/siete.jpg");
    contador.setAttribute("value","Parejas conseguidas ="+parejasCons+"| Clicks = "+numeroClick);
    if(numeroClick % 2 == 0){
        borrarLista();  
        if(pulsarDieciocho && pulsarDiez){
            parejasCons++;
            contador.setAttribute("value","Parejas conseguidas ="+parejasCons+"| Clicks = "+numeroClick);
            setTimeout(function(){
                dieciocho.classList.add("desaparece");
                diez.classList.add("desaparece");    
            },100);
        }
        inicializarBotones();
    }
});

document.addEventListener("click",()=>{
    if(numeroClick==40){
        window.location.href = "muerte.html";
    }
    if(parejasCons==9){
        window.location.href = "victoria.html";
    }
})

function inicializarBotones(){
    pulsarUno = false;
    pulsarDos = false;
    pulsarTres = false;
    pulsarCuatro = false;
    pulsarCinco = false;
    pulsarSeis = false;
    pulsarSiete = false;
    pulsarOcho = false;
    pulsarNueve = false;
    pulsarDiez = false;
    pulsarOnce = false;
    pulsarDoce = false;
    pulsarTrece = false;
    pulsarCatorce = false;
    pulsarQuince = false;
    pulsarDieciseis = false;
    pulsarDiecisiete = false;
    pulsarDieciocho = false;
}

function borrarLista(){
    var primero = document.querySelector("#"+imageABoton[0]);
    var segundo = document.querySelector("#"+imageABoton[1]);
    setTimeout(function(){
        segundo.removeAttribute("src");
        segundo.setAttribute("type","button");
        segundo.disabled = false;
        primero.removeAttribute("src");
        primero.disabled = false;
        primero.setAttribute("type","button");
        imageABoton.shift();
        imageABoton.shift();  
    },500);
};

function $(selector){
    return document.querySelector(selector);
}