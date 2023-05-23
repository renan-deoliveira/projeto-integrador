const Produtos = require('../models/produtoModel.js');

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
        const { name, description, price } = req.body;
        const game = await Produtos.create({ name, description, price });
        res.json(game);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = {
    getAllGames,
    addGame,
};
