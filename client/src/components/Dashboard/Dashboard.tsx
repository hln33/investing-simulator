import React, { Component } from 'react';
import { Divider } from 'primereact/divider';
import { Chart } from 'primereact/chart';

function Dashboard() {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'TFSA',
            data: [6500, 5900, 8000, 8100, 5600, 5500, 4000],
            fill: false,
            borderColor: '#4bc0c0',
          },
        ],
      };
      
      const options = {
        title: {
          display: true,
          text: 'Line Chart',
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      };
      

    return (
        <div>
            <div className="grid">
                <div className='col-6'>
                    <br></br>
                    <a style={{ color: 'var(--primary-color)'}}>Hello "Insert name here", you hsve</a><br></br>
                    <a style={{ color:'var(--primary-color'}}>Balance:</a><br></br>
                    <a style={{ color: 'var(--primary-color)'}}>Todays P/L "insert profit/loss, red if loss, green if profit"</a>
                </div>
                <div className='col-6' style={{float:'right'}}>
                    <br></br>
                    <a style={{float:'right'}}>Dashboard Page</a>
                </div>
            </div>
            <Divider/>
            <div className='grid'>
                <div className='col-6'>
                    <h1 style={{ textAlign:'center'}}>Graph of Changes</h1> <br></br>
                    <Chart type="line" data={data} options={options} />
   

                </div>
                <div className='col-6'>
                    <h1 style={{ textAlign:'center'}}> Stocks Owned</h1>

                </div>
            </div>
        </div>
    );

}
export default Dashboard;