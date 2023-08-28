import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import PaymentPage from './feature/Page/payment';
import PayPage from './feature/Page/pay'
import BankAccountPage from './feature/Page/BankAccountPage';
import NovelPage from './feature/Page/Novel';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    
    
    {/* <PayPage />
    <BankAccountPage />
    <PaymentPage /> */}
    <NovelPage/>
    



  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
