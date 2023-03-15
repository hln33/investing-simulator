import React from 'react';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

function CompetitionStandings(props) {
    const participant1 = {
        ranking: 1,
        name: "Harry",
        balance: 10000
    }
    const testData = [
        {
            ranking: 1,
            name: "Harry",
            balance: 10000
        },
        {
            ranking: 2,
            name: "Denzel",
            balance: 10000
        },
        {
            ranking: 3,
            name: "Mathew",
            balance: 10000
        },
        {
            ranking: 4,
            name: "Andy",
            balance: 10000
        }
    ];
    
    return (
        <div style={{margin: 50, border: 'solid'}}>
            <h1>Competition Standings</h1>
            <DataTable 
                value={testData}
                size={"large"}
                showGridlines
                stripedRows
            >
                <Column field="ranking" header="Ranking"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="balance" header="Balance"></Column>
            </DataTable>
        </div>
    );
}

export default CompetitionStandings