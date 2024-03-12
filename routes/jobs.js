const express = require('express')
const Jobs = require('./../models/Jobs')

const router = express.Router()

router.get('/', (requisicao, resposta) => {
    
    let novoTrabalho = {
        titulo: "Atendente",
        salario: "4000",
        empresa: "Ariosi Lanches",
        descricao: "Melhor lanchonete da metrópole Xambrê",
        email: "ariosilanches@contato.com",
        novo_trabalho: 0,
        createdAt: 10, 
        updateAt: 7,
    }

    Jobs.create(novoTrabalho)
        .then(() => {
            resposta.send('Nova vaga criada!')
        }).catch((erro) => {
            console.log(erro)
        });
})
router.post('/teste', (requisicao, resposta) => {
    resposta.send('Teste Nodemon REQ')
})
// http://localhost:3001/teste

module.exports = router