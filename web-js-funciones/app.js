function saludar() {
    alert("Hola Clase");
}

saludar();

function saludoPersonalizado(nombre) {
    let mensaje="Hola ";
    alert(mensaje+nombre);
}

saludoPersonalizado("Pepe");
saludoPersonalizado("Martin");
saludoPersonalizado("Isabel");
let nombre = "Javier";
saludoPersonalizado(nombre);

function cambiarParrafo(contenido) {
    let elemento = document.getElementById("parrafo");
    elemento.innerHTML = contenido;
    
}

cambiarParrafo("Hola Clase");

function cambiarElemento(idElemento, contElemento) {
    let elemento = document.getElementById(idElemento);
    elemento.innerHTML = contElemento;
    
}

cambiarElemento("parrafo","Hola caracola");

saludar();

document.getElementById("cambiarInput")
   
}