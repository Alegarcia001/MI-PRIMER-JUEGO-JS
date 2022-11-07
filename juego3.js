let militar = document.querySelector(".militar");
let body = document.querySelector("body");
let laser = document.getElementById("laser");
let vida = document.getElementById("vida");


document.addEventListener("mousemove", (e) => {
    militar.style.top = (e.clientY - 20) + 'px';
})

document.addEventListener("click", () => {
    let bala = document.createElement("div");
    bala.classList.add("bala");
    bala.style.left = 120 + "px";
    bala.style.top = (militar.getBoundingClientRect().top + 30) + "px";
    body.append(bala);
    laser.play();
})

setInterval(() => {
    let balas = document.querySelectorAll(".bala");
    balas.forEach(bala => {
        bala.style.left = (bala.getBoundingClientRect().left + 100) + "px";
        if (bala.getBoundingClientRect().right >= 1910) {
            bala.remove();
        }
        let enemigos = document.querySelectorAll(".enemigo");
        enemigos.forEach(enemigo => {
            console.log(tiempo.getBoundingClientRect().right);
            if (bala.getBoundingClientRect().right >= enemigo.getBoundingClientRect().right+120) {
                if (bala.getBoundingClientRect().top >= enemigo.getBoundingClientRect().top &&
                bala.getBoundingClientRect().top <= enemigo.getBoundingClientRect().top+150) {
                    let explosion = document.getElementById("explosion");
                    enemigo.style.backgroundImage = 'url("../fotos/explosion.png")';
                    explosion.play();
                    setInterval(() => {
                        enemigo.remove();
                        explosion.stop();
                    }, 100);

                }
            }
        });
    });
}, 100)
let vidas = 10;
let aparecer = 0;
setInterval(() => {
    aparecer++;
    if (aparecer % 4 == 0) {
        let enemigo = document.createElement("div");
        enemigo.classList.add("enemigo");
        body.append(enemigo);
        enemigo.style.top = (Math.random() * window.innerHeight - 100) + "px";
        let enemigos = document.querySelectorAll(".enemigo");
        enemigos.forEach(element => {
            element.style.left = (element.getBoundingClientRect().left - 100) + "px";
            if (element.getBoundingClientRect().right <= militar.getBoundingClientRect().right) {
                element.remove();
                vidas--;
                vida.textContent = "Live: " + vidas;
                if(vidas == 0){
                    window.location.href = "muerte.html";
                }
            }
        });
    }
}, 100)
let segundos = 60;
let tiempo = document.querySelector(".tiempo");
setInterval(() => {
    segundos--;
    tiempo.textContent = "Tiempo para ganar: " + segundos;
    if (segundos == 0) {
        window.location.href = "victoria.html";
    }
}, 1000);