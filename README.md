<h1 align="center">
    <img alt="NextLevelWeek" title="#NextLevelWeek" src="https://github.com/joaovieira23/ecoleta/blob/master/capa-ecoleta.png" />
</h1>

## 💻 Sobre o projeto

♻️ Ecoleta - é uma forma de conectar empresas e entidades de coleta de resíduos orgânicos e inorgânicos as pessoas que precisam descartar seus resíduos de maneira ecológica.

As empresas ou entidades poderão se cadastrar na plataforma web enviando:
- Uma imagem do ponto de coleta
- Nome da entidade, E-mail e WhatsApp
- Endereço para que ele possa aparecer no mapa
- Além de selecionar um ou mais ítens de coleta: 
  - Lâmpadas
  - Pilhas e Baterias
  - Papéis e Papelão
  - Resíduos Eletrônicos
  - Resíduos Orgânicos
  - Óleo de Cozinha

Os usuários terão acesso ao aplicativo móvel, onde poderão:
- Navegar pelo mapa para ver as instituições cadastradas
- Entrar em contato com a entidade através do E-mail ou do WhatsApp

Projeto desenvolvido durante a **NLW - Next Level Week** oferecida pela [Rocketseat](rs).
O NLW é uma experiência online com muito conteúdo prático, desafios e hacks onde o conteúdo fica disponível durante uma semana.


## 🎨 Layout e Funcionamento

O layout da aplicação está disponível no Figma:

<a href="https://www.figma.com/file/1SxgOMojOB2zYT0Mdk28lB/Ecoleta?node-id=136%3A546">
  <img alt="Made by joao-vieira" src="https://img.shields.io/badge/Acessar%20Layout%20-Figma-%2304D361">
</a>


## 🔋 Mobile

<p align="center">
  <img alt="App Demo" src="https://github.com/joaovieira23/ecoleta/blob/master/ecoleta-gifs/ecoleta-mobile.gif">
</p>

## 🌐 Web

<p align="center" style="display: flex; align-items: flex-start; justify-content: center;">
  <img alt="App Demo" src="https://github.com/joaovieira23/ecoleta/blob/master/ecoleta-gifs/ecoleta-web.gif">
</p>

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Expo][expo]
- [Node.js][nodejs]
- [React][reactjs]
- [React Native][rn]
- [TypeScript][typescript]


## 🚀 Como rodar este projeto

Podemos considerar este projeto como sendo divido em três partes:
1. Back End (pasta server) 
2. Front End (pasta web)
3. Mobile (pasta mobile)

💡 Tanto o Frontend quanto o Mobile precisam que o Backend esteja sendo executado para funcionar.

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js][nodejs]. 
Além disto é bom ter um editor para trabalhar com o código como [VSCode][vscode]

### 🎲 Rodando o Backend (server)

```bash
# Clone este repositório
$ git clone https://github.com/joaovieira23/ecoleta

# Acesse a pasta do projeto no terminal/cmd
$ cd ecoleta

# Vá para a pasta server
$ cd server

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev:server

# O servidor inciará na porta:3333 - acesse http://localhost:3333 
```

### 🧭 Rodando o Frontend (aplicação web)

```bash
# Clone este repositório
$ git clone https://github.com/joaovieira23/ecoleta

# Acesse a pasta do projeto no seu terminal/cmd
$ cd ecoleta

# Vá para a pasta da aplicação Front End
$ cd web

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run start

# A aplicação será aberta na porta:3000 - acesse http://localhost:3000
```

### 📱 Rodando a aplicação Mobile 

```bash
# Clone este repositório
$ git clone https://github.com/joaovieira23/ecoleta

# Acesse a pasta do projeto no seu terminal/cmd
$ cd mobile-app

# Vá para a pasta da aplicação Front End
$ cd mobile-app

# Instale o explo-cli
$ npm i expo-cli

# Execute a aplicação em modo de desenvolvimento
$ npm start

# Utilize o App do expo que pode ser baixado na AppStore ou PlayStore
$ Escaneie o QRCode ou baixe um emulador
```

## 😯 Como contribuir para o projeto

1. Faça um **fork** do projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`
3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My new feature"`
4. Envie as suas alterações: `git push origin my-feature`
> Caso tenha alguma dúvida confira este [guia de como contribuir no GitHub](https://github.com/firstcontributions/first-contributions)

Made with ♥ by João Vieira :wave: [Get in touch!](https://br.linkedin.com/in/jo%C3%A3o-victor-vieira-de-andrade-21ba98188)

[nodejs]: https://nodejs.org/
[typescript]: https://www.typescriptlang.org/
[expo]: https://expo.io/
[reactjs]: https://reactjs.org
[rn]: https://facebook.github.io/react-native/
[yarn]: https://yarnpkg.com/
[vscode]: https://code.visualstudio.com/
[rs]: https://rocketseat.com.br
