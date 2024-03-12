const Sequelize = require('sequelize')
const db = require('./../dB/conexao')

const Jobs = db.define('jobs', {
    titulo: {
        type: Sequelize.STRING,
    },
    descricao: {
        type: Sequelize.STRING,
    },
    salario: {
        type: Sequelize.STRING,
    },
    empresa: {
        type: Sequelize.STRING,
    },
    email: {
        type: Sequelize.STRING,
    },
    novo_trabalho: {
        type: Sequelize.INTEGER,
    },
    createdAt: {
        type: Sequelize.INTEGER,
    },
    updatedAt: {
        type: Sequelize.INTEGER,
    },
})

module.exports = Jobs