# Drip Store

Aplicação frontend de uma loja virtual desenvolvida em React com Vite. O projeto apresenta páginas de início, listagem e detalhes de produtos, além de busca, filtros, ordenação e galeria de imagens.

## Pré-requisitos

Antes de executar o projeto, instale:

- Node.js versão 20 ou superior
- npm, instalado junto com o Node.js
- Git

Para confirmar as versões no terminal:

```bash
node --version
npm --version
git --version
```

## Como executar o projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/jhoomeeg/projeto-digital-store.git
cd projeto-digital-store
```

Caso o projeto já tenha sido recebido em uma pasta ZIP, extraia os arquivos e abra o terminal dentro da pasta do projeto.

### 2. Instalar as dependências

```bash
npm install
```

### 3. Iniciar o servidor de desenvolvimento

```bash
npm run dev
```

Acesse a URL exibida no terminal, normalmente:

```text
http://localhost:5173
```

Para permitir o acesso pela rede local:

```bash
npm run dev -- --host
```

## Scripts disponíveis

| Comando | Função |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera a versão pronta para publicação na pasta `dist` |
| `npm run lint` | Verifica o código com ESLint |
| `npm run preview` | Executa localmente a versão gerada pelo build |

## Verificação antes da entrega

Execute os comandos abaixo:

```bash
npm run lint
npm run build
npm run preview
```

O projeto passa pela validação de lint e pela compilação de produção.

## Rotas disponíveis

| Caminho | Página |
|---|---|
| `/` | Página inicial |
| `/produtos` | Listagem de produtos |
| `/products` | Rota compatível da listagem |
| `/produtos?filter=tenis` | Listagem filtrada pela busca |
| `/product/1` | Detalhes do produto |
| Rota inexistente | Página de erro 404 |

## Funcionalidades

- Layout reutilizável com cabeçalho e rodapé
- Navegação ativa com `NavLink`
- Busca por nome, categoria ou marca
- Ordenação por menor e maior preço
- Filtros por marca e gênero
- Galeria com setas, miniaturas e navegação pelo teclado
- Produtos em alta e produtos recomendados
- Opções de tamanho e cor
- Link direto para os detalhes de cada produto
- Página responsiva para computador e dispositivos móveis
- Página 404 para rotas inválidas

## Estrutura principal

```text
src/
├── assets/
├── components/
│   ├── BuyBox/
│   ├── FilterGroup/
│   ├── Footer/
│   ├── Gallery/
│   ├── header/
│   ├── logo/
│   ├── ProductCard/
│   ├── ProductListing/
│   ├── ProductOptions/
│   └── Section/
├── data/
│   └── products.js
├── pages/
│   ├── HomePage.jsx
│   ├── Layout.jsx
│   ├── NotFoundPage.jsx
│   ├── ProductListingPage.jsx
│   └── ProductViewPage.jsx
├── utils/
│   └── formatPrice.js
├── App.jsx
└── main.jsx
```

## Dados dos produtos

Os produtos utilizados pelo frontend estão temporariamente centralizados em:

```text
src/data/products.js
```

Cada produto possui identificador, nome, imagem, preço, preço com desconto, categoria, marca, gênero, referência, tamanhos e cores. Essa estrutura permite a substituição futura dos dados por uma API sem alterar o componente visual.

Exemplo de objeto:

```js
{
  id: 1,
  name: "K-Swiss V8 - Masculino",
  image: "/product-thumb-1.jpeg",
  price: 200,
  priceDiscount: 149.9,
  category: "Tênis",
  brand: "K-Swiss",
  gender: "Masculino",
  reference: "38416711-1",
  sizes: ["39", "40", "41", "42", "43"],
  colors: ["#1F1F1F", "#C92071", "#B5B6F2"]
}
```

## Tecnologias utilizadas

- React 19
- React Router DOM
- Vite
- JavaScript
- CSS
- ESLint
- React Icons

## Observação sobre integração com backend

Este projeto está preparado para substituir os dados locais por respostas de uma API. Os componentes recebem os dados por propriedades, enquanto as páginas podem passar a buscar os produtos por meio de `fetch` ou de uma biblioteca HTTP.
