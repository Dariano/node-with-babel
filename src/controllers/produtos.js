class ProdutosController {
    constructor(produto){
        this.produto = produto;
    }

    buscar(req, res) {
        return this.produto.find({})
            .then(produtos => res.json(produtos))
            .catch(erro => res.status(400).json(erro.message))
    }
}

export default ProdutosController