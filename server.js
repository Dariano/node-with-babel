import setupApp from './src/app'

const port = 3000

setupApp()
    .then(app => app.listen(port, () => console.log(`A serviço está rodando na porta ${port}`)))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })