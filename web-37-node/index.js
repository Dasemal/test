const express = require('express');

const app = express();
const puerto = 3000;

app.set('view engine','ejs');

app.get('/', function (req, res) {
    res.render('index');

app.set('views', path.join(__dirname, 'view'));

app.listen(puerto, iniciaServidor());
function iniciaServidor() {
    console.log('iniciado');
})