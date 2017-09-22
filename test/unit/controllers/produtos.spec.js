import ProdutosController from '../../../src/controllers/produtos'
import sinon from 'sinon'

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

            ProdutosController.buscar(request, response)

            expect(response.json.called, 'Chamar json()').to.be.true
            expect(response.json.calledWith(produtoPadrao), 'Passa produto padrão').to.be.true
        });
    });
});