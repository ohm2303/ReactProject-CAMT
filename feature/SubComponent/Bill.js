import React from 'react'
import GrayBackground from './GrayBackground';
import './Bill.css'
import Button from './Button';

export default function Bill(props){
  
    const {value , functionBtn,css, style,icon} = props
  return (
    <>
    <GrayBackground css="bk">
        <span>ยอดชำระเงิน</span>
        <Button value={"ไปหน้าชำระเงิน"}/>
    </GrayBackground>
    </>
  );
}
