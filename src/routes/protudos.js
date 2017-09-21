import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
    res.json([{
        nome: 'Produto padrão',
        descricao: 'Descrição do produto',
        preco: 100
    }])
})

export default router