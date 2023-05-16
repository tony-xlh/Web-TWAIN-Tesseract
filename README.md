# Web-TWAIN-Tesseract

A demo of using Tesseract.js to extract text of documents scanned with [Dynamic Web TWAIN](https://www.dynamsoft.com/web-twain/overview/).

[Online demo](https://startling-conkies-477ef8.netlify.app/)

If the SDK expires, you need to apply for your license [here](https://www.dynamsoft.com/customer/license/trialLicense?product=dwt).

### Installation

```sh
npm install
```

### Start Dev Server

```sh
npm start
```

### Build Prod Version

```sh
npm run build
```

### Features:

- ES6 Support via [babel](https://babeljs.io/) (v7)
- JavaScript Linting via [eslint](https://eslint.org/)
- SASS Support via [sass-loader](https://github.com/jtangelder/sass-loader)
- Autoprefixing of browserspecific CSS rules via [postcss](https://postcss.org/) and [postcss-preset-env](https://github.com/csstools/postcss-preset-env)
- Style Linting via [stylelint](https://stylelint.io/)

When you run `npm run build` we use the [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin) to move the css to a separate file. The css file gets included in the head of the `index.html`.
