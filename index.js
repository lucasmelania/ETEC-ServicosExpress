import express from "express";

import {
  listarProdutos,
  listarPorCategoria,
  calcularEstoqueProduto,
  listarPorId,
  listarPorNome,
  listarEstoqueBaixo,
  top5Estoque,
  maiorValorEstoque,
  valorPorCategoria,
} from "./bd/servicos.js";

const app = express();

app.use(express.static("public"));

app.get("/produtos", (req, res) => {
  let produtos = listarProdutos();
  res.json(produtos);
});

app.get("/produtosCategoria/:categoria", (req, res) => {
  let { categoria } = req.params;
  let produtosFiltrados = listarPorCategoria(categoria);
  res.json(produtosFiltrados);
});

app.get("/estoque/:id", (req, res) => {
  let { id } = req.params;
  let valorEstoque = calcularEstoqueProduto(id);
  res.json({
    valorEstoque,
  });
});

app.get("/produtoId/:id", (req, res) => {
  let { id } = req.params;
  let produto = listarPorId(id);
  res.json(produto);
});

app.get("/produtoNome/:nome", (req, res) => {
  let { nome } = req.params;
  let produto = listarPorNome(nome);
  res.json(produto);
});

app.get("/estoqueBaixo", (req, res) => {
  let produtos = listarEstoqueBaixo();
  res.json(produtos);
});

app.get("/top5Estoque", (req, res) => {
  let produtos = top5Estoque();
  res.json(produtos);
});

app.get("/maiorValorEstoque", (req, res) => {
  let produto = maiorValorEstoque();
  res.json(produto);
});

app.get("/valorCategoria", (req, res) => {
  let categorias = valorPorCategoria();
  res.json(categorias);
});

export default app;
