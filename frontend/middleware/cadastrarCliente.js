const feedback = document.getElementById('mensagem-feedback');

const cadastrar = document.getElementById('cadastrar-botao');

cadastrar.addEventListener('click', async (e) => {
    e.preventDefault();

    const nomeCliente = document.getElementById('cadastrar-nome').value;
    const sobrenomeCliente = document.getElementById('cadastrar-sobrenome').value;
    const cpfCliente = document.getElementById('cadastrar-cpf').value;
    const telefoneCliente = document.getElementById('cadastrar-telefone').value;
    const emailCliente = document.getElementById('cadastrar-email').value;
    const logradouro = document.getElementById('cadastrar-logradouro').value;
    const numero = document.getElementById('cadastrar-telefone').value;
    const complemento = document.getElementById('cadastrar-complemento').value;
    const bairro = document.getElementById('cadastrar-bairro').value;
    const localidade = document.getElementById('cadastrar-cidade').value;
    const uf = document.getElementById('cadastrar-estado').value;
    const cep = document.getElementById('cadastrar-cep').value;
    const senhaCliente = document.getElementById('cadastrar-senha').value;

    const dados = {
        nomeCliente,
        sobrenomeCliente,
        cpfCliente,
        telefoneCliente,
        emailCliente,
        logradouro,
        numero,
        complemento,
        bairro,
        localidade,
        uf,
        cep,
        statusCliente: 'Ativo',
        senhaCliente
    };

    try {
        const resposta = await fetch('http://localhost:3000/cliente/cadastrar', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dados)
        });

        const resultado = await resposta.json();

        if (resposta.ok) {
            feedback.textContent = 'Cadastro realizado com sucesso! Bem-vindo, ' + nomeCliente + '!';
            feedback.classList.remove('mensagem-oculta');
            feedback.classList.add('mensagem-visivel');

            // Esconde a mensagem após 5 segundos
            setTimeout(() => {
                feedback.classList.remove('mensagem-visivel');
                feedback.classList.add('mensagem-oculta');
            }, 5000);
        } else {
            feedback.textContent = resultado.error || 'Erro ao realizar cadastro. Verifique se as informações estão corretas!';
            feedback.classList.remove('mensagem-oculta');
            feedback.classList.add('mensagem-visivel');

            // Esconde a mensagem após 5 segundos
            setTimeout(() => {
                feedback.classList.remove('mensagem-visivel');
                feedback.classList.add('mensagem-oculta');
            }, 5000);
        }
    } catch (error) {
        feedback.textContent = 'Erro de conexão com o servidor. Tente novamente.';
        feedback.classList.remove('mensagem-oculta');
        feedback.classList.add('mensagem-visivel');

        // Esconde a mensagem após 5 segundos
        setTimeout(() => {
            feedback.classList.remove('mensagem-visivel');
            feedback.classList.add('mensagem-oculta');
        }, 5000);
    }
});
