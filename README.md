# Descrição do Projeto

Este projeto é uma aplicação de página única (SPA) desenvolvida com a versão mais recente do framework React JS. A aplicação atende aos seguintes requisitos:

## Estrutura da Aplicação

### Formulário F1
- **File input**: Aceita apenas arquivos no formato ".json" e é rotulado como "File".
- **Botão "Import"**: Importa o arquivo selecionado.

### Formulário F2
- **Input de texto**: Para extensões de 1 a 20 caracteres, rotulado como "Extension".
- **Input de número inteiro**: Aceita valores de 0 a 9999, rotulado como "Count".
- **Input de número decimal**: Aceita valores de 0 a 1.000.000, rotulado como "Filesize".
- **Botão "Add"**: Adiciona o objeto válido à tabela.

### Tabela T1
- **Colunas**:
  - "Extension"
  - "Count"
  - "Filesize"
  - "Action"
- **Ações**:
  - **Importar**: Adiciona objetos válidos do arquivo JSON à tabela.
  - **Adicionar**: Adiciona o objeto válido do formulário F2 à tabela.
  - **Deletar**: Remove a linha correspondente.
  - **Editar**: Permite a atualização de entradas específicas na tabela (opcional).

## Regras de Negócio
- **Regra 00**: O formulário F1 deve aceitar arquivos JSON com a estrutura específica.
- **Regra 01**: Após selecionar um arquivo válido e clicar em "Import", todos os objetos válidos dentro do arquivo devem ser adicionados à tabela T1.
- **Regra 02**: Após preencher todos os campos do formulário F2 de forma válida e clicar em "Add", o objeto válido deve ser adicionado à tabela T1.
- **Regra 03**: Para cada linha, a coluna "Action" deve ter um link "Delete" que, ao ser clicado, remove a linha correspondente.
- **Regra 04**: O campo "Extension" deve ser único, portanto, apenas uma linha deve ser exibida na tabela T1 para cada tipo de extensão.
- **Regra 05**: Mapeie o máximo possível de casos de erro dentro da SPA e exiba-os de maneira amigável para o usuário.

## Opcionais
- Adicionar paginação à tabela T1.
- Adicionar um link "Edit" como uma ação que permite ao usuário atualizar qualquer entrada específica na tabela T1.
- Fazer com que os botões "Add" e "Import" enviem uma solicitação POST para uma API REST (URL fornecida por uma variável de ambiente).
- Utilizar TypeScript na implementação da solução.
- Criar um ou mais testes automatizados usando um plugin de sua escolha.
- Deploy da aplicação em um provedor de nuvem como Amazon AWS ou Heroku e fornecer o link de acesso.
- Publicar uma imagem Docker com sua aplicação (incluindo suas dependências) em um registro como Docker Hub e fornecer as instruções de acesso.
- Criar um README ou página sobre como usar sua SPA.

## Estrutura do Projeto
- **src/**
  - **components/**: Componentes reutilizáveis da aplicação.
- **main.js**: Componente principal da aplicação.
- **index.css**: Estilização global.
- **db.json**: banco de dados.

## Tecnologias Utilizadas
- React JS
- CSS
- Json
- React-icons
