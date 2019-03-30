import React from 'react';

const Logo = (props) => {
  const {
    children, textColor, className, src, ...rest
  } = props;
  return (
    <div className={`mcs-menu-logo ${className}`} {...rest}>
      <a href="/" className="mcs-menu-link" style={{ color: textColor }}>
        <img src={src} />
      </a>
    </div>
  );
};

export default Logo;
