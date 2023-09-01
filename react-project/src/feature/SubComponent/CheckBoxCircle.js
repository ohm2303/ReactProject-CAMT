import React from 'react'
import '../style/CheckBoxCircle.css'

export default function CheckBoxCircle(props){
    const {value,textBox,valueOfText} = props
 
  return (
    <div className="border" >{textBox}
    <label className="container">{value}
        <input type="radio" name="radio" value={valueOfText}/>
        <span className="checkmark"></span>
    </label>
    </div>
  )
}