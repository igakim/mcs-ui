import React from 'react';

const Item = (props) => {
  const { children, textColor, ...rest } = props;
  const styles = {
    color: textColor,
  };
  return (
    <li className="mcs-menu-item" {...rest}>
      <a href="#" className="mcs-menu-link" style={styles}>
        {children}
      </a>
    </li>
  );
};

export default Item;
