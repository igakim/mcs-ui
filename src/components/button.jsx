import React from 'react';
import cn from 'classnames';
import { getButtonType } from '../utils';

const Button = (props) => {
  const {
    type, htmlType, size, disabled, stretched, ...rest
  } = props;
  const classes = {
    'mcs-button': true,
    [getButtonType(type)]: !!type,
    [getButtonType(size)]: !!size,
    'mcs-button-stretched': !!stretched,
  };
  return (
    <button
      type={htmlType || ''}
      className={cn(classes)}
      disabled={disabled || false}
      {...rest}
    >
      {props.children}
    </button>
  );
};

export default Button;
