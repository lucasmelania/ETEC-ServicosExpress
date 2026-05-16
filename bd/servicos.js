import { produtos } from "./bd.js";

function listarProdutos() {
  return produtos;
}

function listarPorCategoria(categoria) {
  const produtosFiltrados = produtos.filter(
    (produto) => produto.categoria === categoria,
  );
  return produtosFiltrados;
}

function calcularEstoqueProduto(id) {
  //Procurar Produto por id
  const produto = produtos.find((produto) => produto.id == id);

  // Retornar quanto de dinheito a em estoque

  return produto.preco * produto.quantidade;
}

function listarPorId(id) {
  //Procurar Produto por id
  const produto = produtos.find((produto) => produto.id == id);

  // Listar Produto

  return produto;
}

function listarPorNome(nome) {
  //Procurar Produto por nome

  const produto = produtos.filter((produto) =>
    produto.nome.toLowerCase().includes(nome.toLowerCase()),
  );

  // Listar Produto

  return produto;
}

function listarEstoqueBaixo() {
  //Filtrar por quantidade
  const produtosFiltrados = produtos.filter(
    (produto) => produto.quantidade < 10,
  );

  // Listar Produto
  return produtosFiltrados;
}

function top5Estoque() {
  // Criar uma cópia do array
  const copiaProdutos = [...produtos];

  // Percorrer todos os produtos, calcular o valor do estoque
  // (preço × quantidade) e cria uma nova propriedade
  // chamada valorEstoque em cada produto

  copiaProdutos.forEach((produto) => {
    produto.valorEstoque = produto.preco * produto.quantidade;
  });

  // Ordenar
  copiaProdutos.sort((a, b) => {
    return b.valorEstoque - a.valorEstoque;
  });

  // Pegar os 5 primeiros
  return copiaProdutos.slice(0, 5);
}

function maiorValorEstoque() {
  // Criar cópia do array
  const copiaProdutos = [...produtos];

  // Percorrer todos os produtos, calcular o valor do estoque
  // e criar a propriedade valorEstoque
  copiaProdutos.forEach((produto) => {
    produto.valorEstoque = produto.preco * produto.quantidade;
  });

  // Ordenar do maior valor para o menor
  copiaProdutos.sort((a, b) => {
    return b.valorEstoque - a.valorEstoque;
  });

  // Retornar o primeiro produto
  return copiaProdutos[0];
}

function valorPorCategoria() {
  // Objeto vazio para guardar as categorias
  const categorias = {};

  // Percorrer todos os produtos
  produtos.forEach((produto) => {
    // Calcular valor do estoque
    const valorEstoque = produto.preco * produto.quantidade;

    // Pegar categoria do produto
    const categoria = produto.categoria;

    // Se a categoria já existir:
    if (categorias[categoria]) {
      categorias[categoria] += valorEstoque;
    } else {
      // Se não existir, criar categoria
      categorias[categoria] = valorEstoque;
    }
  });

  return categorias;
}

export {
  listarProdutos,
  listarPorCategoria,
  calcularEstoqueProduto,
  listarPorId,
  listarPorNome,
  listarEstoqueBaixo,
  top5Estoque,
  maiorValorEstoque,
  valorPorCategoria,
};
