const { DataTypes } = require('sequelize');
const DB = require('../DB');

const Produtos = DB.define('Produtos', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    price: DataTypes.DOUBLE,
});

DB.sync();

module.exports = Produtos;
