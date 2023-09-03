import React from 'react'
import GrayBackground from './GrayBackground';
import './Bill.css'
import Button from './Button';

export default function Bill(css){
  
    
  return (
    <>
    <GrayBackground css="bk">
        <span>ยอดชำระเงิน</span>
        <Button value={"ไปหน้าชำระเงิน"}/>
    </GrayBackground>
    </>
  );
}

Bill.propType = {
  css: PropTypes.string,
};