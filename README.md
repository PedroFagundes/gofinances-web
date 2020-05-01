<div align="center">
  <img alt="GoFinances" src="https://i.imgur.com/LdLfYfX.png" />
</div>

<p align="center">
  <a href="#rocket-sobre">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#package-tecnologias-utilizadas">Tecnologias utilizadas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#computer-shut-up-and-show-me-the-code-working">Shut up and show me the code (working)</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#milkyway-screenshots">Screenshots</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

## :rocket: Sobre

Aplicação web de gestão bácisa de transações desenvolvida como desafio pertencente ao [Bootcamp GoStack](https://rocketseat.com.br/gostack) da **Rocketseat**. Esta aplicação se conecta ao [backend](https://github.com/pedrofagundes/gofinances-backend) também desenvolvido no bootcamp.

Nele o usuário pode fazer o upload de um arquivo com a extensão `.csv` (comma separated values) com os dados das transações a seguir:

Campo   | Tipo | Description
--------- | ------ | ------
title | string | Descrição da transação
type  | string | Tipo da transação (income \| outcome)
value | number | Valor da transação (150.99)
category | string | Categoria da transação (ex.: Gastos fixos)

## :package: Tecnologias utilizadas

Algumas tecnologias utilizadas neste projeto:

* **ReactJs**
  * "Uma biblioteca JavaScript para criar interfaces de usuário"
* **React hooks**
  * Permitem que possamos utilizar `state` e outros recursos sem escrever uma classe.
    * **useState**
      * Utilizado para criar e modificar estados da aplicação.
    * **useEffect**
      * Utilizado para executar funções que podem ou nao depender do valor de um ou mais estados para se executada.
* **React Router DOM**
  * Biblioteca que auxilia na criação de rotas e navegação do usuário entre páginas web (navegador).
* **Typescript**
  * Linguagem que adiciona tipagem, dentre outras funcionalidades, ao javascript. Auxilia MUITO em relação ao intellisense do **VS Code** permitindo que o desenvolvedor saiba sempre o que esperar de cada função/variável assim como os parametros esperados também por cada função/variável.
* **Axios**
  * Cliente HTTP baseado no conceito de `Promise` para navegadores e Node.js
* **ESLint**
  * Um *linter* plugável e configurável que identifica e reporta problemas em *patterns* JavaScript. Estamos utilizando a Style Guide do AirBnb neste projeto, muito conhecido por ter uma abordagem bastante rasoável para o JavaScript.
* **Prettier**
  * Um formatador de código opinado que ajuda MUITO quando utilizado junto ao *ESLint* forçando padrões a serem seguidos de forma "**automágica**"
* **Styled components**
  * Permite a criação de componentes reutilizáveis aplicando as melhores features do ES6 e CSS. E o mais legal: "without stress". :wink:

## :computer: Shut up and show me the code (working)

Com o [backend](https://github.com/pedrofagundes/gofinances-backend) clonado, configurado e rodando, clone o também este repositório e faça o seguinte:

Navegue até a pasta criada e abra no Visual Studio Code, lembre-se de executar o comando `yarn` no seu terminal para instalar todas as dependências. Após isto, basta rodar um `yarn start` *et voilà*, você está pronto para pronto para utilizar a aplicação!

## :milky_way: Screenshots
<div align="center">
  <img alt="GoFinances Dashboard" src="https://imgur.com/lsGYXFb.png" />
  <p>(Dashboard da aplicação)</p>
  <img alt="GoFinances Dashboard" src="https://imgur.com/XmtKWNH.png" />
  <p>(Página de importação de transações)</p>
</div>

---

Feito com 💜 by [Pedro Fagundes](https://github.com/pedrofagundes)
