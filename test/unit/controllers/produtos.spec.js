import ProdutosController from '../../../src/controllers/produtos'
import sinon from 'sinon'
import Produto from '../../../src/models/produtos'

describe('Controllers: Produtos', () => {
    const produtoPadrao = [{
        nome: 'Produto padrão',
        descricao: 'Descrição do produto',
        preco: 100
    }]

    describe('buscar() produtos', () => {
        it('deve retornar uma lista de produtos', () => {
            const request = {}
            const response = {
                json: sinon.spy()
            }

            Produto.find = sinon.stub()

            Produto.find.withArgs({}).resolves(produtoPadrao)
            const produtosController = new ProdutosController(Produto)

            return produtosController.buscar(request, response)
                .then(() => {
                    sinon.assert.calledWith(response.json, produtoPadrao)
                })
        })

        it('deve retornar 400 quando um erro ocorrer', () => {
            const request = {}
            const response = {
                json: sinon.spy(),
                status: sinon.stub()
            }

            response.status.withArgs(400).returns(response)
            Produto.find = sinon.stub()
            Produto.find.withArgs({}).rejects({ message: 'Erro!!!' })

            const produtosController = new ProdutosController(Produto)

            return produtosController.buscar(request, response)
                .then(() => {
                    sinon.assert.calledWith(response.json, 'Erro!!!')
                })
        })
    })
})