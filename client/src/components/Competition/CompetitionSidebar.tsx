import React from 'react';

import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { useState } from 'react';

function CompetitionSidebar(props) {
    const [visible, setVisible] = useState<boolean>(false);
    
    return (
        <div>
            <Sidebar 
                className="p-sidebar-md"
                visible={visible} 
                onHide={() => setVisible(false)}
            >
                <h2>This is a sidebar to hold details about the competition</h2>
            </Sidebar>
            <Button onClick={() => setVisible(true)}>Details</Button>
        </div>
    );
}

export default CompetitionSidebar