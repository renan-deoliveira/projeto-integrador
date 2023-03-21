const express = require('express')
const router = express.Router()

const solicitarProdutos = require('../controller/solicitarProdutos.js')
const solicitarOfertas = require('../controller/solicitarOfertas.js')
const registrarUsuario = require('../controller/registrarUsuario.js')
const validarUsuario = require('../controller/validarUsuario.js')



router.get('/ofertas',  solicitarOfertas);
router.get('/produtos', solicitarProdutos);
router.get('/registrar', registrarUsuario);
router.get('/login', validarUsuario);

module.exports = router