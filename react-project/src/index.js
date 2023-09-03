import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

//import App from './App';
import reportWebVitals from './reportWebVitals';
import App from './App';
import PayPage from './feature/Page/pay';
import PaymentPage from './feature/Page/payment';
import BankAccountPage from './feature/Page/BankAccountPage';
import Home from "./feature/Page/Home"
import NovelPage from './feature/Page/Novel';
import MyCollection from './feature/Page/MyCollection';
import RegisterReader from './feature/Component/RegisterReader';
import RegisterArthor from './feature/Component/RegisterAuthor';
import Login from './feature/Component/Login';
import PhotoSlide from './feature/Component/PhotoSlide';
import AddBook from './feature/Component/AddBook';
import Report from './feature/Component/Report';
import OptionMain from './feature/Component/OptionMain';
import Promotion from './feature/Component/Promotion';
import Novel from './feature/Page/Novel';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     
     
     <App/>
   


  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
