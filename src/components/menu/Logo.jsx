import React from 'react';

const Logo = (props) => {
  const {
    children, textColor = '#fff', className = '', src, type, ...rest
  } = props;
  const child = type === 'image' ? <img src={src} /> : children;
  return (
    <div className={`mcs-menu-logo ${className}`} {...rest}>
      <a href="/" className="mcs-menu-link" style={{ color: textColor }}>
        {child}
      </a>
    </div>
  );
};

export default Logo;
