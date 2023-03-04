import React from "react";
import { useState } from "react";

import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

function WelcomeSignUp() {
    const [email, setEmail] = useState("");

    return (
        <div>
            <h2>Start Investing</h2>
            <InputText
                placeholder="Email"
                value={email}
                onChange={ e => setEmail(e.target.value) }
            />
            <Button label="Get Started"/>
        </div>
    );
}

export default WelcomeSignUp