const Sequelize = require('sequelize')
const sequelize = new Sequelize ({
    dialect: 'sqlite',
    storage: './dB/app.dB'
})

module.exports = sequelize