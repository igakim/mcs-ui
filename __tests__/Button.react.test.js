import React from 'react';
import renderer from 'react-test-renderer';
import { Button } from '../src';

test('component should match snapshot', () => {
  const component = renderer.create(
    <Button>Button</Button>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('component should have "mcs-button-primary" class', () => {
  const component = renderer.create(
    <Button type="primary">Button</Button>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('component should be disabled and have "mcs-button-primary" class', () => {
  const component = renderer.create(
    <Button type="primary" disabled>Button</Button>,
  );
  const component2 = renderer.create(
    <Button type="primary" disabled="disabled">Button</Button>,
  );
  const component3 = renderer.create(
    <Button type="primary" disabled={true}>Button</Button>,
  );
  const tree = component.toJSON();
  const tree2 = component2.toJSON();
  const tree3 = component3.toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree2).toMatchSnapshot();
  expect(tree3).toMatchSnapshot();
});

test('component should have user classes as well', () => {
  const component = renderer.create(
    <Button type="primary" className="super-class">Button</Button>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
