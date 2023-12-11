# Front End (UI) da Aplicação Margem Certa

Este repositório contém o código-fonte da interface do usuário (UI) da aplicação Margem Certa, uma ferramenta para gerenciamento de dados relacionados à Margem de Contribuição.

## Tecnologias Utilizadas

- **API Margem Certa:** [mc_api](https://github.com/alexandrefelgueiras/mc_api)
- **HTML:** Linguagem de marcação para estruturar a página web.
- **CSS:** Folhas de estilo para estilizar a apresentação da página.
- **JavaScript:** Linguagem de programação para interatividade e manipulação de dados na interface.

## O Projeto

Utilizamos conceitos básicos de HTML, CSS e JavaScript, prezando pela simplicidade e focando no que é essencial.

A estrutura de documentos HTML é modular, o documento Templates.html é comum a todas as rotinas previstas então ele fica como a parte que se repete e os outros documentos novo.html, ver.html, deletar.html e home.html sao partes dinâmicas que carregam na página conforme o uso da aplicação. Tomamos o cuidado ainda de deixar campos editaveis apenas no formulario novo.html, dando coerencia ao processo.

O código JavaScript foi usado apenas para mostrar os calculos de margem de contribuição absoluta e relativa que ocorre de forma automática, também usamos o JavaScript para manipular os dados e adequar ao formato de entrada na API (JSON), ou de forma reversa para ler os dados disponibilizados pela API (JSON) e carregar corretamente a informação no front-end. 

## Funcionalidades Principais

1. **Listagem de Itens:**
   - A interface inicial apresenta uma lista completa de todos os itens da base de dados, fornecendo uma visão geral dos registros disponíveis. Sempre que o usuário acessar o ícone <img src="imgDocs/home.svg" width=20>, voltará para a página inicial.

2. **Detalhes de um Item Específico:**
   - Os detalhes de um item específico podem ser visualizados clicando-se no ícone <img src="imgDocs/view.svg" width=20> do item desejado. Essa funcionalidade oferece uma visualização mais detalhada das informações do item.

3. **Adição de Novo Item:**
   - O icone <img src="imgDocs/add.svg" width=20> abre um formulário intuitivo permite a adição de novos itens à base de dados. O usuário pode entao inserir informações de nome do cliente, descrição do produto, número da proposta e do item, preço e custo, a Margem de Contribuição relativa e absoluta é calculada automaticamente. Para enviar os dados a base de dados basta clicar em <img src="imgDocs/send.svg" width=20>.

4. **Exclusão de Item:**
   - Cada item exibido possui a opção de exclusão através do ícone <img src="imgDocs/delete.svg" width=20>. Ao selecionar essa opção, a aplicacão abre um formulario com os detalhes do item a ser excluso da base de dados, após clicar em <img src="imgDocs/exclude.svg" width=20> o item é deletado da base de dados e volta a pagina inicial.

## Como Utilizar

1. **Crie o diretorio de sua escolha**
Exemplo
```
C:caminho/do/seu/diretorio/
```
2. **Baixe os arquivos da api**

Baixe os arquivos da API disponível em: https://github.com/alexandrefelgueiras/mc_api

O diretorio deve ficar com esta configuracao:

```
C:caminho/do/seu/diretorio/
│
├───backEndDocs
│       └ imgDocs/
│       └ README.md
├───static
│       └ swagger.json
└ db.py
└ app.py
└ requirements.txt
```

3. **Baixe os arquivos do projeto front-end:**
  Baixe os arquivos do repositorio em:
  https://github.com/alexandrefelgueiras/mc_ui

As pastas *```templates/```* e *```frontEndDocs/```* pode inserir no diretorio raiz escolhido ja a pasta *```img/```* e os arquivos *"estilos.css"* e *"script.js"*, coloque dentro da pasta *```static/```* originada na etapa anterior.

O diretorio deve ficar com esta configuracao:

```
C:caminho/do/seu/diretorio/
│
├───backEndDocs
│       └ imgDocs/
│       └ README.md
├───frontEndDocs
│       └ imgDocs/
│       └ README.md
├───static
│       └ img/
│       └ estilos.css
│       └ script.js
│       └ swagger.json
└ db.py
└ app.py
└ requirements.txt
```

4. **Coloque a API em operaçao**

Siga as instrucoes do documento README disponível em *backEndDocs/README.md* até "Uso" etapa 1 (*```python app.py```*)

Ao fim deste processo o diretorio deve ficar com esta confirguraçao:


```
C:caminho/do/seu/diretorio/
├───venv/
├───backEndDocs/
│       └ imgDocs/
│       └ README.md
├───database/
│       └ database.db
├───frontEndDocs/
│       └ imgDocs/
│       └ README.md
├───static/
│       └ img/
│       └ estilos.css
│       └ script.js
│       └ swagger.json
└ db.py
└ app.py
└ requirements.txt
```
5. **Acesse a Aplicação Web:** 

No navegador de sua preferencia acesse:

http://127.0.0.1:5000/

## **Exemplos**

- Visualizar Item

![Demonstraçao Visualizar Item](imgDocs/VisualizarMC.gif)

- Incluir Item

![Demonstraçao Visualizar Item](imgDocs/NovaMC.gif)

- Exluir Item

![Demonstraçao Visualizar Item](imgDocs/ExcluirMC.gif)
