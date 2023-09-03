import React from 'react'
import '../style/CheckBoxCircle.css'
import PropTypes from "prop-types";

export default function CheckBoxCircle(props){
    const {value,textBox,valueOfText,onClick} = props
 
  return (
    <div className="border" >{textBox}
    <label className="container">{value}
        <input type="radio" name="radio" value={valueOfText} onClick={onClick}/>
        <span className="checkmark"></span>
    </label>
    </div>
  )
}

CheckBoxCircle.propTypes = {
  value: PropTypes.string.isRequired,
  textBox: PropTypes.string.isRequired,
  valueOfText: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};