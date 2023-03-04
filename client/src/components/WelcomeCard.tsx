import React from 'react';

import { Card } from 'primereact/card';

function WelcomeCard(props) {
    const image = props.image
    const title = props.title;
    const subtitle = props.subtitle;
    const icon = props.icon;

    return (
        <Card 
            style={{ backgroundColor: 'ghostwhite' }}
            header={<img src={image}></img>}
            title={
                <p>
                {title}
                <i style={{ color: 'var(--primary-color', paddingLeft: "10px" }} className={icon}/> 
                </p>
            }
            subTitle={subtitle}
        />
    );
}

export default WelcomeCard