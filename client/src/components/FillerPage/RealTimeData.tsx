import React from "react";
import dataImage from 'assets/data.jpg'
import FillerCard from "./FillerCard";
import { PrimeIcons } from "primereact/api";
const RealTimeData = () => {

    return (
        <div style={{ padding: '2em' }}>
            <h1 style={{ color: 'var(--primary-color)'}}>Real Time Data</h1>
            <div className="col-12">
                <FillerCard image={dataImage}
                        title={"Real Time Data "}
                        subtitle={"View hundreds of real life stocks and their peformance in real time. Currently Using the Yahoo Finance API Key to access the stock data"}
                        icon={PrimeIcons.CHART_BAR}>


                        </FillerCard>
            </div>
        </div>
    );

}
export default RealTimeData;