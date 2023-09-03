import GrayBackground from "./GrayBackground";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-regular-svg-icons'
import { styled } from 'styled-components';
import { useEffect, useState } from "react";
import Button from "./Button";
import PropTypes from "prop-types";

const SelectForPay = (props) => {
    const {className} = props
    const idel=props.props.id
    const del = (id)=>{
        fetch((`http://localhost:3001/api/user/basket/del/${id}`),{    
              method:"Delete",                                     
        })
          .then(response => response.json())
          .then(data => {
                props.setContent()
        })
        }
    return (
   <div className={className} >
        <GrayBackground >   
            <div style={{display:"flex",justifyContent:"space-between"}}>
            <div style={{display:"block"}}>
                <div style={{display:"flex"}}>
                <input type="checkbox" id="checkbox" />
                <div className="pic">
                <img src={props.props.file_pic} alt={props.props.name}/>
                </div>
                <div className="titleBook">
                    <div className="propName">
                    <label>{props.props.name}</label>
                    </div>
                    <div className="propPrice">
                    <label>{props.props.price}Bath</label>
                    </div>
                </div>
                </div>
            </div>
  
            <div className="icon">
            <Button key={idel} className="DeleteBTN" icon={<FontAwesomeIcon icon={faTrashCan} size="2xl" style={{color:"#ffffff"}}s/> }  value={"ลบ"} onClick={() => del(idel)}></Button>
            </div>
            </div>
        </GrayBackground> 
        </div>
 );
}

SelectForPay.propTypes = {
    className: PropTypes.string,
    props: PropTypes.any,
  };

export default styled(SelectForPay)`
.pic {
    width: 60px;
    height: 80px;
  }
  .titleBook {
    display: flex;
    flex-direction: row; /* Change to row to make children appear in a horizontal line */
    align-items: center; /* Center align children vertically */
    font-family: 'Anuphan';
  }
  .propName {
    margin-left: 30px;
    font-size: 20px;
  }
  .propPrice {
    margin-left: 10px; /* Add margin to separate propName and propPrice */
    font-size: 16px;
  }
  .DeleteBTN {
    display: flex;
    justify-content: center;
  align-items: center;
  background: none;
  border: 1px solid lighten(gray, 24%);
  height: 48px;
  padding: 2px 12px -25px 12px;
  letter-spacing: .25px;
  margin-top:12px ;
  border-radius: 24px;
  cursor: pointer;
  background-color: black;
  }
  &:hover {
    background-color: lighten(red, 48%);
}

`;


//ไอคอน ดึงcomponent จากเว็บ FontAwesomeIcon มาใช้ ถ้าต้องการแก้ขนาด แก้ตรง size="2xl" 