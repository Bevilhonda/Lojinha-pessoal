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
        document.getElementById("produtos-container");

    const titulo =
        document.getElementById("titulo-categoria");

    titulo.innerText =
        categoria.replace("-", " ");

    produtos.forEach(produto => {

        const card =
            document.createElement("div");

        card.classList.add("produto-card");

        card.innerHTML = `
            <img src="${produto.imagem}"
                 alt="${produto.nome}">

            <h3>${produto.nome}</h3>

            <p>
                R$
                ${produto.preco.toFixed(2)}
            </p>

            <button>
                Adicionar
            </button>
        `;

        container.appendChild(card);

    });

}

carregarProdutos();