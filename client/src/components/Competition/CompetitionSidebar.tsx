import React from 'react';

import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { useState } from 'react';

import './style.scss';

function CompetitionSidebar(props) {
  const [visible, setVisible] = useState<boolean>(false);

  const sidebar = (
    <Sidebar
      visible={visible}
      onHide={() => setVisible(false)}
      className="scrollable-sidebar surface-200"
    >
    </Sidebar>
  );

  const sidebarButton = (
    <Button className="scrollable-button text-center bg-blue-600" onClick={() => setVisible(true)}>
      <div className="flex flex-column m-3">
        <div>
          Info
        </div>
        <i className="pi pi-briefcase" style={{ 'fontSize': '1.5rem' }} />
      </div>
    </Button>
  );

  return (
    <div>
      {sidebar}

      {sidebarButton}
    </div>
  );
}

export default CompetitionSidebar