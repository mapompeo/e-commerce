function renderCart() {
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
                    <tr>
                        <td>Apple Watch (usado)</td>
                        <td>1</td>
                        <td>R$1.499,00</td>
                    </tr>
                    <tr>
                        <td>iPhone 13 (usado)</td>
                        <td>1</td>
                        <td>R$4.999,00</td>
                    </tr>
                    <tr class="total">
                        <td>Total</td>
                        <td>2</td>
                        <td>R$6.498,00</td>
                    </tr>
                </tbody>
            </table>
            <div class="cart-flex-collumn">
                <a href="index.html" id="continueShopping">Continuar comprando?</a>
                <button id="finalizePurchase">Finalizar compra</button>
            </div>
        </div>
    </div>
    `

    document.body.insertAdjacentHTML('beforeend', cartHtml)

    const openCartButton = document.getElementById("openCart")
    const cartModal = document.getElementById("cartModal")
    const continueShopping = document.getElementById("continueShopping")

    openCartButton.addEventListener("click", () => {
        cartModal.style.display = "flex"
        document.body.style.overflow = "hidden"
    })

    continueShopping.addEventListener("click", (e) => {
        e.preventDefault()
        cartModal.style.display = "none"
        document.body.style.overflow = "auto"
    })
}

export { renderCart }