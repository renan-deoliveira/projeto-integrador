const express = require('express')
const router = express.Router()
const multer = require('multer');
const path = require('path');

const { getAllGames, addGame, adicionarProduto } = require('../controller/solicitarProdutos.js')
const solicitarOfertas = require('../controller/solicitarOfertas.js')
const registrarUsuario = require('../controller/registrarUsuario.js')
const validarUsuario = require('../controller/validarUsuario.js')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../../uploads/'));
    },
    filename: function (req, file, cb) {
        const extensao = file.originalname.split('.').pop();
        const nomeArquivo = `${Date.now()}.${extensao}`;
        cb(null, nomeArquivo);
    }
});

const upload = multer({ storage });

router.post('/produtos', upload.single('picture'), adicionarProduto);
router.get('/ofertas', solicitarOfertas);
router.get('/produtos', getAllGames);
router.get('/registrar', registrarUsuario);
router.get('/login', validarUsuario);

module.exports = router;
