import React from 'react';

import { PrimeIcons } from 'primereact/api';

import WelcomeCard from './WelcomeCard';
import practiceInvestingImage from '../assets/practiceInvesting.jpg';
import competeImage from '../assets/compete.jpg';
import dataImage from '../assets/data.jpg'

function Welcome(props) {
    
    return (
        <div>
            <h1 style={{ color: 'var(--primary-color)', paddingLeft: '3em' }}>Investment Simulator</h1>

            <div className="card" style={{ padding: '3em', paddingBottom: '50em' }}>
                <div className="flex card-container indigo-container">
                    <div className="flex-1 h-4rem border-round">
                        <WelcomeCard
                            image={practiceInvestingImage}
                            title={"Practice Investing"}
                            subtitle={"Practice investing without using real money and see how well you do."}
                            icon={PrimeIcons.CHECK_SQUARE}
                        />
                    </div>
                    <div className="flex-1 h-4rem border-round mx-4">
                        <WelcomeCard
                            image={competeImage}
                            title={"Compete with Others"}
                            subtitle={"Partcipate in competitions with other users to see who comes out on top."}
                            icon={PrimeIcons.USERS}
                        />
                    </div>
                    <div className="flex-1 h-4rem border-round">
                        <WelcomeCard
                            image={dataImage}
                            title={"Real Time Data "}
                            subtitle={"View hundreds of real life stocks and their peformance in real time."}
                            icon={PrimeIcons.CHART_BAR}
                        />
                    </div>
                </div>
            </div>

            <p>sign up today</p>
        </div>
    );
}

export default Welcome