import React from 'react';

const Input = (props) => {
  const { className, ...rest } = props;

  const userClasses = className || '';

  return (
    <input className={`mcs-form-input ${userClasses}`} {...rest} />
  );
};

export default Input;
