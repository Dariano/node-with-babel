describe('Routes: Produtos', () => {
    const produtoPadrao = {
        nome: 'Produto padrão',
        descricao: 'Descrição do produto',
        preco: 100
    }
    
    describe('GET /produtos', () => {
        it('deve retornar uma lista de produtos', done => {
            request
                .get('/produtos')
                .end((err, res) => {
                    expect(res.body[0]).to.eql(produtoPadrao)

                    done()
                })         
        });
    });
});