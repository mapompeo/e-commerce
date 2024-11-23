const bcrypt = require('bcrypt');
const Cliente = require('../model/Cliente');

// Cadastro de clientes
const cadastrar = async (req, res) => {
    try {
        const { nomeCliente, sobrenomeCliente, cpfCliente, telefoneCliente, emailCliente,
            logradouro, numero, complemento, bairro, localidade, uf, cep, statusCliente, senhaCliente } = req.body;

        console.log(req.body);  // Exibe o corpo da requisição

        // Verifica se todos os dados necessários estão presentes
        if (!senhaCliente || !emailCliente || !nomeCliente) {
            return res.status(400).json({ error: 'Dados incompletos!' });
        }

        // Criptografa a senha
        const senhaCriptografada = await bcrypt.hash(senhaCliente, 10); // Sal (10) é o número de rodadas

        // Cria o cliente com a senha criptografada
        const cliente = await Cliente.create({
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
            statusCliente,
            senhaCliente: senhaCriptografada
        });

        res.status(201).json({ message: `Cadastro realizado com sucesso!, Bem-vindo, ${nomeCliente}!`});
    } catch (error) {
        console.error('Erro ao cadastrar cliente:', error); // Exibe erro no console
        res.status(500).json({ error: 'Erro ao realizar cadastro. Verifique se as informações estão corretas!', detalhes: error.message });
    }
};


// Login de clientes
const login = async (req, res) => {
    try {
        const { emailCliente, senhaCliente } = req.body;

        // Encontre o cliente no banco
        const cliente = await Cliente.findOne({ where: { emailCliente } });
        if (!cliente) {
            return res.status(401).json({ error: 'Credenciais inválidas' });
        }

        // Verifica se a senha está correta
        const senhaValida = await bcrypt.compare(senhaCliente, cliente.senhaCliente);
        if (!senhaValida) {
            return res.status(401).json({ error: 'Credenciais inválidas' });
        }

        res.status(200).json({ message: 'Login bem-sucedido', cliente });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao realizar login', detalhes: error.message });
    }
};

module.exports = { cadastrar, login };