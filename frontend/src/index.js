import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import CryptoContext from './context/CryptoContextAPI';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CryptoContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CryptoContext>
  </React.StrictMode>
);
