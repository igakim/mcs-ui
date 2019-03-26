const path = require('path');

module.exports = {
  require: [
    '@babel/polyfill',
    path.join(__dirname, 'src/assets/scss/index.scss'),
  ],
  getComponentPathLine(componentPath) {
    const { name } = path.parse(componentPath);
    return `import { ${name[0].toUpperCase() + name.substring(1)} } from 'mcs-ui-kit';`;
  },
  title: 'MCS React UI kit',
  usageMode: 'expand',
};
