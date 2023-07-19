const express = require("express")
const router = express.Router()

const app = express()

app.use(router.get('/ola', (req, res) => {
  res.json({ message: 'Olá, Quero Ser Dev!' })
}))

app.listen(3333, () => console.log('Listening on port: 3333'))

//TODO: Separar responsabilidades e refatorar server