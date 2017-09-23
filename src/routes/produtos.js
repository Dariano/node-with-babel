import express from 'express'
import ProdutosController from '../controllers/produtos'
import Produto from '../models/produtos'

const router = express.Router()
const produtoController = new ProdutosController(Produto)

router.get('/', (req, res) => produtoController.buscar(req, res))

export default router