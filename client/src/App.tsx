import React, { useState, useEffect } from 'react';

import axios from 'axios';

import "primereact/resources/themes/bootstrap4-light-blue/theme.css";     //theme
import "primereact/resources/primereact.min.css";                         //core css
import "primeicons/primeicons.css";                                       //icons
import "primeflex/primeflex.css"

function App() {

  const [data, setData] = useState<any>({ apiResponse: "" });

  useEffect(() => {
    (async () => {
      const response = await axios("http://localhost:8080/users");
      setData({ apiResponse: response.data });
    })();

  }, []);

  console.log(data);

  return (
    <div className="App">
      hello world!
      <p>{data.apiResponse}</p>
    </div>
  );
}

export default App;
