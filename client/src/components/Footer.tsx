import React from 'react';

import { Divider } from 'primereact/divider';

function Footer() {
    return (
        <footer>
            <Divider/>
            <div className='col=12'>
                <p style={{ color: 'var(--primary-color)'}}>Investing Simulator for CMPT 372 Created by Group 24 Andy C. Mathew W. Harry N. Denzel N. </p>
            </div>
        </footer>
    );

    
}
export default Footer;
