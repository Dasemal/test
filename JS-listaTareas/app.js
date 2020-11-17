
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
    
//Cogera un parametro y lo añadira a la lista listaTareas

    listaTareas.innerHTML = listaTareas.innerHTML+"<li>"+textoTarea+"</li>";

}