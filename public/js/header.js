const header = document.querySelector('header')

header.innerHTML = `
<nav class="navbar">
    <div class="header">
        <div class="header-logo links">
            <a href="index.html"><img src="images/header/logo.svg" alt="Logo"></a>
        </div>
        <div class="header-content links">
            <a href="index.html" aria-label="Home"><img src="images/header/home.svg" alt="Home"></a>
            <a href="pages/produtos.html" aria-label="Produtos"><img src="images/header/produtos.svg"
                    alt="Produtos"></a>
            <a href="pages/carrinho.html" aria-label="Carrinho"><img src="images/header/carrinho.svg"
                    alt="Carrinho"></a>
        </div>
        <div class="header-account links">
            <a href="pages/conta.html" aria-label="Conta"><img src="images/header/conta.svg" alt="Conta"></a>
        </div>
    </div>
</nav>

`

//começo do cpf do jose 13989