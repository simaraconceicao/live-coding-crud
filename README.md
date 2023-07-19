# Live Coding | Meu Primeiro CRUD 🚀 

![image](https://media2.giphy.com/media/D567hs4Dex0GEnAKOY/giphy.gif)
<aside>
⚠️ Este repositório é um template feito com a base inicial para a criação de um CRUD.
</aside>

<br>

## `Como usar este template:`

- Com o link do template aberto no navegador, clique no botão verde "Use this template";

-  Após clicar no botão, você será redirecionada para uma nova página onde você deve escolher o nome do repositório que você irá criar a partir do template. Dê um nome ao repositório, certifique-se que está marcado como público e clique em "Create repository from template";

- Após isso você será redirecionado para a página do repositório que acabou de criar. Para clonar o repositório, clique no botão "Code" e irá aparecer um menu. Copie a URL que aparece logo abaixo do botão;

- No seu terminal, navegue até a sua pasta de preferência e rode o comando git clone {URL_DO_REPOSITORIO}, isso irá baixar todos os arquivos para a sua máquina. Lembre-se que você precisa do Git instalado em sua máquina, caso ainda não tenha;

- Com seu repositório baixado na sua máquina, execute o comando ``npm install`` na pasta do projeto clonado para instalar todas as dependências.

___Fonte do guia para usar templates do github: FAQ Desafio Rocketseat___

## `Planejamento`

✓   Instalar as dependencias e rodar o projeto para ver no navegador: "Olá, Quero Ser Dev!"

✓		Server, App, Routes, Model, Controller

✓		MongoDB: criar banco e integrar

✓		.env e Swagger

## `Materiais`

✓		[Apresentação](https://www.canva.com/design/DAFpBZ_HPwI/U7sXxVs8N3W6GM9gSlSGZg/edit?utm_content=DAFpBZ_HPwI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)


## 💻 CRUD

> ⚠️  O CRUD é um acrônimo para Create, Read, Update e Delete(criação, consulta, atualização e remoção de dados). São as 4 operações principais em um banco de dados. Ou seja, vamos criar uma API integrar com um banco de dados e disponibilizar as 4 operações.

| OPERAÇÃO | MONGODB | MONGOOSE |
| --- | --- | --- |
| `C`REATE | insertOne() | save() |
| `R`EAD | find() | find() |
| `U`PDATE | updateOne() | save() |
| `D`ELETE | deleteOne() | findByIdAndDelete() |


### 🧠 Contexto
O objetivo era criar um sistema onde fosse possível disponibilizar a lista com as pessoas que usam a hashtag #techmaromba pra incentivar pessoas tecnologistas a terem uma vida ativa e saudável.

### `Tecnologias usadas`

| Ferramenta | Descrição |
| --- | --- |
| `nodeJS` | runtime de javaScript|
| `MongoDB` | banco de dados|
| `npm` | gerenciador de pacotes|
| `Github` | Hospedagem do código fonte integrado com gerenciador de versionamento|
| `Express` | Framework de nodeJS
| `Dotenv` | Pacote para ocultar variaveis de ambiente|
| `Mongoose` | Interface com MongoDB|
| `Swagger` | Framework com ferramentas para descrição, consumo e visualização de serviço|
| `Nodemon` | Atualiza as mudanças do projeto|

### `Modelagem dos dados`

Dados que uma #techmaromba possui:

| Descrição                       | Tipo |
| --------------------------- | ------------------ |
| id                | `String`  |
| name                | `String`        |
| description  | `String`            |
| urlProfile           | `String`   |
| urlImage             | `String`       |
| createdAt             | `Date`       |


### Organização de pastas

```
 📁 crud-techmaromba
   |
   |-  📁 src
   |    |
   |    |- 📁 controllers
   |         |- 📄 techmaromba-controller.js
   |
   |    |- 📁 database
   |         |- 📄 dbConnect.js
   |     
   |    |- 📁 models
   |         |- 📄 TechMaromba.js
   |       
   |    |- 📁 routes
   |         |- 📄 techmaromba-route.js
   |
   |    |- 📄 app.js 
   |        
   |- 📄 .env.example
   |- 📄 .gitignore
   |- 📄 package.json
   |- 📄 server.js

```

### Rotas e operações

Documentação: **"/doc"**

GET
- [ ]  **"/techmaromba/all"** Deverá retornar todas as techmarombas cadastradas

POST
- [ ]  "**/techmaromba/add**" Deverá criar uma techmaromba o e retornar o objeto criado

DELETE
- [ ]  "**/techmaromba/clear/[ID]**" Deverá deletar uma techmaromba e retornar uma mensagem de sucesso

PATCH
- [ ]  "**/techmaromba/update/[ID]**" Deverá alterar informação específica dentro de uma techmaromba por id específico e retorna o objeto alterado

REGRAS
- [ ]  Não será possível criar uma techmaromba plano com o mesmo nome

<br>

-----

_Vai ser incrível compartilhar essa jornada com você! Qualquer dúvida ou sugestão, chama no contatinho!_

 <img src="https://media.giphy.com/media/efhcZv18NpQDyRsaYa/giphy.gif" alt="Gif Yeah" width="200"> 

# Simara Conceição
✓	Desenvolvedora na Thoughtworks

✓	Criadora do Quero Ser Dev, projeto que inspira e ajuda pessoas diversas na migração de carreira pra área de tecnologia.

### Vamos nos conectar!

- [youtube](https://www.youtube.com/queroserdev)
- [instagram](https://www.instagram.com/simara_conceicao)
- [linkedin](https://www.linkedin.com/in/simaraconceicao/)
- [github](https://github.com/simaraconceicao)
- [spotify](https://open.spotify.com/show/59vCz4TY6tPHXW26qJknh3)
- [quero ser dev](https://queroserdev.com)

<br>
Feito com 💜 por Simara Conceição | Quero Ser Dev