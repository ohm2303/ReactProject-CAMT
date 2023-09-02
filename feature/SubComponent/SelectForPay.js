import GrayBackground from "./GrayBackground";
import Button from "./Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-regular-svg-icons'
import { styled } from 'styled-components';
import { useEffect, useState } from "react";



const SelectForPay = (props) => {
    const {className} = props
    const idel=props.props.id
    const del = (id)=>{
        fetch((`http://localhost:3001/api/user/basket/del/${id}`),{    
              method:"Delete",                                     
        })
          .then(response => response.json())
          .then(data => {
            fetch(('http://localhost:3001/api/user/basket/1'),{    
                method:"GET",                                     
            }).then(res => res.json())
            .then(data => {
                props.setContent([])
                props.setContent(old => [...old, data])
            })    
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
            <Button className="DeleteBTN" icon={<FontAwesomeIcon icon={faTrashCan} size="2xl" style={{color:"#ffffff"}}s/> }  value={"ลบ"} onClick={() => del(idel)}></Button>
            </div>
            </div>
        </GrayBackground> 
        </div>
 );
}


export default styled(SelectForPay)`
.pic{
    width: 60px;
    height: 80px;
}
.titleBook{
    display: flex;
    flex-direction: column;
    font-family:'Anuphan';
}
.propName{
margin-left:30px ;
font-size: 20px;
}
.propPrice{
    margin-top:30px ;
    font-size: 16px;
}
.DeleteBTN{
    background-Image: linear-gradient( 
    to right,
    #C8102E,
    #F98581,
    #C8102E 100%,
    #E22427 200%)
}
`;


//ไอคอน ดึงcomponent จากเว็บ FontAwesomeIcon มาใช้ ถ้าต้องการแก้ขนาด แก้ตรง size="2xl" 