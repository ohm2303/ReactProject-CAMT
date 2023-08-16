import React from 'react'
import '../style/Button.css'

export default function Button(props){
    const {value , functionBtn,css} = props
  return <button className={`ButtonNormal ` + css} onClick={functionBtn} >{value}</button>
}

