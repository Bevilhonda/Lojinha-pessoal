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

    <h3>
        ${produto.nome}
    </h3>

    <p>
        R$ ${produto.preco.toFixed(2)}
    </p>

    <div class="produto-acoes">

        <button
            class="btn-detalhes"
        >
            Ver detalhes
        </button>

        <button
            class="btn-adicionar"
        >
            Adicionar
        </button>

    </div>
`;

        card.addEventListener(
    "click",
    () => {

        window.location.href =
`produto.html?id=${produto.id}&categoria=${categoria.toLowerCase()}`;

    }
);

        const botaoAdicionar =
    card.querySelector(
        ".btn-adicionar"
    );

botaoAdicionar.addEventListener(
    "click",
    () => adicionarCarrinho(produto)
);

const botaoDetalhes =
    card.querySelector(
        ".btn-detalhes"
    );

botaoDetalhes.addEventListener(
    "click",
    () => {

        window.location.href =
        `produto.html?id=${produto.id}&categoria=${categoria}`;

    }
);


        container.appendChild(card);

    });

}

function adicionarCarrinho(produto){

    const carrinho =
        JSON.parse(
            localStorage.getItem("carrinho")
        ) || [];

    const produtoExistente =
        carrinho.find(item =>
            item.id === produto.id
        );

    if(produtoExistente){

        produtoExistente.quantidade++;

    }else{

        carrinho.push({
            ...produto,
            quantidade: 1
        });

    }

    localStorage.setItem(
        "carrinho",
        JSON.stringify(carrinho)
    );

    mostrarMensagemCarrinho();
    atualizarContadorCarrinho();
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

function atualizarContadorCarrinho(){

    const carrinho =
        JSON.parse(
            localStorage.getItem(
                "carrinho"
            )
        ) || [];

    const totalItens =
        carrinho.reduce(
            (total, item) =>
                total + item.quantidade,
            0
        );

    const contador =
        document.getElementById(
            "contador-carrinho"
        );

    if(contador){

        contador.innerText =
            `Carrinho (${totalItens})`;

    }

}

carregarProdutos();
atualizarContadorCarrinho();