let lastScrollTop = 0; // Posição do scroll anterior
const header = document.querySelector('header')

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop

    if (scrollTop > lastScrollTop) {
        header.classList.add('header-hidden')
    } else {
        header.classList.remove('header-hidden')
    }

    lastScrollTop = scrollTop
})