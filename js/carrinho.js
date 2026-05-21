function carregarCarrinho(){

    const carrinho =
        JSON.parse(
            localStorage.getItem(
                "carrinho"
            )
        ) || [];

    const container =
        document.getElementById(
            "carrinho-container"
        );

    const totalElemento =
        document.getElementById(
            "total"
        );

    container.innerHTML = "";

    let total = 0;

    carrinho.forEach((produto, index) => {

        total +=
            produto.preco *
            produto.quantidade;

        const card =
            document.createElement("div");

        card.classList.add(
            "item-carrinho"
        );

        card.innerHTML = `
            <div>
                <h3>${produto.nome}</h3>

                <p>
                    Quantidade:
                    ${produto.quantidade}
                </p>

                <p>
                    R$
                    ${produto.preco.toFixed(2)}
                </p>
            </div>

            <div>

                <button
                    onclick="diminuirQuantidade(${index})"
                >
                    -
                </button>

                <button
                    onclick="aumentarQuantidade(${index})"
                >
                    +
                </button>

                <button
                    onclick="removerItem(${index})"
                >
                    Remover
                </button>

            </div>
        `;

        container.appendChild(card);

    });

    totalElemento.innerText =
        `Total: R$ ${total.toFixed(2)}`;
}

function aumentarQuantidade(index){

    const carrinho =
        JSON.parse(
            localStorage.getItem(
                "carrinho"
            )
        ) || [];

    carrinho[index].quantidade++;

    localStorage.setItem(
        "carrinho",
        JSON.stringify(carrinho)
    );

    carregarCarrinho();
}

function diminuirQuantidade(index){

    const carrinho =
        JSON.parse(
            localStorage.getItem(
                "carrinho"
            )
        ) || [];

    if(
        carrinho[index].quantidade > 1
    ){
        carrinho[index].quantidade--;
    }

    localStorage.setItem(
        "carrinho",
        JSON.stringify(carrinho)
    );

    carregarCarrinho();
}

function removerItem(index){

    const carrinho =
        JSON.parse(
            localStorage.getItem(
                "carrinho"
            )
        ) || [];

    carrinho.splice(index, 1);

    localStorage.setItem(
        "carrinho",
        JSON.stringify(carrinho)
    );

    carregarCarrinho();
}

function finalizarCompra(){

    const numeroWhatsApp =
        "5544999451734";

    const carrinho =
        JSON.parse(
            localStorage.getItem(
                "carrinho"
            )
        ) || [];

    if(carrinho.length === 0){

        alert(
            "Seu carrinho está vazio!"
        );

        return;
    }

    let mensagem =
`Olá! Quero finalizar minha compra 😊

Pedido:
`;

    let total = 0;

    carrinho.forEach(produto => {

        total +=
            produto.preco *
            produto.quantidade;

        mensagem +=
`• ${produto.nome} — ${produto.quantidade}x
`;

    });

    mensagem +=
`
Total: R$ ${total.toFixed(2)}

Endereço de entrega:

Nome do destinatário:
Rua:
Número:
Bairro:
Cidade:
CEP:

Forma de pagamento:
PIX
`;

    const link =
`https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

    window.open(link, "_blank");
    localStorage.removeItem(
    "carrinho"
);

carregarCarrinho();

atualizarContadorCarrinho();
}

document
    .getElementById(
        "finalizar-compra"
    )
    .addEventListener(
        "click",
        finalizarCompra
    );
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

carregarCarrinho();
atualizarContadorCarrinho();