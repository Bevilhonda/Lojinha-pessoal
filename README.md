# 🎁 Ingá Presentes

> Presentes especiais para pessoas especiais! Kits personalizados, perfumes importados e presentes criados com carinho.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## 📋 Sobre o Projeto

**Ingá Presentes** é um e-commerce responsivo especializado em venda de presentes personalizados, kits temáticos e perfumes importados. A plataforma oferece uma experiência de compra intuitiva com catálogo organizado por categorias, carrinho de compras funcional e interface moderna.

### ✨ Funcionalidades Principais

- ✅ Catálogo de produtos organizado por categorias
- ✅ Filtro por categorias (Mamãe, Papai, Kits Prontos, etc.)
- ✅ Carrinho de compras com cálculo automático
- ✅ Página inicial com banner promocional
- ✅ Layout responsivo e mobile-friendly
- ✅ Dados de produtos em JSON (fácil de atualizar)
- ✅ Interface moderna e intuitiva

---

## 🗂️ Estrutura do Projeto

```
Inga Presentes/
├── index.html              # Página principal
├── produtos.html           # Página de listagem de produtos
├── README.md              # Este arquivo
│
├── css/
│   └── style.css          # Estilos globais da aplicação
│
├── js/
│   ├── script.js          # Scripts da página inicial (carregamento de categorias)
│   ├── produtos.js        # Lógica de listagem e filtro de produtos
│   └── carrinho.js        # Gerenciamento do carrinho de compras
│
├── data/
│   ├── categorias.json    # Lista de categorias de produtos
│   └── produtos.json      # Banco de dados de produtos
│
└── imagens/               # Pasta para armazenar imagens dos produtos
```

---

## 🚀 Como Usar

### Requisitos
- Um navegador moderno (Chrome, Firefox, Safari, Edge)
- Nenhuma dependência externa necessária (projeto vanilla JavaScript)

### Instalação e Execução

1. **Clone ou baixe o projeto**
   ```bash
   git clone <seu-repositorio>
   cd "Inga Presentes"
   ```

2. **Abra no navegador**
   - Opção 1: Clique duas vezes em `index.html`
   - Opção 2: Use um servidor local (recomendado)
     ```bash
     # Com Python 3
     python -m http.server 8000
     
     # Com Node.js (http-server)
     npx http-server
     ```

3. **Acesse a aplicação**
   - Navegue em `http://localhost:8000` (ou o endereço exibido)

---

## 📁 Estrutura de Dados

### `data/categorias.json`
Define as categorias de produtos disponíveis:

```json
[
  {
    "id": 1,
    "nome": "Para Mamãe",
    "slug": "mamae"
  },
  {
    "id": 2,
    "nome": "Para Papai",
    "slug": "papai"
  }
]
```

### `data/produtos.json`
Contém todos os produtos com suas informações:

```json
[
  {
    "id": 1,
    "nome": "Kit Elegance Mamãe",
    "preco": 149.90,
    "categoria": "mamae",
    "imagem": "./imagens/produto1.jpg"
  }
]
```

**Campos obrigatórios:**
- `id`: Identificador único (número)
- `nome`: Nome do produto (string)
- `preco`: Preço em reais (número)
- `categoria`: Categoria do produto (string, deve corresponder a um slug em categorias.json)
- `imagem`: Caminho relativo da imagem (string)

---

## 🎨 Customização

### Adicionar Novos Produtos

1. Abra `data/produtos.json`
2. Adicione um novo objeto ao array:
   ```json
   {
     "id": 5,
     "nome": "Seu Produto",
     "preco": 199.90,
     "categoria": "mamae",
     "imagem": "./imagens/novo-produto.jpg"
   }
   ```
3. Salve o arquivo

### Adicionar Novas Categorias

1. Abra `data/categorias.json`
2. Adicione uma nova categoria:
   ```json
   {
     "id": 3,
     "nome": "Para Aniversário",
     "slug": "aniversario"
   }
   ```
3. Use esse `slug` nos produtos

### Modificar Estilos

Edite `css/style.css` para personalizar cores, fontes e layout.

---

## 📱 Páginas da Aplicação

### `index.html` - Página Inicial
- Banner promocional
- Seção de categorias carregadas dinamicamente
- Navegação principal

### `produtos.html` - Catálogo de Produtos
- Listagem de produtos por categoria
- Botões para adicionar ao carrinho
- Responsivo para todos os tamanhos de tela

---

## 💻 Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilização responsiva
- **JavaScript (Vanilla)** - Lógica da aplicação
- **JSON** - Armazenamento de dados
- **Fetch API** - Carregamento de dados

---

## 🔄 Fluxo de Funcionamento

```
1. Página carrega → script.js faz fetch em categorias.json
2. Categorias são exibidas como cards clicáveis
3. Usuário clica em categoria → redireciona para produtos.html?categoria=xxx
4. produtos.js carrega dados de produtos.json
5. Produtos são filtrados pela categoria
6. Usuário adiciona itens ao carrinho
7. carrinho.js gerencia os itens do carrinho
```

---

## 📝 Notas Importantes

- ⚠️ Assegure-se de usar um **servidor local** para evitar erros de CORS ao carregar JSONs
- 📦 As imagens devem estar na pasta `imagens/` com o nome correto
- 🔗 Os caminhos relativos devem corresponder exatamente aos valores em `produtos.json`

---

## 🤝 Contribuições

Sugestões e melhorias são bem-vindas! Sinta-se livre para:
- Reportar bugs
- Sugerir novos recursos
- Propor melhorias de código

---

## 📄 Licença

Este projeto está licenciado sob a MIT License - veja o arquivo LICENSE para detalhes.

---

## 📞 Contato

**Ingá Presentes**  
Presentes especiais para pessoas especiais  

> Desenvolvido com ❤️ para oferecer os melhores presentes

---
## 💻 Desenvolvido por : 
Marcelo Bevilacqua de Andrade

*Última atualização: Maio de 2026*
