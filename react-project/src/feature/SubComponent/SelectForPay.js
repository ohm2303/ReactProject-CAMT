import GrayBackground from "./GrayBackground";
import './SelectForPay.css';
import Button from "./Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-regular-svg-icons'

const SelectForPay = (props) => {
    const {pics,name,price} = props
    return (
   <div >
        <GrayBackground css="cssB">
            <div style={{display:"flex",justifyContent:"space-between"}}>
            <div style={{display:"block"}}>
                <div style={{display:"flex"}}>
                <input type="checkbox" id="checkbox" />
                <div className="pic">
                <img src={pics} />
                </div>
                <div className="titleBook">
                    <h3>{name}</h3>
                    <span>{price}</span>
                </div>
                </div>
            </div>
            <div className="icon">
            <Button icon={<FontAwesomeIcon icon={faTrashCan} size="2xl" style={{color: "#ffffff",}} />} css={"buttonDelete"} style={{ marginTop: "15%",backgroundImage: "linear-gradient( to right,#C8102E ,#F98581,#C8102E 100%,#E22427 200%)"}} value={"ลบ"}></Button>
            </div>
            </div>
        </GrayBackground> 
        </div>
 );
}

export default SelectForPay;

