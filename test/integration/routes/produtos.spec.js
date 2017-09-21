describe('Routes: Produtos', () => {
    const produtoPadrao = {
        nome: 'Produto padrão',
        descricao: 'Descrição do produto',
        preco: 100
    }
    
    describe('GET /protudos', () => {
        it('deve retornar uma lista de produtos', done => {
            request
                .get('/protudos')
                .end((err, res) => {
                    expect(res.body[0]).to.be.eql(produtoPadrao)

                    done()
                })         
        });
    });
});