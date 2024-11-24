const produtos = [
    {
        "id": "1",
        "nome": "Apple Watch (Usado)",
        "descricao": "Aparelho em ótimas condições, sem arranhões visíveis e com pulseira original. Inclui caixa e carregador. Ideal para monitoramento de saúde e atividades físicas.",
        "detalhes_tecnicos": {
            "Tamanho da Tela": "1.78 polegadas",
            "Conectividade": "Wi-Fi, Bluetooth",
            "Compatibilidade": "iOS",
            "Bateria": "Até 18 horas de uso"
        },
        "preco": "R$1.499,00",
        "imagem": "https://images7.kabum.com.br/produtos/fotos/495377/apple-watch-series-9-45mm-gps-cellular-caixa-grafite-de-aco-inoxidavel-pulseira-grafite-estilo-milanes-neutro-em-carbono-mrmx3bz-a_1729707809_g.jpg"
    },
    {
        "id": "2",
        "nome": "iPhone 13 (Usado)",
        "descricao": "Smartphone em excelentes condições de uso, sem marcas significativas. Inclui caixa original e carregador.",
        "detalhes_tecnicos": {
            "Tela": "6.1 polegadas Super Retina XDR",
            "Processador": "A15 Bionic",
            "Armazenamento": "128GB",
            "Câmera": "12MP (frontal e traseira)",
            "Bateria": "Até 19 horas de reprodução de vídeo"
        },
        "preco": "R$4.999,00",
        "imagem": "https://m.media-amazon.com/images/I/41rfDU6FGqL._AC_SL1000_.jpg"
    },
    {
        "id": "3",
        "nome": "Carregador MagSafe",
        "descricao": "Carregador MagSafe usado, com excelente magnetismo e funcionalidade. Perfeito para carregar dispositivos compatíveis com a tecnologia MagSafe.",
        "detalhes_tecnicos": {
            "Compatibilidade": "iPhone 12 e posterior",
            "Potência": "15W",
            "Conector": "USB-C",
            "Peso": "45g"
        },
        "preco": "R$299,00",
        "imagem": "https://http2.mlstatic.com/D_NQ_NP_778470-MLB74055126634_012024-O.webp"
    },
    {
        "id": "4",
        "nome": "MacBook Pro (Novo)",
        "descricao": "MacBook Pro novíssimo, perfeito para profissionais que precisam de desempenho e portabilidade. Produto lacrado com garantia.",
        "detalhes_tecnicos": {
            "Tela": "13.3 polegadas Retina Display",
            "Processador": "Apple M1",
            "Armazenamento": "512GB SSD",
            "Memória RAM": "16GB",
            "Bateria": "Até 20 horas"
        },
        "preco": "R$9.999,00",
        "imagem": "https://m.media-amazon.com/images/I/41J9j6iVDvS._AC_SL1000_.jpg"
    },
    {
        "id": "5",
        "nome": "AirPods (Usado)",
        "descricao": "Fones de ouvido sem fio com excelente qualidade de som. Inclui estojo de carregamento. Produto em bom estado.",
        "detalhes_tecnicos": {
            "Conectividade": "Bluetooth",
            "Compatibilidade": "iOS e Android",
            "Bateria": "Até 24 horas com estojo",
            "Cancelamento de Ruído": "Sim"
        },
        "preco": "R$1.199,00",
        "imagem": "https://m.media-amazon.com/images/I/41YmidweMtL._AC_SL1000_.jpg"
    },
    {
        "id": "6",
        "nome": "iPad Pro (Novo)",
        "descricao": "iPad Pro lacrado, ideal para criadores de conteúdo e profissionais criativos. Produto com garantia e todos os acessórios originais.",
        "detalhes_tecnicos": {
            "Tela": "11 polegadas Liquid Retina",
            "Processador": "Apple M1",
            "Armazenamento": "256GB",
            "Câmera": "12MP Wide + 10MP Ultra Wide",
            "Bateria": "Até 10 horas"
        },
        "preco": "R$6.499,00",
        "imagem": "https://m.media-amazon.com/images/I/41M-1G1UJRL._AC_SL1000_.jpg"
    },
    {
        "id": "7",
        "nome": "iPhone 12 (Usado)",
        "descricao": "Smartphone com desempenho potente e câmeras de alta qualidade. Inclui acessórios originais e está em bom estado de conservação.",
        "detalhes_tecnicos": {
            "Tela": "6.1 polegadas Super Retina XDR",
            "Processador": "A14 Bionic",
            "Armazenamento": "128GB",
            "Câmera": "12MP (frontal e traseira)",
            "Bateria": "Até 17 horas de reprodução de vídeo"
        },
        "preco": "R$3.499,00",
        "imagem": "https://m.media-amazon.com/images/I/41Zbbl4P+LL._AC_SL1000_.jpg"
    },
    {
        "id": "8",
        "nome": "Smartwatch Garmin (Novo)",
        "descricao": "Relógio inteligente com monitoramento avançado de atividades físicas. Produto novo e lacrado com garantia.",
        "detalhes_tecnicos": {
            "Tela": "1.3 polegadas",
            "Conectividade": "Bluetooth, Wi-Fi, ANT+",
            "Monitoramento": "Batimentos, sono, estresse",
            "Bateria": "Até 14 dias em modo smartwatch"
        },
        "preco": "R$1.899,00",
        "imagem": "https://m.media-amazon.com/images/I/715l956R1gL._AC_SL1500_.jpg"
    },
    {
        "id": "9",
        "nome": "Carregador MagSafe (Novo)",
        "descricao": "Carregador sem fio para iPhone com magnetismo forte. Produto novo e lacrado.",
        "detalhes_tecnicos": {
            "Compatibilidade": "iPhone 12 e posterior",
            "Potência": "15W",
            "Conector": "USB-C",
            "Peso": "45g"
        },
        "preco": "R$299,00",
        "imagem": "https://m.media-amazon.com/images/I/41UnSxjgXOL._AC_SL1000_.jpg"
    },
    {
        "id": "10",
        "nome": "Monitor Dell 24'' (Novo)",
        "descricao": "Monitor Full HD de 24 polegadas, ideal para trabalho e entretenimento. Produto novo com garantia.",
        "detalhes_tecnicos": {
            "Resolução": "1920x1080",
            "Frequência": "75Hz",
            "Tempo de Resposta": "5ms",
            "Conectividade": "HDMI, VGA"
        },
        "preco": "R$1.299,00",
        "imagem": "https://m.media-amazon.com/images/I/61aIuJu0M0L._AC_SL1000_.jpg"
    },
    {
        "id": "11",
        "nome": "Kindle Paperwhite (Usado)",
        "descricao": "Leitor de livros digitais com tela anti-reflexo. Produto usado em boas condições.",
        "detalhes_tecnicos": {
            "Tela": "6 polegadas E-Ink",
            "Armazenamento": "8GB",
            "Resistência": "IPX8 (à prova d'água)",
            "Bateria": "Até 6 semanas"
        },
        "preco": "R$499,00",
        "imagem": "https://m.media-amazon.com/images/I/718jJRdvDsL._AC_SL1500_.jpg"
    }
];

// Exportando o array de produtos
export default produtos;
