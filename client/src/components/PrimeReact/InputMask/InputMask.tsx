import React from 'react';

import { InputMask as PRInputMask } from 'primereact/inputmask';

const InputMask = ({ ...props }) => {
  let className = 'is-inputmask';
  if (props.className) {
    className += ` ${props.className}`;
  }

  return (
    <div className={className}>
      <PRInputMask {...props} />
    </div>
  );

}

export default InputMask;