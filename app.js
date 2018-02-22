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
const mongoose = require('mongoose');
const Produto = require('./app/models/produto');

//Conexão do Mlab
mongoose.connect('mongodb://testenode:abcd123@ds243768.mlab.com:43768/node-crud-api', {
    useMongoClient: true
});
//Localhost
//mongoose.connect('mongodb://localhost/node-crud-api');  

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

const port = process.env.port || 8000;

const router = express.Router();

router.use(function (req, res, next) {
    console.log('Algo está acontecendo aqui');
    next();
});

router.get('/', function(req, res) {
    res.json({message: "Bem-vindo!"});
});

router.route('/produtos')
    .post(function (req, res) { 
        const produto = new Produto();

        produto.nome = req.body.nome;
        produto.preco = req.body.preco;
        produto.descricao = req.body.descricao;
        
        produto.save(function (error) { 
            if (error) {
                res.send('Erro ao tentar salvar o produto: ' + error);
            }

            res.json({message: 'Produto cadastrado com sucesso!'});
        });
    })

    .get(function (req, res) {
        Produto.find(function (error, produtos) {  
            if (error) {
                res.send('Erro ao tentar selecionar todos os produtor: ', error);
            }

            res.json(produtos);
        })
    });

app.use('/api', router);

app.listen(port);
console.log("Servidor rodando na porta: ", port);