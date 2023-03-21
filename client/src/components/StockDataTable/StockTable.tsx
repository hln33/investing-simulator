import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from 'primereact/column';
import { getStockInformation } from "api/Stock/Stock";
import { Symbol } from 'enums/Stock';

const StockTable = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const symbols: Symbol[] = [Symbol.AAPL, Symbol.GOOGL, Symbol.MSFT];
        const fetchData = async () => {
            const stockData = await getStockInformation(symbols);
            setData(stockData);

        };
        fetchData();
    },[]);

    return(
        <DataTable value={data}>
            <Column field ="symbol" header="Symbol"></Column>
            <Column field ="price" header="Price"></Column>
            <Column field ="change" header="Change"></Column>
        </DataTable>
    )
}
export default StockTable