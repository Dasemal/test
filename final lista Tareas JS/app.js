//let i = 0;
//let conjunto = [10,23,"Juan",false];
//while (i < conjunto.length) {
    //alert("La posicion "+i+" es "+conjunto[i]);
    //i=i+1;
//}
//alert("Hemos acabado");

//let numeros = [3,4,5,6,3,5,75,7,6];

//reseteamos la i

//i=0;

//while (i < numeros.length) {

//  numeros[i]++;
    
// i++; //equivalente a i=i+1;
//}
//console.log(numeros);

///////////////////////////////////

///////////////////////////////////

//Capturar lista de html

let ls = document.getElementById("lista");

//Inicializar l variable de iteracion

let i = 0;

//empezar el bucle. desde 0 hasta < length

while (i < ls.children.length) {

//Acceder al contenido del elemento children[]

ls.children[i].innerHTML = ls.children[i].innerHTML+".";

//Añadirle un punto (concatenamos con +);

i++;

//Finalizamos el bucle
}

for (let i = 0; i < ls.children.length; i++) {
    
ls.children[i].innerHTML+=".";
}

for (let i = 0; i < ls.children.length; i++) {
    if (i == 1 || i == 3){
ls.children[i].style.color = "red";  
    }
}

let artistas = ["Amaral", "Estopa", "El Canto del Loco",
"C Tangana", "Rosalia", "Vetusta Morla", "Tatchenko", "Pecker", "Mago de Oz",
"Heroes del Silencio", "La Polla Records"];

//Rellenad la tabla "tabla" del HTML siguiendo el siguiente
//patron
// +---+---------+
// | 1 | Amaral  |
// +---+---------+
// | 2 | Amaral  |
// +---+---------+
// | 3 | Amaral  |
// +---+---------+
// | 4 | Amaral  |
// +---+---------+
// | 5 | Amaral  |
// +---+---------+
// | 6 | Amaral  |
// +---+---------+
// | 7 | Amaral  |
// +---+---------+
// | 8 | Amaral  |
// +---+---------+
// | 9 | Amaral  |
// +---+---------+

//interamos por array artisttas con un for
//para cada valor de i 
//creamos un tr
//cramos un td y le ponemos de contenido i+1
//creamos otro td y le ponemos de contenido el artista que toque
//de la lista
