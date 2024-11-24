import produtos from '../data/products-data.js'; // Importa o array de produtos

document.addEventListener('DOMContentLoaded', () => {
    const productId = localStorage.getItem('selectedProductId'); // Lê o ID salvo no localStorage
    if (productId) {
        document.body.setAttribute('data-id', productId); // Define o data-id no body
        carregarProduto(productId); // Chama a função para exibir os dados
    } else {
        console.error("ID do produto não encontrado!");
    }
});

function carregarProduto(id) {
    const produto = produtos.find(produto => produto.id === id); // Busca o produto no array
    if (produto) {
        document.getElementById('product-name').textContent = produto.nome;
        document.getElementById('product-price').textContent = produto.preco;
        document.getElementById('product-description').textContent = produto.descricao;
        document.getElementById('product-image').src = produto.imagem;

        const detalhes = document.getElementById('product-details');
        detalhes.innerHTML = ''; // Limpa os detalhes técnicos antes de preencher
        for (const [chave, valor] of Object.entries(produto.detalhes_tecnicos)) {
            const detalhe = document.createElement('p');
            detalhe.textContent = `${chave}: ${valor}`;
            detalhes.appendChild(detalhe);
        }
    } else {
        console.error("Produto não encontrado!");
    }
}
