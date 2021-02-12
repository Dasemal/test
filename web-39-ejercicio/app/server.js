const path = require('path');   
const express = require('express');
const rutaPublic = path.join(__dirname, '..', 'public');

const app = express();
const puerto = 3000;

app.use(express.static(rutaPublic));

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('index');
});
app.set('views', path.join(__dirname, 'views'));

app.listen(puerto, iniciaServidor());
function iniciaServidor() {
    console.log('iniciado');
}