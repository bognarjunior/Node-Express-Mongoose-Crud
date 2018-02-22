/**
 * 
 * Arquivo: produto.js
 * Author: Bognar Junior
 * Descrição: Arquivo responsável pela modelagem da classe produto
 * Data: 22/02/2018
 * 
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Produto:
 * 
 * Nome: String
 * Preco: Number
 * Descricao: String
 * 
 */

const ProdutoSchema = new Schema({
    nome: String,
    preco: Number,
    descricao: String
});

module.exports = mongoose.model('Produto', ProdutoSchema);