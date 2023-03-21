import React from 'react';

interface Field {
    name: string;
    value: string | number
}

function StockDetailsField(props: Field) {
    const {name, value} = props;

    return (
        <div>
            <p><b>{name}: </b>{value}</p>
        </div>
    );
}

export default StockDetailsField;