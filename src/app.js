import express from 'express'
import bodyParser from 'body-parser'

const app = express()
app.use(bodyParser.json())

app.get('/', (req, res) => res.send('Olá pessoal!!!!'))

app.get('/produtos', (req, res) => {
    res.json([{
        nome: 'Produto padrão',
        descricao: 'Descrição do produto',
        preco: 100
    }])
})

export default app