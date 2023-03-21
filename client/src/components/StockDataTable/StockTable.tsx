import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from 'primereact/column';
import { getCurrentStockInfo} from "api/Stock/Stock";
import { Symbol } from 'enums/Stock';
import { useNavigate } from 'react-router-dom';
import './StockTable.css'

const StockTable = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const symbols: Symbol[] = [Symbol.AAPL, Symbol.GOOGL, Symbol.MSFT];
        const fetchData = async () => {
            const stockData = await getCurrentStockInfo(symbols);
            setData(stockData);
            console.log(stockData);
        };
        fetchData();
    },[]);
    //redirect to buy the stock for the watchlist column
    const [selectedStock, setSelectedStock] = React.useState(null);
    const navigate = useNavigate();
  
    const onRowSelect = (event) => {
      setSelectedStock(event.data);
    };
  
    const buyStock = (rowData) => {
      navigate(`/buy/${rowData.id}`);
    };

    return(
        <DataTable value={data} selectionMode="single"  onSelectionChange={onRowSelect}>
            <Column field ="symbol" header="Symbol"sortable></Column>
            <Column sortable
                header="Price/Change"
                body={(rowData) => (
                <>
                <span>{rowData.regularMarketPrice}</span>
                <span className={rowData.regularMarketChange > 0 ? "green" : "red"}>
                {rowData.regularMarketChange.fmt} ({rowData.regularMarketChange})
            </span>
            </>
            )}
        />
            <Column field ="regularMarketOpen" header="Open Price" sortable></Column>
            <Column field ="regularMarketVolume" header="Volume" sortable></Column>
            <Column
                header="Buy"
                body={(rowData) => (
                    <button onClick={() => buyStock(rowData)}>Buy</button>
                    )}
                />
        </DataTable>
    )
}
export default StockTable