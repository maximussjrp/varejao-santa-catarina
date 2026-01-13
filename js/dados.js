/* ================================================
   VAREJÃO SANTA CATARINA - DADOS CONFIGURÁVEIS
   O proprietário pode editar este arquivo diretamente
   ou usar o painel administrativo (admin.html)
   ================================================ */

const DADOS_VAREJAO = {
    
    // ===== INFORMAÇÕES BÁSICAS DO ESTABELECIMENTO =====
    nome: "Varejão Santa Catarina",
    subtitulo: "Hortifruti",
    slogan: "Frescor e Qualidade Todo Dia na Sua Mesa",
    
    // ===== CONTATO (DADOS REAIS DO GOOGLE MAPS) =====
    contato: {
        telefone: "(17) 99144-7419",
        telefoneLink: "+5517991447419",
        whatsapp: "5517991447419",
        email: "", // Adicionar quando tiver
        instagram: "https://www.instagram.com/varejaosantacatarinaoficial/",
        instagramUser: "@varejaosantacatarinaoficial",
        facebook: "https://www.facebook.com/p/Varej%C3%A3o-Santa-Catarina-61578238776824/"
    },
    
    // ===== ENDEREÇO (DADOS REAIS DO GOOGLE MAPS) =====
    endereco: {
        rua: "Av. Danilo Galeazzi, 2295",
        bairro: "Jardim Seyon",
        cidade: "São José do Rio Preto",
        estado: "SP",
        cep: "15051-000", // Verificar CEP correto
        googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.5!2d-49.3748988!3d-20.77235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bdad2aefabc87b%3A0x5312c698935c081!2sVarej%C3%A3o%20Santa%20Catarina!5e0!3m2!1spt-BR!2sbr!4v1610000000000!5m2!1spt-BR!2sbr",
        googleMapsLink: "https://www.google.com/maps/place/Varej%C3%A3o+Santa+Catarina/@-20.77235,-49.3748988,17z"
    },
    
    // ===== HORÁRIO DE FUNCIONAMENTO =====
    // ⚠️ ATENÇÃO: Confirmar horários reais com o proprietário!
    horarios: {
        diasUteis: "Segunda a Sábado: 7h às 19h",
        domingo: "Domingo: 7h às 13h",
        observacao: "" // Ex: "Feriados consultar"
    },
    
    // ===== AVALIAÇÃO (DADOS REAIS DO GOOGLE) =====
    avaliacao: {
        nota: 4.7,
        estrelas: 5, // Arredondar para exibição
        fonte: "Google"
    },
    
    // ===== ESTATÍSTICAS =====
    // ⚠️ ATENÇÃO: Ajustar com dados reais do proprietário!
    estatisticas: {
        anosExperiencia: 0, // Colocar 0 para não exibir até confirmar
        clientesAtendidos: 0,
        variedadeProdutos: 0,
        exibirEstatisticas: false // Desabilitar até ter dados reais
    },
    
    // ===== SOBRE A EMPRESA =====
    sobre: {
        descricaoCurta: "Localizado no Jardim Seyon, oferecemos frutas, verduras e legumes frescos todos os dias para as famílias de São José do Rio Preto.",
        descricaoCompleta: "O Varejão Santa Catarina é referência em produtos hortifruti de qualidade. Trabalhamos com produtos frescos selecionados diariamente, garantindo o melhor para sua família.",
        diferenciais: [
            "Produtos frescos todos os dias",
            "Atendimento personalizado",
            "Ambiente limpo e organizado",
            "Fácil acesso e estacionamento"
        ]
    },
    
    // ===== CARACTERÍSTICAS DO LOCAL (CONFIRMADAS NO GOOGLE) =====
    caracteristicas: {
        acessibilidade: true,
        estacionamento: true,
        delivery: false, // Confirmar com proprietário
        aceitaCartao: true, // Confirmar com proprietário
        aceitaPix: true // Confirmar com proprietário
    }
};

