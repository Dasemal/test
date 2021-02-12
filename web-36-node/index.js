const express = require('express');
const app = express();
const puerto = 3000;



let datos = {
    "tonto": "Persona mentalmente algo limitcada"
    "feo": "Persona con una belleza no normativa"







app.get('/saluda/:nombre', function (req, res) {
    let nom = req.params.nombre;
    res.send('Hola ' + datos[nom]);
})
app.get('/despide/:nombre', function (req, res) {
    let nom = req.params.nombre;
    res.send('Adios ' + datos[nom]);
})}



app.listen(puerto, iniciaServidor());
function iniciaServidor() {
    console.log('Servidor en http://localhost:'+puerto);    
}