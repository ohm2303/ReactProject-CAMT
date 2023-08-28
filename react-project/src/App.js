import React from "react";
import "./App.css";
import BankAccountPage from "./feature/Page/BankAccountPage"; // Adjust the path if needed
import PaymentPage from './feature/Page/payment';
import PayPage from './feature/Page/pay'

const App = () => {
  return (
    <>
    <PayPage />
    <BankAccountPage />
    <PaymentPage />
    </>
  );
};

export default App;
