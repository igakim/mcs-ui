import React from 'react';

const Logo = (props) => {
  const {
    children, textColor, className, ...rest
  } = props;
  return (
    <div className={`mcs-menu-logo ${className}`} {...rest}>
      <a href="/" className="mcs-menu-link" style={{ color: textColor }}>
        {children}
      </a>
    </div>
  );
};

export default Logo;
