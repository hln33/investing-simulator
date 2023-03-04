import React from 'react';

import { Button as PRButton } from 'primereact/button';

const Button = ({ ...props }) => {
  let className = 'is-button';
  if (props.className) {
    className += ` ${props.className}`;
  }

  return (
    <div className={className}>
      <PRButton {...props} />
    </div>
  );

}

export default Button;