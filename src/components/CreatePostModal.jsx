import React, { useState } from 'react';
import './CreatePostModal.css';
import ImageUploader from './ImageUploader';

export default function CreatePostModal({ onClose }) {
  const [caption, setCaption] = useState('');
  const [image, setImage] = useState(null);

  const handlePost = () => {
    console.log('Post submitted:', { caption, image });
    onClose(); // Close modal after submission
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>Create New Post</h2>
        <ImageUploader onImageUpload={setImage} />
        <textarea
          placeholder="Write a caption..."
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
        />
        <div className="modal-buttons">
          <button onClick={handlePost} disabled={!image}>
            Share
          </button>
          <button onClick={onClose} className="cancel">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
