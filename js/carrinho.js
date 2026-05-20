function carregarCarrinho(){

    const carrinho =
        JSON.parse(
            localStorage.getItem("carrinho")
        ) || [];

    const container =
        document.getElementById(
            "carrinho-container"
        );

    const totalElemento =
        document.getElementById("total");

    container.innerHTML = "";

    let total = 0;

    carrinho.forEach((produto, index) => {

        total += produto.preco;

        const card =
            document.createElement("div");

        card.classList.add(
            "item-carrinho"
        );

        card.innerHTML = `
            <h3>${produto.nome}</h3>

            <p>
                R$ ${produto.preco.toFixed(2)}
            </p>

            <button
                onclick="removerItem(${index})"
            >
                Remover
            </button>
        `;

        container.appendChild(card);

    });

    totalElemento.innerText =
        `Total: R$ ${total.toFixed(2)}`;

}

function removerItem(index){

    const carrinho =
        JSON.parse(
            localStorage.getItem("carrinho")
        ) || [];

    carrinho.splice(index, 1);

    localStorage.setItem(
        "carrinho",
        JSON.stringify(carrinho)
    );

    carregarCarrinho();
}

carregarCarrinho();