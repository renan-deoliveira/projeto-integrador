const database = require('./__database__');

const Usuario = database.define('usuario', {
    id: DataTypes.STRING,
    nome: DataTypes.STRING,
    sobrenome: DataTypes.STRING,
    email: DataTypes.STRING
})

module.exports = { Usuario }