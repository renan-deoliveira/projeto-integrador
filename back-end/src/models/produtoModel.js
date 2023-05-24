const { DataTypes } = require('sequelize');
const DB = require('../DB');

const Produtos = DB.define('Produtos', {
    name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    price: DataTypes.DOUBLE,
    picture: {
        type: DataTypes.STRING,
        allowNull: true
    }
});

DB.sync();

module.exports = Produtos;
