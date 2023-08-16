import React, { useState } from 'react';
const UploadFile = () => {
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
      <div>
         <input type="file" multiple onChange={handleFileChange} />
         <button onClick={handleUpload}>Upload</button>
      </div>
   );
};
export default UploadFile;

/* 
Kanokwan Mahakham
วิธีการใช้
<UploadFile />
*/