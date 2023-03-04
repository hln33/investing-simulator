import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";

// PrimeReact
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";     //theme
import "primereact/resources/primereact.min.css";                         //core css
import "primeicons/primeicons.css";                                       //icons
import "primeflex/primeflex.css"

// Components
import Welcome from 'components/Welcome';

// Enums
import { TimeSeries, Symbol, Interval, OutputSize, DataType } from 'enums/AlphaVantage';

// API
import { getStockInformation } from 'api/Stock/Stock';

const App = () => {

  const [data, setData] = useState<Object>({ apiResponse: "" });

  // This is a sample useEffect which uses a client Stock API function to retrieve sample stock info.
  useEffect(() => {
    (async () => {
      const response = await getStockInformation(TimeSeries.INTRADAY, Symbol.IBM, Interval.ONE_HOUR, true, OutputSize.COMPACT, DataType.JSON);
      setData({ apiResponse: response });
    })();

  }, []);

  console.log(data);

  return (
      <Routes>
        <Route path='/' element={<Welcome />} />
        {/* <Route path='/register' element={<Register />} /> */}
        {/* <Route path='/login' element={<Login />} /> */}
        {/* <Route path='/dashboard' element={<Dashboard />} /> */}
      </Routes>
  );
}

export default App;
