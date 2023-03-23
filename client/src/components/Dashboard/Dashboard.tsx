import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { verifyUser } from 'api/Profile/User';

import { Divider } from 'primereact/divider';
import { Chart } from 'primereact/chart';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import StockTable from 'components/StockDataTable/StockTable';

import './style.scss';

const Dashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  
  //temporary filler data for the graph/tables
  const [chartData, setChartData] = useState({
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'TFSA',
        backgroundColor: '#42A5F5',
        data: [1200, 4500, 8000, 7621, 5621, 5500, 4000],
      },

    ],
  });
  const options = {
    responsive: true,
    legend: {
      position: 'top',
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

  const stocks = [
    { id: 1, name: 'AAPL', amount: 10, value: 100, marketPrice: '$10' },
    { id: 2, name: 'TSLA', amount: 5, value: 1010, marketPrice: '$20' },
    { id: 3, name: 'MSFT', amount: 2, value: 100, marketPrice: '$13' },
    { id: 4, name: 'GOOGL', amount: 10, value: 1111, marketPrice: '$101' }
  ];

  useEffect(() => {
    const token = Cookies.get('token');
    if (!token) {
      navigate('/login');
    }

    async function userVerified() {
      const isUserVerified = await verifyUser(token);
      if (isUserVerified) {
        setIsAuthenticated(true);
      }
      return isUserVerified;
    }

    userVerified();
  }, []);


  if (!isAuthenticated) {
    navigate('/login');
  }

  return (
    <div>
      <div className="grid">
        <div className='col-6'>
          <br></br>
          <a style={{ color: 'var(--primary-color)' }}>Hello TestBoard, you have </a><br></br>
          <a style={{ color: 'var(--primary-color' }}>$10,000.29</a><br></br>
          <a style={{ color: 'var(--primary-color)' }}>Todays P/L </a> <a style={{ color: 'red' }}>-$123(4.2%)</a>
        </div>
        <div className='col-6' style={{ float: 'right' }}>
          <br></br>
          <a style={{ float: 'right' }}>Dashboard Page</a>
        </div>
      </div>
      <Divider />
      {/* balance chart (line) */}
      <div className='grid'>
        <div className='col-6'>
          <h1 style={{ textAlign: 'center' }}>Graph of Changes</h1> <br></br>
          <Chart type="line" data={chartData} options={options} />


        </div>
        {/* stock table */}
        <div className='col-6'>
          <h1 style={{ textAlign: 'center' }}> Stocks Owned</h1>
          <DataTable value={stocks} selectionMode="single" >
            <Column field="value" header="Value ($)"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="amount" header="Shares"></Column>
          </DataTable>

        </div>
      </div>
      {/* Watchlist table for dashboard */}
      <div className='grid'>
        <div className='col-12'>
          <h1 style={{ textAlign: 'center' }}>WatchList</h1>
          <StockTable></StockTable>

        </div>
      </div>
    </div>
  );

}
export default Dashboard;