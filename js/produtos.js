// ========================================
// TABELA DE PREÇOS - VAREJÃO SANTA CATARINA
// Atualizado em: Janeiro/2026
// ========================================

const PRODUTOS = {
    verduras: {
        nome: "Verduras",
        cor: "#2e7d32",
        icone: "🥬",
        itens: [
            { nome: "Acelga", preco: 9.90, unidade: "maço" },
            { nome: "Agrião", preco: 6.90, unidade: "maço" },
            { nome: "Alface (todos os tipos)", preco: 6.90, unidade: "maço" },
            { nome: "Alho Poró", preco: 5.90, unidade: "maço" },
            { nome: "Almeirão", preco: 6.90, unidade: "maço" },
            { nome: "Cheiro Verde", preco: 6.90, unidade: "maço" },
            { nome: "Coentro", preco: 6.90, unidade: "maço" },
            { nome: "Couve Escura", preco: 6.90, unidade: "maço" },
            { nome: "Couve Manteiga", preco: 6.90, unidade: "maço" },
            { nome: "Espinafre", preco: 6.90, unidade: "maço" },
            { nome: "Folha de Beterraba", preco: 6.00, unidade: "encomenda" },
            { nome: "Hortelã", preco: 6.90, unidade: "maço" },
            { nome: "Manjericão", preco: 7.69, unidade: "pct" },
            { nome: "Mostarda Vila Ipiranga", preco: 6.90, unidade: "maço" },
            { nome: "Rabanete", preco: 6.90, unidade: "maço" },
            { nome: "Rúcula", preco: 6.90, unidade: "maço" },
            { nome: "Salsão", preco: 16.00, unidade: "maço" },
            { nome: "Salsinha", preco: 6.90, unidade: "maço" }
        ]
    },
    legumes: {
        nome: "Legumes",
        cor: "#f9a825",
        icone: "🥕",
        itens: [
            { nome: "Abóbora Brasil", preco: 9.79, unidade: "Kg" },
            { nome: "Abóbora Cabotiã", preco: 5.98, unidade: "Kg" },
            { nome: "Abóbora Cabotiã (descascada)", preco: 7.99, unidade: "uni" },
            { nome: "Abóbora Italiana", preco: 9.79, unidade: "Kg" },
            { nome: "Abóbora Italiana (bandeja 500g)", preco: 4.90, unidade: "uni" },
            { nome: "Abóbora Paulista", preco: 9.98, unidade: "Kg" },
            { nome: "Aipim", preco: 14.98, unidade: "Kg", emFalta: true },
            { nome: "Aipim (bandeja 500g)", preco: 9.90, unidade: "uni" },
            { nome: "Alho", preco: 39.90, unidade: "Kg" },
            { nome: "Batata Doce", preco: 6.96, unidade: "Kg" },
            { nome: "Batata Extra", preco: 4.98, unidade: "Kg" },
            { nome: "Batata Pirulito", preco: 6.79, unidade: "Kg" },
            { nome: "Batata Yacon", preco: 14.96, unidade: "Kg" },
            { nome: "Berinjela", preco: 7.96, unidade: "Kg" },
            { nome: "Beterraba", preco: 7.96, unidade: "Kg" },
            { nome: "Brocolís Comum/Ramoso", preco: 9.90, unidade: "peça" },
            { nome: "Brocolís Ninja", preco: 6.99, unidade: "peça" },
            { nome: "Caxí", preco: 2.98, unidade: "Kg", emFalta: true },
            { nome: "Cebola Extra", preco: 4.96, unidade: "Kg" },
            { nome: "Cebola Miúda (para conserva)", preco: 6.98, unidade: "Kg" },
            { nome: "Cebola Roxa", preco: 9.79, unidade: "Kg" },
            { nome: "Cenoura Extra", preco: 7.96, unidade: "Kg" },
            { nome: "Chuchu", preco: 12.79, unidade: "Kg" },
            { nome: "Couve Flor", preco: 9.90, unidade: "peça" },
            { nome: "Couve Picada", preco: 9.79, unidade: "pct" },
            { nome: "Gengibre", preco: 19.79, unidade: "Kg" },
            { nome: "Inhame", preco: 16.79, unidade: "Kg" },
            { nome: "Jiló", preco: 12.79, unidade: "Kg" },
            { nome: "Mandioca Caixa", preco: 80.00, unidade: "caixa" },
            { nome: "Mandioca com Casca", preco: 5.96, unidade: "Kg" },
            { nome: "Mandioca Descascada", preco: 6.90, unidade: "Kg" },
            { nome: "Mandioca Embalada à Vácuo", preco: 8.79, unidade: "uni" },
            { nome: "Milho Bandeja", preco: 7.90, unidade: "uni" },
            { nome: "Pepino Caipira", preco: 9.69, unidade: "Kg" },
            { nome: "Pepino Japonês", preco: 12.79, unidade: "Kg" },
            { nome: "Pimenta Cambuci (bandeja 300g)", preco: 4.99, unidade: "uni" },
            { nome: "Pimenta Dedo de Moça", preco: 24.90, unidade: "Kg" },
            { nome: "Pimenta Doce (bandeja 300g)", preco: 4.99, unidade: "uni" },
            { nome: "Pimentão Amarelo", preco: 24.90, unidade: "Kg" },
            { nome: "Pimentão Verde", preco: 14.98, unidade: "Kg" },
            { nome: "Pimentão Vermelho", preco: 16.79, unidade: "Kg" },
            { nome: "Quiabo", preco: 16.96, unidade: "Kg" },
            { nome: "Quiabo (bandeja 250g)", preco: 5.90, unidade: "uni" },
            { nome: "Repolho Roxo", preco: 9.79, unidade: "Kg" },
            { nome: "Repolho Verde", preco: 4.98, unidade: "Kg" },
            { nome: "Vagem", preco: 19.79, unidade: "Kg" },
            { nome: "Vagem (bandeja 250g)", preco: 7.99, unidade: "uni" }
        ]
    },
    frutas: {
        nome: "Frutas",
        cor: "#1565c0",
        icone: "🍎",
        itens: [
            { nome: "Abacate", preco: 9.79, unidade: "Kg" },
            { nome: "Abacaxi", preco: 9.90, unidade: "peça" },
            { nome: "Ameixa", preco: 19.98, unidade: "Kg" },
            { nome: "Amora (bandeja)", preco: null, unidade: "uni", emFalta: true },
            { nome: "Atemoia", preco: null, unidade: "Kg", emFalta: true },
            { nome: "Banana de Fritar", preco: 12.79, unidade: "Kg" },
            { nome: "Banana Maçã", preco: 12.79, unidade: "Kg" },
            { nome: "Banana Nanica", preco: 6.79, unidade: "Kg" },
            { nome: "Banana Nanica (caixa)", preco: null, unidade: "consultar" },
            { nome: "Banana Prata", preco: 9.79, unidade: "Kg" },
            { nome: "Caju (bandeja)", preco: 16.90, unidade: "uni" },
            { nome: "Caqui (bandeja)", preco: null, unidade: "uni", emFalta: true },
            { nome: "Caqui Chocolate", preco: null, unidade: "Kg", emFalta: true },
            { nome: "Cereja (pacote)", preco: 25.00, unidade: "un" },
            { nome: "Figo (bandeja)", preco: 29.90, unidade: "uni" },
            { nome: "Goiaba", preco: 9.69, unidade: "Kg" },
            { nome: "Jabuticaba (bandeja)", preco: 5.00, unidade: "uni", emFalta: true },
            { nome: "Kiwi", preco: 39.90, unidade: "Kg" },
            { nome: "Laranja (caixa 20Kg)", preco: 75.00, unidade: "caixa" },
            { nome: "Laranja (pacote 3,5Kg)", preco: 14.90, unidade: "pct" },
            { nome: "Laranja (saco 10Kg)", preco: 45.00, unidade: "saco" },
            { nome: "Laranja Ilhoa", preco: 9.79, unidade: "Kg" },
            { nome: "Laranja Lima da Pérsia", preco: 6.79, unidade: "Kg", emFalta: true },
            { nome: "Laranja Pera Rio", preco: 4.96, unidade: "Kg" },
            { nome: "Lichia", preco: 16.90, unidade: "bandeja" },
            { nome: "Limão Cravo", preco: 9.79, unidade: "Kg" },
            { nome: "Limão Siciliano", preco: 16.79, unidade: "Kg" },
            { nome: "Limão Taiti", preco: 6.79, unidade: "Kg" },
            { nome: "Maçã Argentina", preco: 19.49, unidade: "Kg" },
            { nome: "Maçã Fuji", preco: 19.49, unidade: "Kg" },
            { nome: "Maçã Miúda (Gala)", preco: 14.96, unidade: "Kg" },
            { nome: "Maçã Verde", preco: 17.96, unidade: "Kg" },
            { nome: "Mamão Formosa", preco: 9.79, unidade: "Kg" },
            { nome: "Mamão Papaia", preco: 16.96, unidade: "Kg" },
            { nome: "Manga Espada", preco: 9.98, unidade: "Kg" },
            { nome: "Manga Palmer", preco: 9.98, unidade: "Kg" },
            { nome: "Manga Tommy", preco: 9.98, unidade: "Kg" },
            { nome: "Maracujá", preco: 12.79, unidade: "Kg" },
            { nome: "Melancia", preco: 4.79, unidade: "Kg" },
            { nome: "Melão Cepi", preco: 9.96, unidade: "Kg" },
            { nome: "Melão Gaia", preco: 7.90, unidade: "uni" },
            { nome: "Melão Rei", preco: 14.79, unidade: "Kg" },
            { nome: "Mexirica", preco: 12.79, unidade: "Kg" },
            { nome: "Mirtilo (bandeja)", preco: 12.90, unidade: "bd" },
            { nome: "Morango (bandeja)", preco: 9.90, unidade: "uni" },
            { nome: "Morango (bandeja especial)", preco: null, unidade: "uni", emFalta: true },
            { nome: "Nectarina", preco: null, unidade: "Kg", emFalta: true },
            { nome: "Pêra Argentina", preco: 19.98, unidade: "Kg" },
            { nome: "Pêra Portuguesa", preco: 14.79, unidade: "Kg", emFalta: true },
            { nome: "Pêssego", preco: 12.98, unidade: "Kg" },
            { nome: "Physalis (bandeja)", preco: 12.90, unidade: "uni" },
            { nome: "Pinha", preco: 29.90, unidade: "Kg" },
            { nome: "Pitaya", preco: 29.90, unidade: "Kg" },
            { nome: "Romã", preco: 19.90, unidade: "cada" },
            { nome: "Tâmara (bandeja)", preco: 12.00, unidade: "uni" },
            { nome: "Tangerina", preco: 9.79, unidade: "Kg" },
            { nome: "Tangerina Morgote", preco: null, unidade: "Kg", emFalta: true },
            { nome: "Tomate Cereja (bandeja)", preco: 6.90, unidade: "uni" },
            { nome: "Tomate Extra", preco: 9.96, unidade: "Kg" },
            { nome: "Uva (bandeja)", preco: 9.90, unidade: "un" },
            { nome: "Uva Itália", preco: 18.79, unidade: "Kg" },
            { nome: "Uva Niágara", preco: 18.79, unidade: "Kg" },
            { nome: "Uva Niágara (caixa 1,5Kg)", preco: 22.00, unidade: "cx" },
            { nome: "Uva Niágara (caixa 5Kg)", preco: 40.00, unidade: "cx", emFalta: true },
            { nome: "Uva Rubi", preco: 18.79, unidade: "Kg" },
            { nome: "Uva S/Semente (bandeja 500g)", preco: 13.90, unidade: "uni" },
            { nome: "Uva Sem Semente", preco: 34.90, unidade: "Kg" }
        ]
    }
};

