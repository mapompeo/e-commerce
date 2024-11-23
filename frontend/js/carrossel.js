const carrossels = document.querySelectorAll('.carrosel')

carrossels.forEach(carrossel => {
    const prevBtn = carrossel.querySelector('.prev-btn')
    const nextBtn = carrossel.querySelector('.next-btn')
    const produtos = carrossel.querySelector('.produtos')
    const produtoCards = Array.from(carrossel.querySelectorAll('.produto-card'))

    // Duplicar os itens para criar o loop infinito
    produtoCards.forEach(card => {
        const cloneStart = card.cloneNode(true)
        const cloneEnd = card.cloneNode(true)
        produtos.appendChild(cloneEnd) // Adicionar cópias no final
        produtos.insertBefore(cloneStart, produtos.firstChild) // Adicionar cópias no início
    })

    let currentIndex = produtoCards.length // Começa no primeiro conjunto original
    const produtoWidth = produtoCards[0].offsetWidth + 20 // Espaçamento incluso
    const totalWidth = produtoWidth * produtos.children.length

    // Função para verificar se há duplicatas consecutivas
    const verificarDuplicados = (arr) => {
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] === arr[i + 1]) {
                return true;
            }
        }
        return false;
    };

    // Função para embaralhar os produtos e garantir que não haja duplicatas consecutivas
    const embaralharProdutos = () => {
        let produtosArray = Array.from(produtos.children);
        let hasDuplicates = true;

        // Embaralha os produtos até que não haja duplicatas consecutivas
        while (hasDuplicates) {
            for (let i = produtosArray.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [produtosArray[i], produtosArray[j]] = [produtosArray[j], produtosArray[i]]; // Troca de lugar
            }

            // Verifica se há duplicatas consecutivas
            hasDuplicates = verificarDuplicados(produtosArray);
        }

        // Reinsere os produtos embaralhados na página
        produtosArray.forEach(produto => produtos.appendChild(produto));
    };

    // Embaralha os produtos assim que o carregamento é completo
    embaralharProdutos();

    // Configurar posição inicial
    produtos.style.transform = `translateX(-${currentIndex * produtoWidth}px)`

    nextBtn.addEventListener('click', () => {
        currentIndex++
        produtos.style.transition = 'transform 0.3s ease-in-out'
        produtos.style.transform = `translateX(-${currentIndex * produtoWidth}px)`

        // Resetar para o início quando chegar ao final
        if (currentIndex >= produtos.children.length - produtoCards.length) {
            setTimeout(() => {
                produtos.style.transition = 'none'
                currentIndex = produtoCards.length
                produtos.style.transform = `translateX(-${currentIndex * produtoWidth}px)`
            }, 300)
        }
    })

    prevBtn.addEventListener('click', () => {
        currentIndex--
        produtos.style.transition = 'transform 0.3s ease-in-out'
        produtos.style.transform = `translateX(-${currentIndex * produtoWidth}px)`

        // Resetar para o final quando chegar ao início
        if (currentIndex < produtoCards.length) {
            setTimeout(() => {
                produtos.style.transition = 'none'
                currentIndex = produtos.children.length - produtoCards.length * 2
                produtos.style.transform = `translateX(-${currentIndex * produtoWidth}px)`
            }, 300)
        }
    })
})
