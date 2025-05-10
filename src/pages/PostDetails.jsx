import React from 'react';
import './PostDetails.css';

const PostDetails = () => {
  return (
    <div className="post-details">
      <div className="image-section">
        <img src="/assets/sample-post.jpg" alt="Post" />
      </div>
      <div className="info-section">
        <h2>Username</h2>
        <p>This is a caption for the post.</p>
        <div className="comments">
          <p><strong>User1:</strong> Great post!</p>
          <p><strong>User2:</strong> Love this!</p>
        </div>
        <input type="text" placeholder="Add a comment..." />
      </div>
    </div>
  );
};

export default PostDetails;