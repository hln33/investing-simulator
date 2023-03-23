import React from 'react';

import { Card as PRCard } from 'primereact/card';

const Card = ({ ...props }) => {
  let className = 'is-card';
  if (props.className) {
    className += ` ${props.className}`;
  }

  return (
    <div className={className}>
      <PRCard {...props} />
    </div>
  );

}

export default Card;