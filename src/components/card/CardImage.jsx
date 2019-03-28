import React from 'react';

const CardImage = (props) => {
  const { src, className, ...rest } = props;

  return (
    <div className={`mcs-card-image-container ${className}`} {...rest}>
      <img src={src} className="mcs-card-image" />
    </div>
  );
};

export default CardImage;
