function renderCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || []; // Recupera o carrinho

    const cartHtml = `
    <div id="cartModal" class="modal">
        <div class="modal-content">
            <h2>Carrinho</h2>
            <table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Quantidade</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    ${cart.map(item => `
                        <tr>
                            <td>${item.productName}</td>
                            <td>${item.quantity}</td>
                            <td>${item.productPriceText}</td> <!-- Aqui usamos o texto formatado -->
                        </tr>
                    `).join('')}
                    <tr class="total">
                        <td>Total</td>
                        <td>${cart.reduce((total, item) => total + item.quantity, 0)}</td>
                        <td>R$${cart.reduce((total, item) => total + item.productPrice * item.quantity, 0).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td> <!-- Calculando o total com o preço numérico -->
                    </tr>
                </tbody>
            </table>
            <div class="cart-flex-column">
                <a href="index.html" id="continueShopping">Continuar comprando?</a>
                <button id="finalizePurchase">Finalizar compra</button>
            </div>
        </div>
    </div>
    `;

    document.body.insertAdjacentHTML('beforeend', cartHtml);

    // Abrir carrinho
    const openCartButton = document.getElementById("openCart");
    const cartModal = document.getElementById("cartModal");
    const continueShopping = document.getElementById("continueShopping");

    openCartButton.addEventListener("click", () => {
        cartModal.style.display = "flex";
        document.body.style.overflow = "hidden";
    });

    continueShopping.addEventListener("click", (e) => {
        e.preventDefault();
        cartModal.style.display = "none";
        document.body.style.overflow = "auto";
    });
}

export { renderCart }
