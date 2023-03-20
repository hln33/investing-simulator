import { getStockInformation } from 'api/Stock/Stock';
import { Symbol } from 'enums/Stock';

import React, { useEffect, useState } from 'react';


function Stock(props: {symbol: Symbol} ) {
    const [name, setName] = useState("");
    
    useEffect(() => {
        (async () => {
            const data = await getStockInformation(props.symbol);
            console.log(data);
        })();
    });
    
    return (
        <div>
            <h1>Stock Info</h1>
        </div>
    );
}

export default Stock;