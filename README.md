# 🎁 Ingá Perfumes

Perfumes especiais para pessoas queridas — frontend estático do catálogo e carrinho.

---

## 📋 Sobre o Projeto

Projeto front-end em HTML/CSS/JS que exibe categorias e produtos a partir de arquivos JSON locais, com carrinho de compras gerenciado no client-side.

### Funcionalidades

- Catálogo por categorias
- Listagem de produtos e filtro por categoria
- Carrinho funcional (adicionar/remover, cálculo simples)
- Layout responsivo
- Dados organizados em JSONs dentro da pasta `data/categorias`

---

## 🗂️ Estrutura do Projeto (atual)

```
Inga Perfumes/
├── index.html
├── produtos.html
├── carrinho.html
├── README.md
├── css/
│   └── style.css
├── js/
│   ├── script.js
│   ├── produtos.js
│   └── carrinho.js
├── data/
│   ├── categorias.json         # lista de categorias
│   └── categorias/             # arquivos JSON por categoria (ex.: aniversario.json)
│       ├── aniversario.json
│       ├── kits-prontos.json
│       ├── mamae.json
│       ├── namorados.json
│       ├── natal.json
│       └── papai.json
└── imagens/                    # imagens dos produtos
```

---

## 🚀 Como rodar localmente

### Requisitos
- Navegador moderno
- Servidor HTTP local (recomendado para evitar problemas de CORS)

### Opções

1) Abrir `index.html` diretamente no navegador (funciona em muitos casos).

2) Rodar um servidor local (recomendado):

```bash
# Com Python 3
python -m http.server 8000

# Com Node (http-server)
npx http-server -p 8000
```

Abra `http://localhost:8000` no navegador.

---

## 📁 Como os dados estão organizados

- `data/categorias.json`: arquivo com a lista de categorias (id, nome, slug).
- `data/categorias/*.json`: arquivos por categoria com os produtos daquela categoria.

Exemplo de um arquivo em `data/categorias/mamae.json`:

```json
[
  {
     "id": 1,
        "nome": "Femme Soleil - Eau de toilette - Di Bevilacqua Parfum",
        "preco": 1490.90,
        "categoria": "mamae",
        "imagem": "./imagens/mamae/Femme Soleil.png",
        "descricao": "Fragrância suave sofisticada para mulheres.",
        "itens": [
        "Perfume importado",
        "Caixa presente",
        "Embalagem premium"
    ]
  }
]
```

Observações:
- Cada arquivo de categoria deve conter um array de produtos.
- Campos comuns: `id`, `nome`, `preco`, `imagem`, `descricao`,`itens`.

---

## ✍️ Como adicionar/editar conteúdo

- Adicionar categoria: editar `data/categorias.json` e, opcionalmente, criar `data/categorias/novo-slug.json` com os produtos.
- Adicionar produto: abrir o JSON da categoria correspondente em `data/categorias/` e acrescentar um objeto ao array.
- Imagens: coloque os arquivos em `imagens/` e use caminhos relativos nos JSONs.

---

## 🖼️ Páginas principais

- `index.html`: página inicial com listagem/links para categorias
- `produtos.html`: lista de produtos por categoria
- `carrinho.html`: visualização do carrinho e finalização (front-end)

---

## 💻 Tecnologias

- HTML5, CSS3, JavaScript (Vanilla)
- Dados em JSON carregados via Fetch API

---

## ⚠️ Observações

- Recomenda-se usar servidor local para carregar JSONs sem bloqueios de CORS.
- Verifique os caminhos das imagens nos JSONs (relativos à pasta onde os arquivos são servidos).

---

## 🤝 Contribuições

Abra uma issue ou envie um pull request com melhorias, correções ou novos produtos.

---

## 📄 Licença

Verifique o arquivo LICENSE para detalhes (MIT sugerida).

---

## 📞 Contato

Desenvolvido por Marcelo Bevilacqua de Andrade — Maio de 2026

