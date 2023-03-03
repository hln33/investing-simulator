import React from 'react';

import { Card } from 'primereact/card';
import { PrimeIcons } from 'primereact/api';

import WelcomeCard from './WelcomeCard';

function Welcome(props) {
    
    return (
        <div>
            <h1 style={{ color: 'var(--primary-color)' }}>Investment Simulator</h1>
            <br></br>

            <WelcomeCard
                title={"Practice Investing"}
                subtitle={"Practice investing without using real money and see how well you do."}
                icon={PrimeIcons.CHECK_SQUARE}
            />
            <br></br>

            <WelcomeCard
                title={"Compete with Others"}
                subtitle={"Partcipate in investing competitions with other users to see who comes out on top."}
                icon={PrimeIcons.USERS}
            />
            <br></br>

            <WelcomeCard
                title={"Real Time Data "}
                subtitle={"View hundreds of real life stocks and their peformance in real time."}
                icon={PrimeIcons.CHART_BAR}
            />
            <br></br>

            <p>Login</p>
            <p>Don't have an account? <b>Sign Up</b></p>
        </div>
    );
}

export default Welcome