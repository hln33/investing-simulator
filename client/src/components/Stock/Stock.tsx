import { getStockInformation } from 'api/Stock/Stock';
import StockDetails from './StockDetails';
import { Symbol } from 'enums/Stock';

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

function Stock(props) {
    const [searchParams] = useSearchParams();
    const symbol = searchParams.get("symbol");
    console.log(symbol);

    const [name, setName] = useState("");
    const [ask, setAsk] = useState(0);
    const [marketCap, setMarketCap] = useState(0);
    const [exchange, setExchange] = useState("");
    const [yearlyHigh, setYearlyHigh] = useState(0);
    const [yearlyLow, setYearlyLow] = useState(0);
    
    useEffect(() => {
        if (symbol == null) {
            return;
        }
        
        (async () => {
            const data = await getStockInformation(symbol);
            console.log(data);

            setName(data.longName);
            setAsk(data.ask);
            setMarketCap(data.marketCap);
            setExchange(data.exchange);
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
                exchange={exchange} 
                yearlyHigh={yearlyHigh} 
                yearlyLow={yearlyLow}
            />
        </div>
    );
}

export default Stock;