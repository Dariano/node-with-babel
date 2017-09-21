import express from 'express'
import bodyParser from 'body-parser'

const app = express()
app.use(bodyParser.json())

app.get('/', (req, res) => res.send('Olá pessoal!!!!'))

export default app