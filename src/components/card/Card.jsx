import React from 'react';

import CardImage from './CardImage';
import CardTitle from './CardTitle';

class Card extends React.Component {
  render() {
    const { children = [], className, ...rest } = this.props;
    const image = React.Children.toArray(children).filter(ch => ch.type.displayName === 'CardImage');
    const title = React.Children.toArray(children).filter(ch => ch.type.displayName === 'CardTitle');

    const userClasses = className || '';

    return (
      <div className={`mcs-card ${userClasses}`} {...rest}>
        {image}
        {title}
      </div>
    );
  }
}

Card.CardImage = CardImage;
Card.CardTitle = CardTitle;

export default Card;
