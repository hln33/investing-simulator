import React, { useState, useEffect } from 'react';

import Welcome from './components/Welcome'

import Welcome from './components/Welcome'

import "primereact/resources/themes/bootstrap4-light-blue/theme.css";     //theme
import "primereact/resources/primereact.min.css";                         //core css
import "primeicons/primeicons.css";                                       //icons
import "primeflex/primeflex.css"

import { TimeSeries, Symbol, Interval, OutputSize, DataType } from 'enums/AlphaVantage';
import { getStockInformation} from 'api/Stock/Stock';

function App() {

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
    <div className="App">
      <Welcome/>
    </div>
  );
}

export default App;
