import React from 'react'
import '../style/Button.css'

export default function Button(props){
    const {value , functionBtn} = props
  return <button className="ButtonNormal" onClick={functionBtn}>{value}</button>
}

