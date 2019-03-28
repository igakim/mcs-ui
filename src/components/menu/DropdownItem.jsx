import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';

/**
 * Dropdown should be used inside Menu component only.
 * @param {object} props
 */
class DropdownItem extends React.Component {
  state = {
    mouseOverLink: false,
    mouseOverMenu: false,
  }

  handleEnterLink = () => {
    this.setState({ mouseOverLink: true });
  }

  handleLeaveLink = () => {
    setTimeout(() => {
      this.setState({ mouseOverLink: false });
    }, 300);
  }

  handleEnterMenu = () => {
    this.setState({ mouseOverMenu: true });
  }

  handleLeaveMenu = () => {
    setTimeout(() => {
      this.setState({ mouseOverMenu: false });
    }, 300);
  }

  renderDropdownContainer = (onEnter, onLeave) => {
    const { subItems = [], className } = this.props;

    return (
      <ul className={`mcs-menu-dropdown ${className}`} onMouseEnter={onEnter} onMouseLeave={onLeave}>
        {subItems.map(el => (
          <li className="mcs-menu-dropdown-item" key={el.key}>
            <a href="#" className="mcs-menu-link">{el.title}</a>
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const { mouseOverLink, mouseOverMenu } = this.state;

    const {
      children, textColor, subItems, ...rest
    } = this.props;
    /*
      subItem prop should be type of Array and contain objects.
      Object must have the following keys:
      {
        title: 'title',
        key: 'key',
      }
    */

    const styles = {
      color: textColor,
    };

    return (
      <li className="mcs-menu-item dropdown-item" {...rest}>
        <a href="#" className="mcs-menu-link dropdown-link" style={styles} onMouseEnter={this.handleEnterLink} onMouseLeave={this.handleLeaveLink}>
          {children} <IoIosArrowDown size=".7em" style={ { verticalAlign: 'middle' } } />
        </a>
        {mouseOverLink || mouseOverMenu
          ? this.renderDropdownContainer(this.handleEnterMenu, this.handleLeaveMenu)
          : null}
      </li>
    );
  }
}

export default DropdownItem;
