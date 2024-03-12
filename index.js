const express = require('express')
const db = require('./dB/conexao')
const Sequelize = require('sequelize')

db.authenticate()
    .then(() => {
        console.log('Conectou ao Banco de Dados')
    })
    .catch((error) => {
        console.log(`Erro ao tentar conectar no DB ${error}`)
    })

const PORT = 3001

const app = express()

app.use('/jobs', require('./routes/jobs'))

app.listen(PORT, () => {
    console.log(
        'Express esta rodando na porta: ' +
        PORT
    )
})