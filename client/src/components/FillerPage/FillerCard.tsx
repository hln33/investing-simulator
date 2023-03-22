import React from 'react';
import { Card } from 'primereact/card';


const FillerCard = (props) => {
    const image = props.image
    const title = props.title;
    const subtitle = props.subtitle;
    const icon = props.icon;

    return (
        <Card 
            style={{ backgroundColor: 'ghostwhite' }}
            title={
                <p>
                {title}
                <i style={{ color: 'var(--primary-color', paddingLeft: "10px" }} className={icon}/> 
                </p>
            }
            header={<img src={image}></img>}
            subTitle={subtitle}
        />
    );
}

export default FillerCard