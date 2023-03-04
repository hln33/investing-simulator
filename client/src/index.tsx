import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from 'App';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  // StrictMode is disabled to prevent default rendering twice
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);
