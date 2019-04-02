import React from 'react';
import { Menu } from '../src';

import {
  isEqualTypes,
  getButtonType,
  getClassNameFromArray,
  isClassComponent,
  isFunctionComponent,
  isReactComponent,
} from '../src/utils';

const types = {
  success: 'success',
  danger: 'danger',
  primary: 'primary',
  secondary: 'secondary',
  info: 'info',
  warning: 'warning',
};

it('[isEqualTypes] should work with given arguments', () => {
  expect(isEqualTypes(types.success, types.success)).toBeTruthy();
});

it('[isEqualTypes] should return false with different types or missing any argument', () => {
  expect(isEqualTypes(types.success, types.secondary)).toBeFalsy();
  expect(isEqualTypes(types.secondary)).toBeFalsy();
  expect(isEqualTypes()).toBeFalsy();
});

it('[getButtonType] should work with given arguments', () => {
  expect(getButtonType(types.success)).toBe('mcs-button-success');
  expect(getButtonType(types.danger)).toBe('mcs-button-danger');
  expect(getButtonType(types.primary)).toBe('mcs-button-primary');
  expect(getButtonType(types.secondary)).toBe('mcs-button-secondary');
  expect(getButtonType(types.info)).toBe('mcs-button-info');
  expect(getButtonType(types.warning)).toBe('mcs-button-warning');

  expect(getButtonType()).toBeUndefined();
  expect(getButtonType(types.doesntExist)).toBeUndefined();
});

it('[getClassNameFromArray] shoud work with empty array or with undefined/null elements', () => {
  expect(getClassNameFromArray([])).toBe('');
  expect(getClassNameFromArray([null, undefined])).toBe('');
});

it('[getClassNameFromArray] shoud work with strings', () => {
  expect(getClassNameFromArray(['mcs', 'size', '1'])).toBe('mcs-size-1');
});

it('[getClassNameFromArray] shoud work with any primitive types', () => {
  expect(getClassNameFromArray(['mcs', false, 3])).toBe('mcs-false-3');
});

it('[isClassComponent] should work', () => {
  const { Item, Logo } = Menu;

  expect(isClassComponent(Menu)).toBeTruthy();
  expect(isClassComponent(Item)).toBeFalsy();
  expect(isClassComponent(Logo)).toBeFalsy();
});

it('[isFunctionComponent] should work', () => {
  const { Item, Logo } = Menu;

  expect(isFunctionComponent(Item)).toBeTruthy();
  expect(isFunctionComponent(Logo)).toBeTruthy();
  expect(isFunctionComponent(Menu)).toBeFalsy();
});

it('[isReactComponent] should return true', () => {
  const { Item, Logo } = Menu;

  expect(isReactComponent(Item)).toBeTruthy();
  expect(isReactComponent(Logo)).toBeTruthy();
  expect(isReactComponent(Menu)).toBeTruthy();
});

it('[isReactComponent] should return false', () => {
  const { Item, Logo } = Menu;

  expect(isReactComponent(123)).toBeFalsy();
  expect(isReactComponent('Hello')).toBeFalsy();
});
