# Ignews - Projeto #5 Bootcamp Ignite - Rocketseat


## 📖 Sobre 

  Neste projeto do Ignite, fomos introduzidos a um framework baseado em React, o NextJS, o qual nos permite trabalhar com diferentes formas de renderização como SSR, SSG..
  Ele também provem roteamento por padrão e module.styles;
  Foi utilizado a api do Stripe para realizar pagamentos e o CMS Prismic para a criação de notícias da newsletter. 
  
  A intenção do Ignews é ser um newsletter o qual o usuário se cadastra e paga um valor x para receber notícias sobre o mundo do desenvolvimento web.

## 🚀 Tecnologias

  Essa aplicação tem seu front-end feito no framework NextJS com typescript, foi estilizado com Sass no paradigma de estilos modulares e possui interação com a api do Stripe e do CMS Prismic
  
  Esta aplicação foi criada a partir do boiler plate do Next 
  
  $ yarn create next-app
  
  
## 📦 Como baixar o projeto

   Clonar os repositórios
   
    $ git clone https://github.com/freitasDavi/ignite-01-github-explorer.git
   
    # Instalar o node/yarn 

    $choco install yarn

    # Instalar as dependencias
  
    $ yarn install
    
    # Criar arquivo .env e adicionar as seguintes keys
    
    STRIPE_WEBHOOK_SECRET
    PRISMIC_ACCESS_TOKEN
    PRISMIC_ENDPOINT=https://ignews33.cdn.prismic.io/api/v2
    
    # Inicializar a aplicação

    $ yarn dev

    # Acessar a aplicação
    
    Acessar o navegador pelo link http://localhost:3000


## Como utilizar a CLI do Stripe

1 - Jogar o arquivo do Strip pra dentro do CMD

2 - Utilizar na frente .\stripe {comandos} para rodar os comandos

3 - Fazer o login com .\stripe login

4 - Para escutar as alterações, utilizar .\stripe listen --forward-to localhost:3000/api/webhooks

5 - Adicionar no .env.local a variavel STRIPE_WEBHOOK_SECRET

6 - PRISMIC_ACCESS_TOKEN

7 - PRISMIC_ENDPOINT=https://ignews33.cdn.prismic.io/api/v2
