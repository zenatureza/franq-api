# franq-api

Api que prove dados financeiros, como preços de moedas e ações, mediante a autenticação.

## Rodando a aplicação

Para executar a aplicação em modo de desenvolvimento siga os passos abaixo.

## Variáveis ambiente

Crie um arquivo .env na raíz do projeto chamado '.env'. Para adicionar as variáveis ambiente necessárias, basta copiar o conteúdo do .env.example e atribuir valores a cada uma.

- NODE_ENV: Define o ambiente em que o programa está rodando
- APP_SECRET: Define o segredo a ser usado para geração e validação dos tokens jwt
- DATABASE_NAME: Define o nome do banco de dados a ser utilizado
- LOGGER_ALL_FILE: Especifica o caminho onde os arquivos de log de qualquer tipo serão armazenados (e.g. logs/all.log)
- LOGGER_ERRORS_FILE: Especifica o caminho onde os arquivos de log de erro serão armazenados
- HGFINANCE_BASE_URL: Especifica o endpoint para obtenção de dados https://api.hgbrasil.com/finance
- HGFINANCE_KEY: Especifica uma chave criada no hgbrasil (necessária para as requests)
- AWESOME_API_BASE_URL: Endpoint para obtenção de dados históricos de moedas da awesome api

## Como rodar a api [desenvolvimento]

Primeiramente instale o gerenciador de pacotes yarn (https://classic.yarnpkg.com/en/docs/install/), o Node.js (https://nodejs.org/en/download/) e o git (https://git-scm.com/downloads). Depois em um terminal rode os seguintes comandos para executar o programa:

```shell
# Baixa o repositório
git clone https://github.com/zenatureza/franq-api

# Acessa o diretório
cd franq-api

# Instala os pacotes necessários
yarn install

# Gera o arquivo necessário para as migrations
cp ormconfig.example.dev.json ormconfig.json

# Inicializa o banco de dados
yarn typeorm migration:run

# Roda o servidor de desenvolvimento
yarn dev:server
```

## Testes

Para rodar os testes basta executar o seguinte comando na raiz do projeto:

```shell
yarn test
```

## Endpoints disponíveis

- [POST] http://localhost:3333/users
  Cria um novo usuário:

request body:

```json
{
  "email": "myemail@provider.com",
  "password": "mypassword",
  "name": "username"
}
```

- [POST] http://localhost:3333/sessions
  Se autentica no sistema:

request body:

```json
{
  "email": "myemail@provider.com",
  "password": "mypassword"
}
```

- [GET] http://localhost:3333/hgfinance
  Obtém dados do dia da api HGFinance

necessário incluir o header:
`Authorization: Bearer ${token}`

- [GET] http://localhost:3333/currencies/:currency/:dayNumbers
  Obtém dados históricos de 'dayNumbers' dias de uma moeda (currency), em relação ao real. Exemplo de requisição para obter dados históricos do dólar de 15 dias até hoje:

  http://localhost:3333/USD/15

necessário incluir o header:
`Authorization: Bearer ${token}`

- [GET] http://localhost:3333/stocks/:stock?startDate={yyyy-MM-DD}&endDate={yyyy-MM-DD}
  Obtém dados históricos de compra e venda, entre 'startDate' e 'endDate', de uma ação (stock). Exemplo de requisição para obter dados históricos da ação de código 'CAC':

  http://localhost:3333/stocks/CAC?startDate=2021-01-01&endDate=2021-02-23

necessário incluir o header:
`Authorization: Bearer ${token}`
