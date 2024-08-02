# BrainAG - Desafio Técnico Desenvolvedor Node.js Sênior
Aplicação front-end para cadastro de produtores e propriedades rurais

## Instalação
Clone o repositório
```shell
git clone https://github.com/alef-carvalho/desafio-tecnico-brain-ag-frontend.git
```

Faça uma cópia do arquivo de configuração
```shell
cd desafio-tecnico-brain-ag-frontend/  && cp .env.example .env
```

Insira a URL da API no arquivo de configuração
```shell
nano .env
```
```dotenv
VITE_API_BASE_URL="http://127.0.0.1:3000"
```

## Instalação

Execute a build da imagem Docker. Ao finalizar a aplicação estará disponível no endereço http://localhost:80
```shell
docker compose up -d
```

## Versões utilizadas
- **Node.js** (16.18.0)
- **React.js** (18.2.0)
- **Vite** (5.2.0)

## Demonstração

1 - Lista de Produtores:
![screenshot](https://raw.githubusercontent.com/alef-carvalho/desafio-tecnico-brain-ag-frontend/development/examples/lista_produtores.jpeg)

2 - Cadastro de Produtor:
![screenshot](https://raw.githubusercontent.com/alef-carvalho/desafio-tecnico-brain-ag-frontend/development/examples/cadastro_produtor.jpeg)

3 - Edição de Produtor:
![screenshot](https://raw.githubusercontent.com/alef-carvalho/desafio-tecnico-brain-ag-frontend/development/examples/edicao_produtor.jpeg)

4 - Lista de Propriedades:
![screenshot](https://raw.githubusercontent.com/alef-carvalho/desafio-tecnico-brain-ag-frontend/development/examples/lista_propriedades.jpeg)

5 - Cadastro de Propriedade:
![screenshot](https://raw.githubusercontent.com/alef-carvalho/desafio-tecnico-brain-ag-frontend/development/examples/cadastro_propriedade.jpeg)

6 - Edição de Propriedade:
![screenshot](https://raw.githubusercontent.com/alef-carvalho/desafio-tecnico-brain-ag-frontend/development/examples/edicao_propriedade.jpeg)
