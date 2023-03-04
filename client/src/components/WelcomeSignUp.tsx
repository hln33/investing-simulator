import React from "react";
import { useState } from "react";

import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

import backgroundImage from '../assets/invest.jpg'

function WelcomeSignUp() {
    const [email, setEmail] = useState("");

    return (
        <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '45em' }}>

            <div style={{ paddingTop: '35vh', display: 'flex', flexFlow: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
                <h1 style={{ color: 'white', fontSize: '50px' }}>
                    Sign Up Today
                </h1>

                <div id='line-break' style={{ width: '100%' }}></div>

                <div>
                    <InputText
                        style={{ width: '15em' }}
                        placeholder="Email"
                        value={email}
                        onChange={ e => setEmail(e.target.value) }
                    />
                    <Button label="Get Started"/>      
                </div>
            </div>
        </div>
    );
}

export default WelcomeSignUp