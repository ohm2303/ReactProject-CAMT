import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './feature/HomePage/Home';
import PaymentPage from './feature/Page/payment';
import PayPage from './feature/Page/pay'

import NovelPage from './feature/Page/Novel';
import Novel from './feature/Page/Novel'
import BankAccountPage from './feature/Page/BankAccountPage';
import PhotoSlide from './feature/Component/PhotoSlide';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <PayPage />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
