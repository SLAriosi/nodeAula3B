const express = require('express')

const router = express.Router()

router.get('/', (requisicao, resposta) => {
    resposta.send('Esta rodando com nodemon')
})
router.post('/teste', (requisicao, resposta) => {
    resposta.send('Teste Nodemon REQ')
})
// http://localhost:3001/teste

module.exports = router