import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import GeneralContextProvider from "./Context/generalContext";

ReactDOM.render(
  <React.StrictMode>
    <GeneralContextProvider>
      <App />
    </GeneralContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

