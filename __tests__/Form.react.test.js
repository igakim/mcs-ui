import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Form } from '../src';
import { Button } from '../src';

configure({ adapter: new Adapter() });

test('component should match snapshot', () => {
  const { Input } = Form;

  const component = renderer.create(
    <Form>
      <Input type="text" name="login" placeholder="Enter your name" />
      <Input type="password" name="password" placeholder="Your password" />
      <Button type="primary" htmlType="submit">Log in</Button>
    </Form>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('component should match snapshot', () => {
  const { SearchInput } = Form;

  const component = renderer.create(
    <Form>
      <SearchInput type="text" name="login" buttonText="Find" placeholder="Enter your name" />
    </Form>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('component should match snapshot', () => {
  const { SearchInput } = Form;

  const component = renderer.create(
    <Form>
      <SearchInput type="text" name="login" buttonText="Find" placeholder="Enter your name" prefix="O" />
    </Form>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('<Form /> component should work properly', () => {
  const { Input } = Form;

  const wrapper = shallow(
    <Form>
      <Input type="text" name="login" placeholder="Enter your name" />
      <Button type="primary" htmlType="submit">Log in</Button>
    </Form>
  );

  const input = wrapper.find(Input).simulate('change', {target: {value: 'abc', name: 'login'}});

  expect(wrapper.state().fields.login.value).toBe('abc');

  const button = wrapper.find(Button).shallow().simulate('click');

});
