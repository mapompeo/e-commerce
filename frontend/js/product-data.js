import products from '../data/products-data.js';

document.addEventListener('DOMContentLoaded', () => {
    // Obter o ID do produto a partir do atributo data-id no body
    const productId = document.body.getAttribute('data-id');  // Deixa como string

    const product = products.find(p => p.id === productId);  // Compara como string

    if (product) {
        document.getElementById('product-name').textContent = product.nome;
        document.getElementById('product-price').textContent = product.preco;
        document.getElementById('product-description').textContent = product.descricao;
        document.getElementById('product-image').src = product.imagem;

        const detailsContainer = document.getElementById('product-details');
        const detailsList = document.createElement('ul');
        for (const [key, value] of Object.entries(product.detalhes_tecnicos)) {
            const listItem = document.createElement('li');
            listItem.textContent = `${key}: ${value}`;
            detailsList.appendChild(listItem);
        }
        detailsContainer.appendChild(detailsList);
    } else {
        console.error('Produto não encontrado!');
    }
});
