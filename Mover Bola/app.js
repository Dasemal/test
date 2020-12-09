let bola = document.getElementById("bola");
function moverBola(evento) {
    let posX = bola.x;
    let posY = bola.y;
    let vel = 5;
    //Ancho maximo 800
    //Alto maximo 600
    if (evento.key == "ArrowUp") {
        if( posY > 0 ){
            //no hacer nada
        bola.style.top = posY - vel + "px";
    }
}

    else if (evento.key == "ArrowDown") {
        if (posY < 550) {//600 menos el acho de la bola
        bola.style.top = posY + vel + "px";
    }
}

    else if (evento.key == "ArrowLeft") {
        if (posX > 0) {
        bola.style.left = posX - vel + "px";
    }
}

    else if (evento.key == "ArrowRight") {
        if (posX < 750){//800 menos el ancho de la bola
        bola.style.left = posX + vel + "px";
    }
}
}