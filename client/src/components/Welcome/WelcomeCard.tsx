import React from 'react';

import { Card } from 'primereact/card';
import { Button } from 'primereact/button'
import { useNavigate } from 'react-router-dom';

function WelcomeCard(props) {
    const image = props.image
    const title = props.title;
    const subtitle = props.subtitle;
    const icon = props.icon;
    const path = props.path;
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(path);
    };

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
            footer={<Button onClick={handleClick} >Learn More</Button>}
        />
    );
}

export default WelcomeCard