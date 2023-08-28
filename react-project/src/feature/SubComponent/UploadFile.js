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
.cssUploadFile{
display: block;
width: 100%;
font-size: 0.875rem;
color: #1a202c;
border-color: #e2e8f0;
border-radius: 0.5rem;
cursor: pointer;
background-color: #f7f7f7;
font-family:'Noto Serif Thai', serif;
font-weight: 600;
transform: scale(0.9);
}
.cssUploadFile:hover {
    background-color: #fcfcfc;
    transform: scale(1.0);
  }

.cssInputFile{
    display: grid;
}

input::file-selector-button {
    background-image: linear-gradient(
      to right,
      #68737a,
      #8dc0da,
      #061922 100%,
      #20385B 200%
    );
    background-position-x: 0%;
    background-size: 300%;
    border: 0;
    border-radius: 8px;
    color: #fff;
    padding: 0.5rem 1rem;
    text-shadow: 0 1px 1px #333;
    transition: all 0.25s;
    transform: scale(0.8);
    font-family:'Noto Serif Thai', serif;
  }
  input::file-selector-button:hover {
    background-position-x: 100%;
    transform: scale(1.0);
    border-radius: 8px;
    cursor: pointer;
    font-family:'Noto Serif Thai', serif;
  }
`;

/* 
Kanokwan Mahakham
วิธีการใช้
<UploadFile />
*/