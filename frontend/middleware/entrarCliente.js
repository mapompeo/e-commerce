const login = document.getElementById('entrar-botao');

login.addEventListener('click', (e) => {
    e.preventDefault(); // Impede o comportamento padrão do botão

    // Obtém os dados do formulário de login
    const emailCliente = document.getElementById('entrar-email').value;
    const senhaCliente = document.getElementById('entrar-senha').value;

    const dados = {
        emailCliente,
        senhaCliente
    };

    // Envia os dados para o backend
    fetch('http://localhost:3000/cliente/entrar', {  // Alterado para /cliente/entrar
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados)
    })
        .then(res => res.json())
        .then(dados => {
            console.log(dados); // Exibe a resposta no console
            if (dados.message) {
                alert(dados.message);
            } else if (dados.error) {
                alert(dados.error);
            }
        })
        .catch((err) => {
            console.error('Erro ao fazer login', err);
            alert('Erro ao fazer login. Tente novamente.');
        });
});
