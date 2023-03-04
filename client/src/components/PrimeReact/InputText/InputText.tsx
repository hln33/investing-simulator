import React from 'react';

import { InputText as PRInputText } from 'primereact/inputtext';

const InputText = ({ ...props }) => {
  let className = 'is-inputtext';
  if (props.className) {
    className += ` ${props.className}`;
  }

  return (
    <div className={className}>
      <PRInputText {...props} />
    </div>
  );

}

export default InputText;