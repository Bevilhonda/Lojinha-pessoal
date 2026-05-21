async function carregarProdutos(){

    const params =
        new URLSearchParams(window.location.search);

    const categoria =
        params.get("categoria");

    const resposta =
        await fetch(
            `./data/categorias/${categoria}.json`
        );

    const produtos =
        await resposta.json();

    const container =
        document.getElementById(
            "produtos-container"
        );

    const titulo =
        document.getElementById(
            "titulo-categoria"
        );

    titulo.innerText =
        categoria.replace("-", " ");

    produtos.forEach(produto => {

        const card =
            document.createElement("div");

        card.classList.add("produto-card");

        card.innerHTML = `
            <img
                src="${produto.imagem}"
                alt="${produto.nome}"
            >

            <h3>${produto.nome}</h3>

            <p>
                R$ ${produto.preco.toFixed(2)}
            </p>

            <button>
                Adicionar
            </button>
        `;

        const botao =
            card.querySelector("button");

        botao.addEventListener(
            "click",
            () => adicionarCarrinho(produto)
        );

        container.appendChild(card);

    });

}

function adicionarCarrinho(produto){

    const carrinho =
        JSON.parse(
            localStorage.getItem("carrinho")
        ) || [];

    carrinho.push(produto);

    localStorage.setItem(
        "carrinho",
        JSON.stringify(carrinho)
    );

    mostrarMensagemCarrinho();
}

function mostrarMensagemCarrinho(){

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

        mensagem.classList.add("mostrar");

    }, 100);

    setTimeout(() => {

        mensagem.remove();

    }, 2500);

}

carregarProdutos();