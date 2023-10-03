const Sequelize = require('sequelize')
const database = require('./db.js')

const Users = database.define('Users', {
    Nome:{
        type: Sequelize.STRING,
        autoIncrement: false,
        allowNull: false
    },
    E_Mail:{
        type: Sequelize.STRING,
        autoIncrement: false,
        allowNull: true
    },
    Senha:{
        type: Sequelize.STRING,
        autoIncrement: false,
        allowNull: true
    },
    Imobiliaria:{
        type: Sequelize.STRING,
        autoIncrement: false,
        allowNull: true
    },
    Admin:{
        type: Sequelize.ENUM('false', 'true'),
        allowNull: false
    }
})

module.exports = Users;