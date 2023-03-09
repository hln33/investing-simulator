import React from "react";
import { useState } from "react";

import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';

import backgroundImage from 'assets/invest.jpg'

function WelcomeSignUp() {
    const [email, setEmail] = useState("");

    return (
        <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '45em' }}>

            <div style={{ paddingTop: '35vh', display: 'flex', flexFlow: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
                <h1 style={{ color: 'white', fontSize: '50px' }}>
                        Start Investing
                </h1>

                <div id='line-break' style={{ width: '100%' }}></div>

                <div>
                <Link to="/register" style={{textDecoration:'none'}}>
                    <InputText
                        style={{ width: '15em' }}
                        placeholder="Email"
                        value={email}
                        onChange={ e => setEmail(e.target.value) }
                    />
                    <Button label="Sign Up"/>   
                    </Link>   
                </div>
            </div>
        </div>
    );
}

export default WelcomeSignUp