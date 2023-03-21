import { getStockInformation } from 'api/Stock/Stock';
import StockDetails from './StockDetails';
import Error from 'components/Error/Error';
// import { Symbol } from 'enums/Stock';

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

function callStockAPI(symbol: string | null) {
    if (symbol != null) {
        return getStockInformation(symbol);
    }
    return null;
};

function Stock(props) {
    // get stock symbol from query string in URL
    const [searchParams] = useSearchParams();
    const symbol = searchParams.get("symbol");

    // state
    const [name, setName] = useState("");
    const [ask, setAsk] = useState(0);
    const [marketCap, setMarketCap] = useState(0);
    const [exchange, setExchange] = useState("");
    const [yearlyHigh, setYearlyHigh] = useState(0);
    const [yearlyLow, setYearlyLow] = useState(0);
    const [error, setError] = useState(false);
    
    useEffect(() => {
        (async () => {
            const data = await callStockAPI(symbol);
            //console.log(data);
            if (!data) {
                setError(true);
                return;
            }

            setName(data.longName);
            setAsk(data.ask);
            setMarketCap(data.marketCap);
            setExchange(data.exchange);
            setYearlyHigh(data.fiftyTwoWeekHigh);
            setYearlyLow(data.fiftyTwoWeekLow);
            setError(false);
        })();
    });
    
    return (
        // return error page if stock symbol is not found
        error ? <Error /> : 
        <div>
            <h1>{name}</h1>
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