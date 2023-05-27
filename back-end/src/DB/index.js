const { Sequelize } = require('sequelize')

const DB = new Sequelize(
    'projetoIntegrador',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
)

// DDL - Definição das nossas tabelas


// const Usuario = database.define('usuarios', {
//     nome: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     sobrenome: {
//         type: DataTypes.STRING,
//         allowNull: true
//     }
// })

// const Credencial = database.define('credencial', {
//     nomeUsuario: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     senha: {
//         type: DataTypes.STRING,
//         allowNull: false
//     }
// })

/*
    Usuário tem:

    idUsuario
    Nome, 
    Sobrenome
    idCredencial

    1) Muitas credenciais
    X 2) Uma credencial

*/

/*
    Credencial tem:

    idCredencial
    Usuario,
    Senha

    1) Muitos usuarios
    x 2) Um usuário

*/

// 1:1
// Credencial.hasOne(Usuario)
// Usuario.belongsTo(Credencial)

try {
    DB.authenticate()
    DB.sync()
    console.log('conexão com banco de dados efetuada')
}
catch (error) {
    console.error(error)
}

module.exports = DB;