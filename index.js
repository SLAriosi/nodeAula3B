const express = require('express')
const dB = require('./dB/conexao')
const Sequelize = require('sequelize')

dB.authenticate()
    .then(() => {
        console.log('Conectou ao Banco de Dados')
    })
    .catch((erro) => {
        console.log(`Erro ao tentar conectar no DB ${erro}`)
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