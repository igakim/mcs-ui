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
  moduleAliases: {
    'mcs-ui-kit': path.resolve(__dirname, 'src'),
  },
  ignore: [
    '**/__tests__/**',
    '**/*.test.{js,jsx,ts,tsx}',
    '**/*.spec.{js,jsx,ts,tsx}',
    '**/*.d.ts',
    '**/src/components/menu/Item.jsx',
    '**/src/components/menu/Logo.jsx',
    '**/src/components/menu/DropdownItem.jsx',
    '**/src/components/card/CardImage.jsx',
    '**/src/components/card/CardTitle.jsx',
    '**/src/components/section/SectionCell.jsx',
    '**/src/components/form/Input.jsx',
    '**/src/components/form/SearchInput.jsx',
  ],
};
