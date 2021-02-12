// Cargar la libreria express para ser un servidor web //

const express = require('express');
const app = express();

const puerto = 3000;
app.listen(puerto, servidor() );

app.get('/',function name(){
    console.log('Un cliente ha conectado');
}

function servidor() {
    console.log('Servidor iniciado'); 
}