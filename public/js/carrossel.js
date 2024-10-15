const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const produtos = document.querySelector('.produtos');
const produtoCards = document.querySelectorAll('.produto-card');

let currentIndex = 0;
const produtoWidth = produtoCards[0].offsetWidth + 20;  // Largura do produto + margem
const totalWidth = produtoWidth * produtoCards.length;   // Largura total dos produtos

nextBtn.addEventListener('click', () => {
    currentIndex += produtoWidth;
    if (currentIndex >= totalWidth) {
        currentIndex = 0;  // Reinicia para o primeiro produto
    }
    produtos.style.transform = `translateX(-${currentIndex}px)`;
});

prevBtn.addEventListener('click', () => {
    currentIndex -= produtoWidth;
    if (currentIndex < 0) {
        currentIndex = totalWidth - produtoWidth;  // Volta para o último produto
    }
    produtos.style.transform = `translateX(-${currentIndex}px)`;
});
