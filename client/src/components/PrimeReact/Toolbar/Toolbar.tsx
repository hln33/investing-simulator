import React from 'react';

import { Toolbar as PRToolbar } from 'primereact/toolbar';

const Toolbar = ({ ...props }) => {
  let className = 'is-toolbar';
  if (props.className) {
    className += ` ${props.className}`;
  }

  return (
    <div className={className}>
      <PRToolbar {...props} />
    </div>
  );

}

export default Toolbar;