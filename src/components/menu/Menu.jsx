import React from 'react';
import PropTypes from 'prop-types';

import Logo from './Logo';
import Item from './Item';
import DropdownItem from './DropdownItem';

/**
 * Menu component includes `Item` and `Logo` components as well. See example's source code.
 */
class Menu extends React.Component {
  render() {
    const menuItems = this.props.children.filter(el => el.type.displayName === 'Item' || el.type.displayName === 'DropdownItem');
    const logo = this.props.children.filter(el => el.type.displayName === 'Logo');
    const { theme } = this.props;

    return (
      <div className={`mcs-menu ${theme}`}>
        {logo}
        <div className="mcs-menu-items">
          <ul className="mcs-menu-list">
            {menuItems}
          </ul>
        </div>
        <button type="button" className="mcs-menu-toggler hide">- - -</button>
      </div>
    );
  }
}

Menu.Item = Item;

Menu.Logo = Logo;

Menu.DropdownItem = DropdownItem;

Menu.propTypes = {
  /** For now supports only two theme: `dark` and `transparent` */
  theme: PropTypes.string,
};

export default Menu;
