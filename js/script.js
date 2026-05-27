emailjs.init(
    "qW4j-XQ2oeHDiH32q"
);

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
const formulario =
    document.getElementById(
        "form-contato"
    );

if(formulario){

    formulario.addEventListener(
        "submit",
        function(event){

            event.preventDefault();

            const nome =
    document.getElementById(
        "nome"
    ).value;

const email =
    document.getElementById(
        "email"
    ).value;

const mensagem =
    document.getElementById(
        "mensagem"
    ).value;

/* VALIDAÇÃO NOME */
if(nome.trim().length < 3){

    mostrarMensagemContato(
        "Digite um nome válido."
    );

    return;
}

/* VALIDAÇÃO EMAIL */
const emailValido =
/^[a-zA-Z0-9._%+-]+@(gmail|hotmail|outlook|yahoo|icloud)\.(com|com\.br)$/;

if(!emailValido.test(email)){

    mostrarMensagemContato(
        "Digite um email válido."
    );

    return;
}

/* VALIDAÇÃO MENSAGEM */
if(mensagem.trim().length < 10){

    mostrarMensagemContato(
        "Escreva uma mensagem maior."
    );

    return;
}
            emailjs.send(
                "service_wqkgv2d",
                "template_zr4zk7r",
                {
                    name: nome,
                    email: email,
                    message: mensagem
                }
            )
            .then(() => {

                mostrarMensagemContato(
                    "Mensagem enviada com sucesso!"
                );

                formulario.reset();

            })
            .catch(() => {

                mostrarMensagemContato(
                    "Erro ao enviar mensagem."
                );

            });

        }
    );

}

function mostrarMensagemContato(texto){

    const mensagem =
        document.createElement(
            "div"
        );

    mensagem.classList.add(
        "mensagem-carrinho"
    );

    mensagem.innerText =
        texto;

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

atualizarContadorCarrinho();

carregarCategorias();