// ===== OFERTAS DA SEMANA =====
// ⚠️ O proprietário deve atualizar semanalmente!
const OFERTAS_SEMANA = [
    {
        id: 1,
        ativo: true,
        nome: "Produto em Oferta",
        descricao: "Consulte disponibilidade",
        unidade: "Kg",
        precoOriginal: 0,
        precoOferta: 0,
        desconto: 0,
        imagem: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=300&h=300&fit=crop",
        destaque: false
    }
    // Adicionar mais ofertas aqui
];

// ===== CATEGORIAS DE PRODUTOS =====
const CATEGORIAS_PRODUTOS = [
    {
        id: 1,
        nome: "Frutas",
        icone: "🍎",
        descricao: "Frutas frescas e selecionadas",
        variedades: "Diversas variedades",
        imagem: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=400&h=300&fit=crop",
        ativo: true
    },
    {
        id: 2,
        nome: "Verduras",
        icone: "🥬",
        descricao: "Verduras frescas do dia",
        variedades: "Diversas variedades",
        imagem: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=300&fit=crop",
        ativo: true
    },
    {
        id: 3,
        nome: "Legumes",
        icone: "🥕",
        descricao: "Legumes frescos e saborosos",
        variedades: "Diversas variedades",
        imagem: "https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400&h=300&fit=crop",
        ativo: true
    },
    {
        id: 4,
        nome: "Temperos e Ervas",
        icone: "🌿",
        descricao: "Temperos frescos para sua cozinha",
        variedades: "Diversas variedades",
        imagem: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
        ativo: true
    },
    {
        id: 5,
        nome: "Ovos e Laticínios",
        icone: "🥚",
        descricao: "Ovos e derivados de leite",
        variedades: "Diversas variedades",
        imagem: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400&h=300&fit=crop",
        ativo: true
    },
    {
        id: 6,
        nome: "Mercearia",
        icone: "🛒",
        descricao: "Produtos de mercearia em geral",
        variedades: "Diversas variedades",
        imagem: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop",
        ativo: true
    }
];

// ===== DEPOIMENTOS DE CLIENTES =====
// ⚠️ Usar apenas depoimentos REAIS autorizados pelos clientes!
const DEPOIMENTOS = [
    // Exemplo de estrutura - substituir por depoimentos reais
    /*
    {
        id: 1,
        nome: "Nome do Cliente",
        texto: "Depoimento real do cliente...",
        nota: 5,
        clienteDesde: "2024",
        foto: "url_da_foto_ou_vazio",
        autorizado: true // Cliente autorizou uso do depoimento
    }
    */
];

// ===== CONFIGURAÇÕES DO SITE =====
const CONFIG_SITE = {
    exibirOfertas: true,
    exibirDepoimentos: false, // Desabilitar até ter depoimentos reais
    exibirEstatisticas: false, // Desabilitar até ter dados reais
    exibirNewsletter: true,
    corPrimaria: "#2E7D32",
    corSecundaria: "#FF9800"
};

// ===== FUNÇÃO PARA SALVAR DADOS (usado pelo painel admin) =====
function salvarDados(tipo, dados) {
    try {
        localStorage.setItem(`varejao_${tipo}`, JSON.stringify(dados));
        return true;
    } catch (e) {
        console.error('Erro ao salvar dados:', e);
        return false;
    }
}

// ===== FUNÇÃO PARA CARREGAR DADOS =====
function carregarDados(tipo, padrao) {
    try {
        const dados = localStorage.getItem(`varejao_${tipo}`);
        return dados ? JSON.parse(dados) : padrao;
    } catch (e) {
        console.error('Erro ao carregar dados:', e);
        return padrao;
    }
}

// Exportar para uso global
window.DADOS_VAREJAO = DADOS_VAREJAO;
window.OFERTAS_SEMANA = OFERTAS_SEMANA;
window.CATEGORIAS_PRODUTOS = CATEGORIAS_PRODUTOS;
window.DEPOIMENTOS = DEPOIMENTOS;
window.CONFIG_SITE = CONFIG_SITE;
