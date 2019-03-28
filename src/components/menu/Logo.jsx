import React from 'react';

const Logo = (props) => {
  const { children, textColor, ...rest } = props;
  return (
    <div className="mcs-menu-logo" {...rest}>
      <a href="/" className="mcs-menu-link" style={{ color: textColor }}>
        {children}
      </a>
    </div>
  );
};

export default Logo;
