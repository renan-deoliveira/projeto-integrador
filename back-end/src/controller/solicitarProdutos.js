const Produtos = require('../models/produtoModel.js');
// const fs = require('fs');
// const path = require('path');

async function getAllGames(req, res) {
    try {
        const games = await Produtos.findAll();
        res.json(games);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

async function addGame(req, res) {
    try {
        const {
            name,
            picture,
            price,
            parcelas,
            console,
            altText,
            rating
        } = req.body;
        const game = await Produtos.create({
            name,
            picture,
            price,
            parcelas,
            console,
            altText,
            rating
        });
        res.json(game);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

// async function adicionarProduto(req, res) {
//     try {
//         const { name, description, price } = req.body;
//         const picture = req.file; // Imagem enviada como arquivo (usando biblioteca como Multer)

//         // Salvar a imagem no sistema de arquivos
//         const pictureNome = picture.filename; // Nome gerado pelo Multer
//         const pictureCaminho = path.join(__dirname, '../../uploads/', pictureNome);
//         fs.renameSync(picture.path, pictureCaminho);

//         // Criar o produto no banco de dados
//         const novoProduto = await Produtos.create({
//             name,
//             description,
//             price,
//             picture: pictureNome // Armazenar o nome do arquivo da imagem no banco de dados
//         });

//         res.status(201).json(novoProduto);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// }

module.exports = {
    getAllGames,
    addGame,
    // adicionarProduto,
};
