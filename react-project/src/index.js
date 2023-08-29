import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

//import App from './App';
import reportWebVitals from './reportWebVitals';

import App from './App';
import PayPage from './feature/Page/pay';
import PaymentPage from './feature/Page/payment';
import BankAccountPage from './feature/Page/BankAccountPage';
<<<<<<< HEAD
import NovelPage from './feature/Page/Novel';
=======
import MyCollection from './feature/Page/MyCollection';
import NovelPage from './feature/Page/Novel';




>>>>>>> 7b423f5a35a5fe947f9343bf4d61092b8327d862


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

<<<<<<< HEAD

<NovelPage idNovel={2}/>

=======
    
    
    
     <BankAccountPage />
     <PayPage />
     <PaymentPage />

     
    
>>>>>>> 7b423f5a35a5fe947f9343bf4d61092b8327d862
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
