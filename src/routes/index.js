import express from 'express'
import produtosRoute from './protudos'

const router = express.Router()

router.use('/produtos', produtosRoute)
router.get('/', (req, res) => res.send('Olá pessoal!!!!'))

export default router