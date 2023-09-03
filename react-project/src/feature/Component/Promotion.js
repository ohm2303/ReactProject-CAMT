import React from 'react';
import PropTypes from "prop-types";
import Text from '../SubComponent/Text';

const Promotion = ({ discountPercentage, fullPrice }) => {

  const ticket = require("../../pics/Icon/ticket.png")
  const discountedPrice = fullPrice * (1 - discountPercentage / 100);

  return (
    <div className='promotion'>
        <div className='promotion-text'>
            <Text size={15} family={"Anuphan"}  weight="600">โปรโมชั่นสุดพิเศษ</Text>
        </div>
        <div className='percent'>
            <img src={ticket} />
            <Text size={17} family={"Anuphan"}  weight="600">ลด {discountPercentage} %</Text>
        </div>
        <div className='price'>
             <Text size={13} family={"Anuphan"} weight="500">
                <ul>
                  <li>จากราคาปกติ {fullPrice} บาท</li>
                  <li>เหลือเพียง {discountedPrice} บาท</li>
                </ul>
              </Text>
        </div>
      
    </div>
  );
};

Promotion.propTypes = {
    fullPrice : PropTypes.number.isRequired,
    discountPercentage : PropTypes.number.isRequired
}


export default Promotion;
/*Kanokwan 
วิธีการใช้
<Promotion discountPercentage={ต้องการลดราคากี่เปอร์เซนต์} fullPrice={ราคาเต็ม}/>
*/