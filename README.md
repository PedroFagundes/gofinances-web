<div align="center" style="background: #5636D3; padding: 16px;">
  <img alt="GoFinances" src="https://imgur.com/QGM92ls.png" />
</div>

<p align="center">
  <a href="#rocket-about">About</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#package-used-technologies">Use technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#computer-shut-up-and-show-me-the-code-working">Shut up and show me the code (working)</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#milky_way-screenshots">Screenshots</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

## :rocket: About

A web application for basic financial transactions management built as part of the **Rocketseat's** [Bootcamp GoStack](https://rocketseat.com.br/gostack), a 16 weeks long immersive Full Stack Javascript course.

This app was build following the module's requested features that was basically:

- Users should be able to see all the current financial transactions in a list.
- Users should be able to see a sum of all incoming and outcoming transaction as the total of both.
- Users should be able to import a `.csv` file with the described structure on the bellow tab.

Field   | Type | Description
--------- | ------ | ------
title | string | Transaction description
type  | string | Transaction type (income \| outcome)
value | number | Transaction value (150.99)
category | string | Transaction category (ex.: Energy bills)

## :package: Used technologies

This web application was built using ReactJS consuming the [backend](https://github.com/pedrofagundes/gofinances-backend) (also built as part of the bootcamp) build with [express](https://expressjs.com/pt-br/) in a [Node.js](https://nodejs.org) server:

* **ReactJs**
  * "A JavaScript library for building user interfaces".
* **React hooks**
  * Allows we to use `state` and other good features without writing a class.
    * **useState**
      * Used to create and set *states* of the components without pain.
    * **useEffect**
      * Used to execute functions/methods that depends or not on one or more variables.
* **Typescript**
  * A language that adds typing and other good ES5/ES6 features to JavaScript. It helps us A LOT empowering the **VS Code's Intellisense** which guides us through methods arguments and variable methods and what they expect to receive. It surely has its learning curve but it totally worths it!
* **React Router DOM**
  * A library that helps us to create declarative routing for ReactJS.
* **Axios**
  * A HTTP `Promise` based client for browsers and Node.js.
* **ESLint**
  * A plugable and customizable *linter* that identifies and reports *pattern* problems in a JavaScript code. We're using the popular AirBnb's javascript code style guide to make sure we're doing it the right way.
* **Prettier**
  * An opinionated code formatter that "*automagically*" force our code to follow the selected Style Guide. It saves a lot of time by the, annoying but needed, code formatting/linting.
* **Styled components**
  * Allows in the reusable components creation by applying the best ES6 and CSS best features. And the coolest thing is: "without stress". :wink:

## :computer: Shut up and show me the code (working)

Clone the [backend](https://github.com/pedrofagundes/gofinances-backend) and follow its steps to get it ready and running and then proceed to this repository steps.

Run `yarn` in the root project's folder to install all needed dependencies and get ready to use this app. After that, you just need to run `yarn start` *et voilà!* You're ready to play this app.

## :milky_way: Screenshots
<div align="center">
  <img alt="GoFinances Dashboard" src="https://imgur.com/lsGYXFb.png" />
  <small>(Dashboard)</small>
  <img alt="GoFinances Import page" src="https://imgur.com/XmtKWNH.png" />
  <small>(Import transactions)</small>
</div>

---

Made with 💜 by [Pedro Fagundes](https://github.com/pedrofagundes)
