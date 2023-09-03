import React, { useState } from 'react';
import PropTypes from "prop-types";
import styled from "styled-components";


const UploadFile = ({className,id,onChange,accept}) => {
   const [selectedFiles, setSelectedFiles] = useState([]);
   const handleFileChange = (e) => {
      setSelectedFiles([...e.target.files]);
   };
   
   return (
      <div className={className}>
         <input type="file" multiple  className='cssInputFile' id={id}onChange={onChange} accept={accept}/>
      </div>
   );
};

UploadFile.propTypes = {
   id: PropTypes.number,
   onChange: PropTypes.func.isRequired,
   className: PropTypes.string,
   accept: PropTypes.any,

 };
export default styled(UploadFile)`



.cssInputFile {
   border-radius: 4px;
   padding: 2px;
   height: 40px;
   cursor: pointer;
   background-color: white;


   margin-right: 10px;
   transition: background-color 200ms;
}

.cssUploadFile{
   align-items: center;
   background-color: #FFFFFF;
   border: 1px solid rgba(0, 0, 0, 0.1);
   border-radius: .25rem;
   box-shadow: rgba(0, 0, 0, 0.02) 0 1px 2px 0;
   box-sizing: border-box;
   color: rgba(0, 0, 0, 0.85);
   cursor: pointer;
   display: inline-flex;
   font-family: system-ui,-apple-system,system-ui,"Helvetica Neue",Helvetica,Arial,sans-serif;
   font-size: 16px;
   font-weight: 600;
   justify-content: center;
   line-height: 0.55;
   margin: 0;
   min-height: 2rem;
   padding: calc(.875rem - 1px) calc(1.5rem - 1px);
   position: relative;
   text-decoration: none;
   transition: all 250ms;
   user-select: none;
   -webkit-user-select: none;
   touch-action: manipulation;
   vertical-align: baseline;
   width: auto;
 }
 
 .cssUploadFile:hover,
 .cssUploadFile:focus {
   border-color: rgba(0, 0, 0, 0.15);
   box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
   color: rgba(0, 0, 0, 0.65);
 }
 
 .cssUploadFile:hover {
   transform: translateY(-1px);
 }
 
 .cssUploadFile:active {
   background-color: #F0F0F1;
   border-color: rgba(0, 0, 0, 0.15);
   box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
   color: rgba(0, 0, 0, 0.65);
   transform: translateY(0);
 }
`;

/* 
Kanokwan Mahakham
วิธีการใช้
<UploadFile />
*/