import React from 'react';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import Card from 'components/PrimeReact/Card/Card';

function CompetitionStandings({ ...props }) {
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

    const header = () => {
        return (
            <div className="flex justify-content-between align-items-center">
                <h1 className="m-0 text-gray-700">Current Standings</h1>
            </div>
        )
    }
    
    return (
        // <Card>
            <DataTable 
                header={header}
                value={testData}
                size={"large"}
                showGridlines
                stripedRows
            >
                <Column field="ranking" header="Ranking"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="balance" header="Balance"></Column>
            </DataTable>
        // </Card>
    );
}

export default CompetitionStandings