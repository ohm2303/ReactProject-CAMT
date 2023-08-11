import React from 'react'
import './Button.css'

export default function Button(props){
    const {value , functionBtn} = props
  return <button className="ButtonNormal" onClick={functionBtn}>{value}</button>
}

