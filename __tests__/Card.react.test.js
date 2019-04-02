import React from 'react';
import renderer from 'react-test-renderer';
import { Card } from '../src';

test('component should match snapshot', () => {
  const { CardImage, CardTitle } = Card;

  const component = renderer.create(
    <Card>
      <CardImage src="path/to/pic.jpg" />
      <CardTitle>Card Title</CardTitle>
    </Card>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});