import React, { useState } from 'react';

import styled from "styled-components";


const UploadFile = ({className}) => {
   const [selectedFiles, setSelectedFiles] = useState([]);
   const handleFileChange = (e) => {
      setSelectedFiles([...e.target.files]);
   };
   const handleUpload = async () => {
      if (selectedFiles.length === 0) {
         alert('Please select files first');
         return;
      }
      const formData = new FormData();
      selectedFiles.forEach((file) => {
         formData.append('files', file);
      });
      try {
         // Replace this URL with your server-side endpoint for handling file uploads
         const response = await fetch('https://your-upload-endpoint.com/upload', {
            method: 'POST',
            body: formData,
         });
         if (response.ok) {
            alert('Files uploaded successfully');
         } else {
            alert('Failed to upload the files');
         }
      } catch (error) {
         console.error('Error while uploading the files:', error);
         alert('Error occurred while uploading the files');
      }
   };
   return (
      <div className={className}>
         <input type="file" multiple onChange={handleFileChange} className='cssInputFile'/>
         <button onClick={handleUpload} className='cssUploadFile'>Upload</button>
      </div>
   );
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