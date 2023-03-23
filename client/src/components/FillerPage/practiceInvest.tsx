import React from "react";
import practiceInvestingImage from 'assets/practiceInvesting.jpg';
import FillerCard from "./FillerCard";
import { PrimeIcons } from "primereact/api";
const PracticeInvest = () => {
    return (
        <div style={{ padding: '2em' }}>
            <h1 style={{ color: 'var(--primary-color)'}}>Practice Investing</h1>
            <div className="col-12">
            <FillerCard
                        image={practiceInvestingImage}
                        title={"Practice Investing"}
                        subtitle={"Practice investing without using real money and see how well you do."}
                        icon={PrimeIcons.CHECK_SQUARE}
                    />
            
            </div>
        </div>
    );
}
export default PracticeInvest;