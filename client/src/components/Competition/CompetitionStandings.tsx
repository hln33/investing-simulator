import React from 'react';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

function CompetitionStandings(props) {
    const participant1 = {
        ranking: 1,
        balance: 10000
    }
    const testData = [participant1]
    
    return (
        <div style={{padding: 50}}>
            <h1>Competition Standings</h1>
            <DataTable 
                value={testData}
                size={"large"}
                showGridlines
                stripedRows
            >
                <Column field="ranking" header="Ranking"></Column>
                <Column field="balance" header="Balance"></Column>
            </DataTable>
        </div>
    );
}

export default CompetitionStandings