import { getStockInformation } from 'api/Stock/Stock';
import StockDetails from './StockDetails';
import { Symbol } from 'enums/Stock';

import React, { useEffect, useState } from 'react';

function Stock(props: {symbol: Symbol} ) {
    const [name, setName] = useState("");
    const [ask, setAsk] = useState(0);
    const [marketCap, setMarketCap] = useState(0);
    const [yearlyHigh, setYearlyHigh] = useState(0);
    const [yearlyLow, setYearlyLow] = useState(0);
    
    useEffect(() => {
        (async () => {
            const data = await getStockInformation(props.symbol);
            console.log(data);

            setName(data.longName);
            setAsk(data.ask);
            setMarketCap(data.marketCap);
            setYearlyHigh(data.fiftyTwoWeekHigh);
            setYearlyLow(data.fiftyTwoWeekLow);
        })();
    });
    
    return (
        <div>
            <h1>Stock Info</h1>
            <StockDetails 
                ask={ask} 
                marketCap={marketCap} 
                exchange={"lll"} 
                yearlyHigh={yearlyHigh} 
                yearlyLow={yearlyLow}
            />
        </div>
    );
}

export default Stock;