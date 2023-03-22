import React from 'react';

import { Chart } from 'primereact/chart';
import Card from 'components/PrimeReact/Card/Card';

function CompetitionGraph(props) {
    const testData = {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
        datasets: [
            {
                label: 'Harry',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                borderColor: 'red'
            },
            {
                label: 'Denzel',
                data: [28, 48, 40, 19, 86, 27, 90],
                fill: false,
                borderColor: 'green'
            },
            {
                label: 'Andy',
                data: [5, 78, 50, 29, 36, 37, 99],
                fill: false,
                borderColor: 'blue'
            },
            {
                label: 'Mathew',
                data: [20, 40, 45, 20, 86, 100, 90],
                fill: false,
                borderColor: 'black'
            }
        ]
    };
    
    return (
        <Card className="mb-3">
            <h1 className="m-0 text-gray-700">Performance Timeline</h1>
            <Chart
                type="line"
                data={testData}
            />
        </Card>
    );
}

export default CompetitionGraph