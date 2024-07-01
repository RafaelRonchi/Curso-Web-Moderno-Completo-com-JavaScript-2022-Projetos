const porta = 3003

const express = require('express')
const app = express()
const db = require('./bd')
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.get('/produtos', (req, res, next) => {
    res.send(db.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(db.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) =>{
    const produto = db.salvarProduto({
        nome: req.body.nome, 
        preco: req.body.preco
    })
    console.log(produto);
    res.send(produto)
})

app.put('/produtos', (req, res, next) =>{
    const produto = db.salvarProduto({
        id: req.body.id,
        nome: req.body.nome, 
        preco: req.body.preco
    })
    console.log(produto);
    res.send(produto)
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = db.deleteP( req.params.id)
    res.send(produto)
})



app.listen(porta, () => {
    console.log(`server ${porta}`);
})