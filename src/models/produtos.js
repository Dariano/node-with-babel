import mongoose from 'mongoose'

const schema = new mongoose.Schema({
    nome: String,
    descricao: String,
    preco: Number
})

const Produto = mongoose.model('Produto', schema)

export default Produto