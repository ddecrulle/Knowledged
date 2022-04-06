<h1 align="center">Welcome to Knowledge 👋</h1>

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

![Knowledge](https://socialify.git.ci/ddecrulle/knowledge/image?description=1&descriptionEditable=The%20application%20that%20presents%20INSEE%27s%20data%20collecting%20services&font=Inter&issues=1&language=1&owner=1&pattern=Circuit%20Board&pulls=1&stargazers=1&theme=Light)

Knowledge is built with React. It was initialized with a classic Create React App and is deisgned thanks to Material UI

## Getting started

Clone this project and navigate to the `Knowledge` directory

```bash
git clone git@github.com:ddecrulle/Knowledge.git
cd Knowledge
```

You can then install dependencies using either Yarn or NPM

```bash
yarn

or

npm install
```

## Environment values

The project contain only one environment value. This is the url of the back-end [Knowledge-Back-Office](https://github.com/ddecrulle/Knowledge-Back-Office)

In development mode, you can create a file `.env.local` and add values like in the `.env` file.

## Development

### :warning: Commmit

This project follows [Conventional Commits 1.0.0](https://www.conventionalcommits.org/en/v1.0.0/). To enforce that convention we have a [commitlint](https://github.com/conventional-changelog/commitlint) which lint commits before they are created thanks to [husky](https://typicode.github.io/husky/#/)

The commitlint configuration can be change is [`commitlint.config.js`](/commitlint.config.js)