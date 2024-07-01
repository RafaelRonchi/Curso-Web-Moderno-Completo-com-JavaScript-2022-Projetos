const sequence = {
    _id: 1,
    get id() { return this._id++ }
}

const produtos = {}

function salvarProduto(produto){
    if(!produto.id) produto.id = sequence.id
    produtos[produto.id] = produto
    return produto;
}

function getProduto(id){
    return produtos[id] || {}
}
function deleteP(id){
    const produtoExcluido = produtos[id];
    delete produtos[id];
    return produtoExcluido;
}

function getProdutos(){
    return Object.values(produtos)
}

module.exports = { salvarProduto, getProduto, getProdutos, deleteP}