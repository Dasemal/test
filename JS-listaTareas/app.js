
function anyadirTarea() {

    //Tomo el valor de input

    let eTarea = document.getElementById("idTarea");

    //Compruebo y si tiene algo de texto

    if (eTarea.value != "") {

    //Si tiene texto, añado el elemento en la lista

        anyadirElemento(eTarea.value);

    //Despues de añadir borro el elemento input

        eTarea.value = "";
    }
    //Si no tiene texto, no hago nada
}

//Funcion añadir elemento a la lista

function anyadirElemento(textoTarea) {

    let listaTareas = document.getElementById("listaTareas");
    
    //Creo un lemento <li>

    liTarea = document.createElement("li");

    //Relleno el elemento

    liTarea.innerHTML = textoTarea;

    //Añado el elemento a la listaTareas

    listaTareas.appendChild(liTarea);
    

}

//Borramos las tareas

function borrarTarea() {

    //Usamos el prompt para pedir al usuario el numero de tarea.

    let numTarea = prompt("Escribe el numero de la tarea que quieres borrar");

    //Campturo la lista de tareas

    let lTareas = document.getElementById("listaTareas");

    //Comprobar que el numero de tarea el valido
}
    if ( numTarea >= 1 && numTarea <= lTareas.children.length ) {

        //Borrar de la lista de tareas el elemento numero
        //n-1, donde n es el valor que me ha pasado el usuario

        let indice = numTarea - 1;

        //Capturo el elemento que quiero borrar

        let eTareaBorrar = lTareas.children[indice];

        //borro ese elemento de la lista

        lTareas.removeChild(eTareaBorrar);

        //lTareas.remobeChild(lTarea.childen[numTarea-1]);
    }else{
        alert["Numero no valido"]
    }


    }
    
}