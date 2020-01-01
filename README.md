# craco-styled-jsx
This is a craco plugin that adds [styled-jsx](https://github.com/zeit/styled-jsx) support to create-react-app version >= 2

## Installation
First, follow the [`craco` Installation Instructions](https://github.com/sharegate/craco/blob/master/packages/craco/README.md##installation) to install the `craco` package, create a `craco.config.js` file.

Then install `craco-styled-jsx`:

```bash
$ yarn add craco-styled-jsx

# OR

$ npm i -S craco-styled-jsx
```

## Usage

Here is a complete `craco.config.js` configuration file that adds styled-jsx to `create-react-app`:

```js
module.exports = {
  plugins: [
    {
      plugin: require('craco-styled-jsx'),
      options: {
        sass: true, // Required node-sass to enable this option
        cssFileSupport: true, // Allow to write css in a standalone file
        cssFileTest: /\.styled\.(s)css$/,
      }
    },
  ],
}
```
