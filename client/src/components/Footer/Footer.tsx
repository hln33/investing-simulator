import React from 'react';

import { Divider } from 'primereact/divider';

function Footer() {
    return (
        <footer>
            <Divider/>
            <div className='grid'>
                <div className='col-4' style={{textAlign:'center'}}>
                    <p style={{ color: 'var(--primary-color)'}}>Investing Simulator for CMPT 372  </p>
                </div>
                <div className='col-4' style={{textAlign:'center'}}>
                    <p style={{ color: 'var(--primary-color)'}}>Created by Group 24  </p>
                </div>
                <div className='col-4' style={{textAlign:'center'}}>
                    <p style={{ color: 'var(--primary-color)'}}>Andy C. Mathew W. Harry N. Denzel N. </p>
                </div>
            </div>
        </footer>
    );

    
}
export default Footer;
