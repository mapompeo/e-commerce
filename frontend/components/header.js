const header = document.querySelector('header')

header.innerHTML = `
<nav class="navbar">
    <div class="header">
        <div class="header-logo links">
            <a href="http://127.0.0.1:5500/frontend/index.html"><img src="https://raw.githubusercontent.com/mapompeo/e-commerce/d0ab74acf85959bbe1a9c82dc85c189160cdcb6c/frontend/images/header/logo.svg" alt="Logo"></a>
        </div>
        <div class="header-content links">
            <a href="http://127.0.0.1:5500/frontend/index.html" aria-label="Home"><img src="https://raw.githubusercontent.com/mapompeo/e-commerce/d0ab74acf85959bbe1a9c82dc85c189160cdcb6c/frontend/images/header/home.svg" alt="Home"></a>
            <a href="http://127.0.0.1:5500/frontend/products/produto.html" aria-label="Produtos"><img src="https://raw.githubusercontent.com/mapompeo/e-commerce/d0ab74acf85959bbe1a9c82dc85c189160cdcb6c/frontend/images/header/produtos.svg?"
                    alt="Produtos"></a>
            <a id="openCart" class="cart-button" aria-label="Carrinho"><img src="https://raw.githubusercontent.com/mapompeo/e-commerce/d0ab74acf85959bbe1a9c82dc85c189160cdcb6c/frontend/images/header/carrinho.svg"
                    alt="Carrinho"></a>
        </div>
        <div class="header-account links">
            <a href="http://127.0.0.1:5500/frontend/pages/conta.html" aria-label="Conta"><img src="https://raw.githubusercontent.com/mapompeo/e-commerce/d0ab74acf85959bbe1a9c82dc85c189160cdcb6c/frontend/images/header/conta.svg" alt="Conta"></a>
        </div>
    </div>
</nav>

`