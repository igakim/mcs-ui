import React from 'react';
import { render } from 'react-dom';
import { MdSearch } from 'react-icons/md';

import {
  Menu, Button, Section, Form, Card,
} from '../../src';

import '../../src/assets/scss/index.scss';
import './assets/scss/index.scss';

import logo from './assets/img/logo.svg';
import paymeBrand from './assets/img/payme_01.png';
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

const { SearchInput } = Form;

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

const SearchLogo = () => (
  <Form onSubmit={data => console.log(data)}>
    <SearchInput prefix={MdSearch} buttonText="НАЙТИ" name="search" placeholder="Введите название компании или бренда" />
  </Form>
);

const brands = [
  {
    pic: paymeBrand,
    title: 'Payme',
    key: 'unique-1',
  },
  {
    pic: paymeBrand,
    title: 'Payme',
    key: 'unique-2',
  },
  {
    pic: paymeBrand,
    title: 'Payme',
    key: 'unique-3',
  },
  {
    pic: paymeBrand,
    title: 'Payme',
    key: 'unique-4',
  },
  {
    pic: paymeBrand,
    title: 'Payme',
    key: 'unique-5',
  },
  {
    pic: paymeBrand,
    title: 'Payme',
    key: 'unique-6',
  },
  {
    pic: paymeBrand,
    title: 'Payme',
    key: 'unique-7',
  },
  {
    pic: paymeBrand,
    title: 'Payme',
    key: 'unique-8',
  },
];

const NewBrands = () => (
  <Section>
    <Section.SectionCell lg={12}>
      <h2 className="brands-title">Новые</h2>
    </Section.SectionCell>
    <Section.SectionCell lg={12}>
      <Section>
        {brands.map(brand => (
          <Section.SectionCell lg={3} key={brand.key}>
            <Card>
              <Card.CardImage src={brand.pic} style={{ padding: '3.5em 2.5em 0 2.5em' }} />
              <Card.CardTitle>{brand.title}</Card.CardTitle>
            </Card>
          </Section.SectionCell>
        ))}
      </Section>
    </Section.SectionCell>
  </Section>
);

const PopularBrands = () => (
  <Section>
    <Section.SectionCell lg={12}>
      <h2 className="brands-title">Самые популярные</h2>
    </Section.SectionCell>
    <Section.SectionCell lg={12}>
      <Section>
        {brands.map(brand => (
          <Section.SectionCell lg={3} key={brand.key}>
            <Card>
              <Card.CardImage src={brand.pic} style={{ padding: '3.5em 2.5em 0 2.5em' }} />
              <Card.CardTitle>{brand.title}</Card.CardTitle>
            </Card>
          </Section.SectionCell>
        ))}
      </Section>
    </Section.SectionCell>
  </Section>
);

const Counter = () => (
  <span className="logo-counter">На сайте 4842 логитипа</span>
);

render(<Navbar />, document.getElementById('header-nav'));
render(<SearchLogo />, document.getElementById('searching-logo'));
render(<NewBrands />, document.getElementById('brands-first'));
render(<PopularBrands />, document.getElementById('brands-second'));
render(<Counter />, document.getElementById('footer-counter'));
