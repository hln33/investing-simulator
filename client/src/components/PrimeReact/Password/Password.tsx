import React from 'react';

import { Password as PRPassword } from 'primereact/password';

const Password = ({ ...props }) => {
  let className = 'is-password';
  if (props.className) {
    className += ` ${props.className}`;
  }

  return (
    <div className={className}>
      <PRPassword {...props} />
    </div>
  );

}

export default Password;