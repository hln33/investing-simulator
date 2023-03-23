import React from "react";
import FillerCard from "./FillerCard";
import competeImage from 'assets/compete.jpg';
import { PrimeIcons } from 'primereact/api';

const CompeteOther = () => {
    return (
        <div style={{ padding: '2em' }}>
            <h1 style={{ color: 'var(--primary-color)'}}>Compete with Others</h1>
            
            <div className="col-12">
                <FillerCard image={competeImage}
                     title={"Compete with Others"}
                     subtitle={"Partcipate in competitions with other users to see who comes out on top."}
                     icon={PrimeIcons.USERS}>
                </FillerCard>
            </div>
        </div>
    );
}
export default CompeteOther;