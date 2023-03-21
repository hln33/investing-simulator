import React from 'react';

import StockDetailsField from './StockDetailsField'

interface Details {
    ask: number;
    marketCap: number;
    exchange: string;
    yearlyHigh: number;
    yearlyLow: number;
}

function StockDetails(props: Details) {
    return (
        <div className="grid">
            <div className="col-6">
                <StockDetailsField name="Ask" value={props.ask} />
            </div>
            <div className="col-6">
                <StockDetailsField name="Market Cap" value={props.marketCap} />
            </div>
            <div className="col-6">
                <StockDetailsField name="Yearly High" value={props.yearlyHigh} />
            </div>
            <div className="col-6">
                <StockDetailsField name="Yearly Low" value={props.yearlyLow} />
            </div>
            <div className="col-6">
                <StockDetailsField name="Exchange" value={props.exchange} />
            </div>
            <div className="col-6">

            </div>
        </div>
    );
}

export default StockDetails;