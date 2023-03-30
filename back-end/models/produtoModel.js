const database = require('./__database__')

const Produto = database.define('Jogos', {
    id: DataTypes.STRING,
    jogo: DataTypes.STRING
})


module.exports = { obterItens }