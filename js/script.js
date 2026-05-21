async function carregarCategorias(){

    const resposta = await fetch("./data/categorias.json");
    const categorias = await resposta.json();

    const container =
        document.getElementById("categorias-container");

    categorias.forEach(categoria => {

        const card = document.createElement("div");

        card.classList.add("categoria-card");

        card.innerHTML = `
            <h3>${categoria.nome}</h3>
        `;

        card.addEventListener("click", () => {

            window.location.href =
            `produtos.html?categoria=${categoria.slug}`;

        });

        container.appendChild(card);

    });

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

atualizarContadorCarrinho();

carregarCategorias();