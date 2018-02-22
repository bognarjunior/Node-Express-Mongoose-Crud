/**
 * 
 * Arquivo: app.js
 * Descrição: Estudo de node.js, arquivo responsável por levantar o servidor
 * Author: Bognar Junior
 * Date: 22/02/2018
 * 
 */

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

const port = process.env.port || 8000;

const router = express.Router();

router.get('/', function(req, res) {
    res.json({message: "Bem-vindo!"});
});

app.use('/api', router);

app.listen(port);
console.log("Servidor rodando na porta: ", port);