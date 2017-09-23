import Produto from '../../../src/models/produtos'

describe('Routes: Produtos', () => {
    const produtoEsperado = {
        __v: 0,
        _id: '56cb91bdc3464f14678934ca',
        nome: 'Produto padrão',
        descricao: 'Descrição do produto',
        preco: 100
    }

    let request

    before(() => {
        return setupApp
            .then(app => {
                request = supertest(app)
            })
    })

    beforeEach(() => {
        const produto = new Produto(produtoEsperado)
        produto._id = '56cb91bdc3464f14678934ca'

        return Produto.remove({})
            .then(() => produto.save())
    })

    afterEach(() => {
        Produto.remove({})
    })

    describe('GET /produtos', () => {
        it('deve retornar uma lista de produtos', done => {
            request
                .get('/produtos')
                .end((err, res) => {
                    expect(res.statusCode).to.be.eql(200)
                    expect(res.body).to.be.an('array')
                    expect(res.body).to.eql([produtoEsperado])

                    done(err)
                })
        })
    })
})