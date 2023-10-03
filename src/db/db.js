const Sequelize = require('sequelize')
const sequelize = new Sequelize('database', 'user', 'senha', {
    host: "ip",
    dialect: 'mysql'
})

try {
    sequelize.authenticate()
    console.log('Banco conectado com sucesso!')
} catch (error) {
    console.log('Erro ao authenticar o banco!')
}

module.exports = sequelize;