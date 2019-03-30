import React from 'react';
import { render } from 'react-dom';
import { FiPlus } from 'react-icons/fi';

import { Menu, Button, Section } from '../../src';

import '../../src/assets/scss/index.scss';
import './assets/scss/index.scss';

import logo from './assets/img/logo.svg';
import addIcon from './assets/img/add.svg';
import shareIcon from './assets/img/share-arrow.svg';

const categories = [
  {
    title: 'Банки',
    key: 'banks',
  },
  {
    title: 'Строительные компании',
    key: 'building',
  },
  {
    title: 'Платежные системы',
    key: 'payments',
  },
];

const Navbar = () => (
<Section>
  <Section.SectionCell lg={12}>
    <Menu theme="transparent">
      <Menu.Logo src={logo} style={{ marginRight: '4em' }} />
      <Menu.DropdownItem subItems={categories} textColor="#fff">Категории</Menu.DropdownItem>
      <Menu.Item textColor="#fff">О сервисе</Menu.Item>
      <Button type="light" style={{ fontSize: 14, verticalAlign: 'center', marginRight: 27 }}>
        <img src={addIcon} style={{ marginRight: 5 }} /> Добавить логотип
      </Button>
      <Button type="light" rounded><img src={shareIcon} /></Button>
    </Menu>
  </Section.SectionCell>
</Section>
);


render(<Navbar />, document.getElementById('header-nav'));
