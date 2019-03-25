import { isEqualTypes, getButtonType } from '../src/utils';

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
