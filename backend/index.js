const express = require('express')
const app = express()
const conn = require('./db/conn')
const cors = require('cors')
const cliente = require('./routes/clienteRotas')

const PORT = 3000
const hostname = 'localhost'

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.status(200).json({ messege: 'Servidor Ativo!' })
})

app.use('/cliente', cliente)

conn.sync().then(() => {
    app.listen(PORT, hostname, () => {
        console.log(`Servidor rodando em ${hostname}:${PORT}`)
    })
}).catch((err) => {
    console.error('Erro ao rodar servidor', err)
})