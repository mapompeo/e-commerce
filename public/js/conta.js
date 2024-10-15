function mostrarCadastrar() {
    document.querySelector('.container-entrar').style.display = 'none'
    document.querySelector('.container-cadastrar').style.display = 'flex'
    document.querySelector('.conta').style.height = '700px'
}

function mostrarEntrar() {
    document.querySelector('.container-cadastrar').style.display = 'none'
    document.querySelector('.container-entrar').style.display = 'flex'
    document.querySelector('.conta').style.height = '400px'
}