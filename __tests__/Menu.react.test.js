import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Menu } from '../src';

configure({ adapter: new Adapter() });

test('<Menu /> component should match snapshot', () => {
  const { Item, Logo } = Menu;

  const component = renderer.create(
    <Menu>
      <Logo src="/path/to/pic.png" />
      <Item to="/home">Home</Item>
      <Item to="/article">Article</Item>
      <Item to="/blog">Blog</Item>
    </Menu>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('<Menu /> component should match snapshot', () => {
  const { Item, Logo, DropdownItem } = Menu;

  const dropdownItems = [
    { title: 'Project X', key: 'sub1' },
    { title: 'New project', key: 'sub2' },
    { title: 'Huge project', key: 'sub3' },
  ];

  const snapshot = renderer.create(
    <Menu>
      <Logo textColor="#f00">
        Logo Text
      </Logo>
      <Item to="/blog">Blog</Item>
      <DropdownItem subItems={dropdownItems}></DropdownItem>
    </Menu>
  );

  const tree = snapshot.toJSON();

  expect(tree).toMatchSnapshot();

  const component = shallow(
    <DropdownItem subItems={dropdownItems}>DropdownLink</DropdownItem>
  );

  expect(component.exists('.dropdown-link')).toBeTruthy();
  expect(component.exists('.mcs-menu-dropdown')).toBeFalsy();

  component.find('.dropdown-link').simulate('mouseenter');
  expect(component.exists('.mcs-menu-dropdown')).toBeTruthy();
  component.find('.dropdown-link').simulate('mouseleave');
  setTimeout(expect(component.exists('.mcs-menu-dropdown')).toBeFalsy, 400);
  component.find('.dropdown-link').simulate('mouseenter');
  component.find('.mcs-menu-dropdown').simulate('mouseenter');
  setTimeout(expect(component.exists('.mcs-menu-dropdown')).toBeTruthy, 500);
  component.find('.mcs-menu-dropdown').simulate('mouseleave');
  setTimeout(expect(component.exists('.mcs-menu-dropdown')).toBeFalsy, 500);
});