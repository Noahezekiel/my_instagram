import React, { useRef } from 'react';
import './ImageUploader.css';

export default function ImageUploader({ onImageUpload }) {
  const fileInputRef = useRef();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      onImageUpload(URL.createObjectURL(file)); // Mock preview
    }
  };

  return (
    <div className="image-uploader">
      <button onClick={() => fileInputRef.current.click()}>Upload Image</button>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
    </div>
  );
}
