import { produtos } from "./bd.js";

function listarProdutos(){
    return produtos
}

function listarPorCategoria(categoria){
    const produtosFiltrados = produtos.filter(produto => 
        produto.categoria === categoria
    );
    return produtosFiltrados
}

function calcularEstoqueProduto(id) {
   
    //Procurar Produto por id
    const produto = produtos.find(produto => produto.id == id)

    // Retornar quanto de dinheito a em estoque
    
    return produto.preco * produto.quantidade

}

function listarPorId(id) {
    
    //Procurar Produto por id
    const produto = produtos.find(produto => produto.id == id)

    // Listar Produto

    return produto


}

function listarPorNome(nome){

    //Procurar Produto por nome
    
    const produto = produtos.filter(produto =>
        produto.nome.toLowerCase().includes(nome.toLowerCase())
    )

    
    // Listar Produto

    return produto

}

export {listarProdutos, listarPorCategoria, calcularEstoqueProduto, listarPorId, listarPorNome}