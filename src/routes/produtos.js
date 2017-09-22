import express from 'express'
import ProdutosController from '../controllers/produtos'

const router = express.Router()

router.get('/', ProdutosController.buscar)

export default router