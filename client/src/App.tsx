import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";

import "primereact/resources/themes/bootstrap4-light-blue/theme.css";     //theme
import "primereact/resources/primereact.min.css";                         //core css
import "primeicons/primeicons.css";                                       //icons
import "primeflex/primeflex.css"

// Components
import Welcome from 'components/Welcome/Welcome';
import Register from 'components/Register/Register';
import Login from 'components/Login/Login';
import Footer from 'components/Footer/Footer'
import Navbar from 'components/NavBar/NavBar';
import Competition from 'components/Competition/Competition';
import Stock from 'components/Stock/Stock';

// Enums
import { Symbol } from 'enums/Stock';

// API
import { getStockInformation } from 'api/Stock/Stock';

// Styles
import './app.scss';


const App = () => {

  const [data, setData] = useState<Object>({ apiResponse: "" });

  // This is a sample useEffect which uses the client Stock API function to retrieve sample stock info.
  useEffect(() => {
    (async () => {
      // const symbols = [Symbol.AAPL, Symbol.ABT, Symbol.AMZN];
      const response = await getStockInformation(Object.keys(Symbol), { fields: ["displayName"]});
      setData({ apiResponse: response });
    })();

  }, []);

  console.log(data);

  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/competition' element={<Competition />} />
        <Route path='/stock' element={<Stock />} />
        {/* <Route path='/dashboard' element={<Dashboard />} /> */}
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
