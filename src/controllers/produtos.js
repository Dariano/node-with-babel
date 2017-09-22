class ProdutosController {
    buscar(req, res) {
        res.json([{
            nome: 'Produto padrão',
            descricao: 'Descrição do produto',
            preco: 100
        }])
    }
}

export default new ProdutosController()