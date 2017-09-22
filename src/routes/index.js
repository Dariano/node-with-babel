import express from 'express'
import produtosRoute from './produtos'

const router = express.Router()

router.use('/produtos', produtosRoute)
router.get('/', (req, res) => res.send('Olá pessoal!!!!'))

export default router