// Função para formatar preço
function formatarPreco(preco) {
    if (preco === null) return "Consultar";
    return `R$ ${preco.toFixed(2).replace('.', ',')}`;
}

// Função para renderizar produtos
function renderizarProdutos() {
    const container = document.getElementById('tabela-precos');
    if (!container) return;

    let html = '';

    for (const [categoria, dados] of Object.entries(PRODUTOS)) {
        html += `
            <div class="categoria-precos" id="cat-${categoria}">
                <div class="categoria-header" style="background-color: ${dados.cor}">
                    <span class="categoria-icone">${dados.icone}</span>
                    <h3>${dados.nome}</h3>
                    <span class="categoria-count">${dados.itens.length} produtos</span>
                </div>
                <div class="produtos-grid">
        `;

        dados.itens.forEach(produto => {
            const emFaltaClass = produto.emFalta ? 'em-falta' : '';
            const emFaltaBadge = produto.emFalta ? '<span class="badge-falta">EM FALTA</span>' : '';
            
            html += `
                <div class="produto-card ${emFaltaClass}">
                    <div class="produto-nome">${produto.nome}</div>
                    <div class="produto-preco">
                        ${formatarPreco(produto.preco)}
                        <span class="produto-unidade">/${produto.unidade}</span>
                    </div>
                    ${emFaltaBadge}
                </div>
            `;
        });

        html += `
                </div>
            </div>
        `;
    }

    container.innerHTML = html;
}

// Função para buscar produtos
function buscarProdutos(termo) {
    const termoLower = termo.toLowerCase();
    const resultados = [];

    for (const [categoria, dados] of Object.entries(PRODUTOS)) {
        dados.itens.forEach(produto => {
            if (produto.nome.toLowerCase().includes(termoLower)) {
                resultados.push({
                    ...produto,
                    categoria: dados.nome,
                    cor: dados.cor
                });
            }
        });
    }

    return resultados;
}

// Exportar para uso global
window.PRODUTOS = PRODUTOS;
window.formatarPreco = formatarPreco;
window.renderizarProdutos = renderizarProdutos;
window.buscarProdutos = buscarProdutos;
