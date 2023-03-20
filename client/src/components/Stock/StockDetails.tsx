import React, { useState } from 'react';

interface Details {
    ask: number;
    marketCap: number;
    exchange: string;
    yearlyHigh: number;
    yearlyLow: number;
}

function StockDetails(props: Details) {
    return (
        <div>
            <h1>Ask: {props.ask}</h1>
            <h1>Market Cap: {props.marketCap}</h1>
        </div>
    );
}

export default StockDetails;