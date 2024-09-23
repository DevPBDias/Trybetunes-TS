# Projeto Trybetunes - Front-end - Trybe

<p>Foi desenvolvida uma aplicação capaz de reproduzir músicas das mais variadas bandas e artistas, criar uma lista de músicas favoritas e editar o perfil da pessoa usuária logada.</p>

<details><summary>Funcionalidades</summary>
   <ul>
    <li>Fazer login;</li>
    <li> Pesquisar por uma banda ou artista;</li>
    <li>Listar os álbuns disponíveis dessa banda ou artista;</li>
    <li>Visualizar as músicas de um álbum selecionado;</li>
    <li> Reproduzir uma prévia das músicas deste álbum;</li>
    <li>Favoritar e desfavoritar músicas;</li>
    <li> Ver a lista de músicas favoritas;</li>
    <li> Ver o perfil da pessoa logada;</li>
    <li>  Editar o perfil da pessoa logada;</li>
  </ul>
</details>

<details><summary>Aprendizados</summary>
 <ul>
  <li>Fazer requisições para uma API de música</li>
  <li>Criar formulário dinâmico para editar dados do usuário</li>
  <li>Criar uma página de login</li>
  <li>Criar html que reproduza aúdio</li>
  <li>Criar filtro de pesquisa</li>
</ul>
</details>
</br>

## ✨ Como ficou o projeto?
<div align="center">
  
  ![20240923_160331](https://github.com/user-attachments/assets/d6f3efb2-94e9-4d53-aa6d-b0e8ce14d087)
    
</div>
<details>
  <summary>Deploy da aplicação</summary>
  
> <a href="https://trybetunes-ts.vercel.app" target="_blank">https://trybetunes-ts.vercel.app</a>

</details>

  -Não possui versão mobile, quem sabe no futuro.
  
</br>

## 🖥 Quais tecnologias foram utilizadas?
<div align="left">
	<img width="32" src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png" alt="React" title="React"/>
  <img width="32" src="https://github-production-user-asset-6210df.s3.amazonaws.com/62091613/261395532-b40892ef-efb8-4b0e-a6b5-d1cfc2f3fc35.png" alt="Vite" title="Vite"/>
	<img width="32" src="https://user-images.githubusercontent.com/25181517/183890598-19a0ac2d-e88a-4005-a8df-1ee36782fde1.png" alt="TypeScript" title="TypeScript"/>
  <img width="32" src="https://user-images.githubusercontent.com/25181517/202896760-337261ed-ee92-4979-84c4-d4b829c7355d.png" alt="Tailwind CSS" title="Tailwind CSS"/>
</div>
</br>
<details>
  <summary>Frameworks e bibliotecas (versões utilizadas)</summary>
  
  ```js
    - React: 18
        - Vite: 4.4.5
        - React-router-dom: 6.15.0
    - Typescript: 5.0.2
    - Tailwindcss: 3.3.3
  ```
</details>
</br>

## 🔎 Como me localizar no projeto?

### Todos os arquivos de código fonte do projeto estão em: `./src`

<details>
  <summary>Como o projeto está estruturado?</summary>
  
  - `./src/app:` Este projeto com Vite, possui diversas rotas. Então esta pasta você pode localizar a página principal, css global e roteamento de páginas.
  
  - `./src/assets:` Onde está os ícones que vão ser usadas no projeto.
  
  - `./src/components:` Onde está os componentes que serão reutilizados em diversas partes do código. Nesta primeira versão do site temos os components:
      - Album
      - Login
      - NotFound
      - Profile
      - ProfileEdit
      - Search
        
  - `./src/pages:` Diretório para receber e englobar os componentes reutilizáveis da app.

  - `./src/services:` Diretório com funções específicas da app.
      - musicsAPI: requisição HTTP do metódo GET para buscar todas as musicas da API.
      - searchAlbumsAPI: requisição HTTP do metódo GET para buscar o artista específico da API.
      - userAPI: funções para salvar e criar informações do usuário.
      - favoriteSongsAPI: funções para salvar músicas favoritas do usuário.
  
</details>

<details>
  <summary>Como rodar o projeto na minha máquina?</summary>

- Vale ressaltar que já está o link do site no topo desta documentação. Mas caso queira analisar o código fonte fique a vontade para instalar este case na sua máquina! Tutorial a baixo:

- Antes de tudo, você precisa ter o Git instalado no seu computador. O Git é uma ferramenta que permite clonar e gerenciar repositórios de código.
    - Windows: Baixe o Git <a href="https://git-scm.com/download/win" target="_blank">aqui</a> e siga as instruções de instalação.
    - macOS: Você pode instalar o Git <a href="https://git-scm.com/download/mac" target="_blank">aqui</a> ou usando o Homebrew com o comando brew install git:
        ```bash
        brew install git
        ```
    - Linux: Use o gerenciador de pacotes da sua distribuição, por exemplo para Debian/Ubuntu:
        ```bash
        sudo apt install git
        ```

- Abra o terminal (no Windows, você pode usar o Git Bash, que é instalado junto com o Git).

- Navegue até o diretório onde deseja armazenar o projeto.

- Execute o comando para clonar o repositório:

    ```bash
    git@github.com:DevPBDias/Trybetunes-TS.git
    ```
- Após clonar o repositório, navegue até a pasta do projeto
    ```bash
    cd Trybetunes-TS
    ```

- Agora você pode abrir os arquivos do projeto com seu editor de texto ou IDE preferido. Exemplo do vsCode: 
    ```bash
    code .
    ```

- 🚨 Não esqueça que para não ocorrer erros no código ao clonar ele, você deve fazer o comando abaixo 🚨
    ```bash
    npm i   
    ```

- Pronto! Todo o site estará funcionado na sua máquina. Porém, caso precise de alguma ajuda em algo entre em contato comigo pelo meu <a href="https://www.linkedin.com/in/devpaulobrunomdias" target="_blank">Linkedin</a>.</p>

</details>
</br>

## 🤝🏼 Vamos nos conectar?

<h4>🎉 É isso! Este é o projeto finalizado, caso tenha ficado com alguma dúvida ou deseje complementar algo diretamente comigo você pode estar entrando em contato através do meu <a href="https://www.linkedin.com/in/devpaulobrunomdias" target="_blank">Linkedin</a>.</h4>

<h4>🚀 Se gostou desse projeto, confira mais projetos como este no meu <a href="https://portfolio-final-jade-pi.vercel.app" target="_blank">Portfolio</a>.</h4>

<h4>👋🏻 Obrigado pela atenção e espero que tenha gostado do que tenha visto aqui, que tal agora dar uma olhada nos meus outros <a href="https://github.com/DevPBDias" target="_blank">repositórios</a>?</h4>
</br>

## ❤️ Créditos

<details>
  <summary>Créditos dos emojis</summary>

> <a href="https://emojipedia.org" target="_blank">https://emojipedia.org</a>

</details>
<details>
  <summary>Créditos dos ícones</summary>

> <a href="https://marwin1991.github.io/profile-technology-icons/" target="_blank">https://marwin1991.github.io/profile-technology-icons/</a>

</details>



