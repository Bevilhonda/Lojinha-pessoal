
async function carregarProduto(){

    const params =
        new URLSearchParams(
            window.location.search
        );

    const id =
        Number(
            params.get("id")
        );

    const categoria =
    params
        .get("categoria")
        .toLowerCase();

const response =
    await fetch(
        `./data/categorias/${categoria}.json`
    );

    const produtos =
        await response.json();

    const produto =
        produtos.find(
            p => p.id === id
        );

        const relacionados =
    produtos
        .filter(p =>
            p.id !== id
        )
        .slice(0, 3);

    const container =
        document.getElementById(
            "produto-detalhe"
        );

    container.innerHTML = `
        <div class="produto-detalhe-card">

            <div class="produto-imagem">

                <img
                    src="${produto.imagem}"
                    alt="${produto.nome}"
                >

            </div>

            <div class="produto-info">

                <h2>
                    ${produto.nome}
                </h2>

                <p class="produto-preco">
                    R$ ${produto.preco.toFixed(2)}
                </p>

                <h3>
                    Descrição
                </h3>

                <p class="produto-descricao">
                    ${produto.descricao}
                </p>

                <h3>
                    Itens Inclusos
                </h3>

                <ul class="produto-itens">

                    ${produto.itens
                        .map(item =>
                            `<li>${item}</li>`
                        )
                        .join("")
                    }

                </ul>

                <button
                    onclick="adicionarCarrinho()"
                    class="botao-produto">

                    Adicionar ao Carrinho

                </button>

            </div>

        </div>
    `;

    window.produtoAtual =
        produto;

        const containerRelacionados =
    document.getElementById(
        "produtos-relacionados"
    );

relacionados.forEach(item => {

    const card =
        document.createElement(
            "div"
        );

    card.classList.add(
        "produto-card"
    );

    card.innerHTML = `
        <img
            src="${item.imagem}"
            alt="${item.nome}"
        >

        <h3>
            ${item.nome}
        </h3>

        <p>
            R$ ${item.preco.toFixed(2)}
        </p>
    `;

    card.addEventListener(
        "click",
        () => {

            window.location.href =
            `produto.html?id=${item.id}&categoria=${categoria}`;

        }
    );

    containerRelacionados.appendChild(
        card
    );

});
}

function adicionarCarrinho(){

    const carrinho =
        JSON.parse(
            localStorage.getItem(
                "carrinho"
            )
        ) || [];

    carrinho.push({
        ...window.produtoAtual,
        quantidade: 1
    });

    localStorage.setItem(
        "carrinho",
        JSON.stringify(carrinho)
    );

    const mensagem =
        document.createElement("div");

    mensagem.classList.add(
        "mensagem-carrinho"
    );

    mensagem.innerText =
        "Adicionado ao carrinho";

    document.body.appendChild(
        mensagem
    );

    setTimeout(() => {

        mensagem.classList.add(
            "mostrar"
        );

    }, 100);

    setTimeout(() => {

        mensagem.remove();

    }, 2500);
}

carregarProduto();