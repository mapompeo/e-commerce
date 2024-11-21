function mostrarCadastrar() {
    document.querySelector('.container-entrar').style.display = 'none'
    document.querySelector('.container-cadastrar').style.display = 'flex'
    document.querySelector('.conta').style.height = '700px'
    document.querySelector('body').style.margin = '100px 0px 100px 0px'
}

function mostrarEntrar() {
    document.querySelector('.container-cadastrar').style.display = 'none'
    document.querySelector('.container-entrar').style.display = 'flex'
    document.querySelector('.conta').style.height = '400px'
    document.querySelector('body').style.margin = '0px'
}