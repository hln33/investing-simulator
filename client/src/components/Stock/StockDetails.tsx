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
    const {ask, marketCap, yearlyHigh, yearlyLow, exchange} = props;

    return (
        <div className="grid">
            <div className="col-6">
                <StockDetailsField name="Ask" value={ask} />
            </div>
            <div className="col-6">
                <StockDetailsField name="Market Cap" value={marketCap} />
            </div>
            <div className="col-6">
                <StockDetailsField name="Yearly High" value={yearlyHigh} />
            </div>
            <div className="col-6">
                <StockDetailsField name="Yearly Low" value={yearlyLow} />
            </div>
            <div className="col-6">
                <StockDetailsField name="Exchange" value={exchange} />
            </div>
            <div className="col-6">
                {/* blank entry for padding */}
            </div>
        </div>
    );
}

export default StockDetails;