import React from 'react';

import { PrimeIcons } from 'primereact/api';

import WelcomeCard from './WelcomeCard';

function Welcome(props) {
    
    return (
        <div>
            <h1 style={{ color: 'var(--primary-color)', paddingLeft: '50px' }}>Investment Simulator</h1>

            <div className="card" style={{ paddingTop: '20px', paddingBottom: '120px', padding: '50px' }}>
                <div className="flex card-container indigo-container">
                    <div className="flex-1 h-4rem border-round">
                        <WelcomeCard
                            title={"Practice Investing"}
                            subtitle={"Practice investing without using real money and see how well you do."}
                            icon={PrimeIcons.CHECK_SQUARE}
                        />
                    </div>
                    <div className="flex-1 h-4rem border-round mx-4">
                        <WelcomeCard
                            className="flex-1 h-4rem border-round mx-4"
                            title={"Compete with Others"}
                            subtitle={"Partcipate in investing competitions with other users to see who comes out on top."}
                            icon={PrimeIcons.USERS}
                        />
                    </div>
                    <div className="flex-1 h-4rem border-round">
                        <WelcomeCard
                            title={"Real Time Data "}
                            subtitle={"View hundreds of real life stocks and their peformance in real time."}
                            icon={PrimeIcons.CHART_BAR}
                        />
                    </div>
                </div>
            </div>

            <p>Login</p>
            <p>Don't have an account? <b>Sign Up</b></p>
        </div>
    );
}

export default Welcome