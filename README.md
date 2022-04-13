<h1 align="center">Welcome to Knowledge 👋</h1>

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![ci](https://github.com/ddecrulle/Knowledge/actions/workflows/ci.yaml/badge.svg)](https://github.com/ddecrulle/Knowledge/actions/workflows/ci.yaml)

<p align="center">
  <a href="https://socialify.git.ci/ddecrulle/knowledge?description=1&descriptionEditable=The%20application%20that%20presents%20service%20offer%20of%20the%20INSEE%20survey%20information%20system%20&forks=1&issues=1&language=1&name=1&owner=1&pulls=1&theme=Light">
    <img  alt="socialify image" src="https://socialify.git.ci/ddecrulle/knowledge/image?description=1&descriptionEditable=The%20application%20that%20presents%20service%20offer%20of%20the%20INSEE%20survey%20information%20system%20&forks=1&issues=1&language=1&name=1&owner=1&pulls=1&theme=Light" alt="Knowledge" width="640" height="320" />
  </a>
</p>

Knowledge is built with React. It was initialized with a classic Create React App and is deisgned thanks to Material UI

## Getting started

Clone this project and navigate to the `Knowledge` directory.

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


