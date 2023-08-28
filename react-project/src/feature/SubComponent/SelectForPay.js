import GrayBackground from "./GrayBackground";
import Button from "./Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-regular-svg-icons'
import { styled } from 'styled-components';
import PropTypes from 'prop-types';
const SelectForPay = (props) => {
    const {pics,name,price,className} = props
    return (
   <div className={className} >
        <GrayBackground css="cssB">
            <div style={{display:"flex",justifyContent:"space-between"}}>
            <div style={{display:"block"}}>
                <div style={{display:"flex"}}>
                <input type="checkbox" id="checkbox" />
                <div className="pic">
                <img src={pics}/>
                </div>
                <div className="titleBook">
                    <h3>{name}</h3>
                    <span>{price}</span>
                </div>
                </div>
            </div>
            <div className="icon">
            <Button className="DeleteBTN" icon={<FontAwesomeIcon icon={faTrashCan} size="2xl" style={{color:"#ffffff"}}s/> }  value={"ลบ"}></Button>
            </div>
            </div>
        </GrayBackground> 
        </div>
 );
}
SelectForPay.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    pics: PropTypes.string.isRequired,
  };

export default styled(SelectForPay)`
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