import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";

<<<<<<< HEAD
// PrimeReact
=======
import axios from 'axios';
import Navbar from 'components/NavBar';
import Welcome from './components/Welcome'
import Footer from './components/Footer'

>>>>>>> origin
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";     //theme
import "primereact/resources/primereact.min.css";                         //core css
import "primeicons/primeicons.css";                                       //icons
import "primeflex/primeflex.css"

// Components
import Welcome from 'components/Welcome/Welcome';
import Register from 'components/Register/Register';

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
<<<<<<< HEAD
    <div className='app'>
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/register' element={<Register />} />
        {/* <Route path='/login' element={<Login />} /> */}
        {/* <Route path='/dashboard' element={<Dashboard />} /> */}
      </Routes>
=======
    <div className="App">
      <Navbar/>
      <Welcome/>
      <p>{data.apiResponse}</p>
      <Footer/>
>>>>>>> origin
    </div>
  );
}

export default App;
