import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { getButtonType } from '../../utils';

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

Button.propTypes = {
  /** One of the following types: `primary`, `danger`, `warning`, `info`, `secondary`, `success` */
  type: PropTypes.string,
  /** Any html type of button element */
  htmlType: PropTypes.string,
  /** One of the following types: `small`, `medium`, `big` */
  size: PropTypes.string,
  disabled: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]),
  stretched: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]),
};

export default Button;
