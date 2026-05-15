import express from 'express'

import { listarProdutos, listarPorCategoria, calcularEstoqueProduto, listarPorId, listarPorNome } from './bd/servicos.js'


const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/produtos', (req, res) => {
   let produtos = listarProdutos()
   res.json(produtos)
})

app.get('/produtosCategoria/:categoria', (req, res) => {
   let {categoria} = req.params
   let produtosFiltrados = listarPorCategoria(categoria)
   res.json(produtosFiltrados)
})

app.get('/estoque/:id', (req, res) => {

  let { id } = req.params
  let valorEstoque = calcularEstoqueProduto(id)
  res.json({
      valorEstoque
  })

})

app.get('/produtoId/:id', (req, res) => {

  let { id } = req.params
  let produto = listarPorId(id)
  res.json(produto)

})

app.get('/produtoNome/:nome', (req, res) => {

  let { nome } = req.params
  let produto = listarPorNome (nome)
  res.json(produto)

})


app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})

