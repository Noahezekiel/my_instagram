
import React from 'react';
import './Post.css';

export default function PostCard({ post }) {
  return (
    <div className="post-card">
      <div className="post-header">
        <span className="username">{post.username}</span>
      </div>
      <img src={post.imageUrl} alt="post" className="post-image" />
      <div className="post-caption">{post.caption}</div>
    </div>
  );
}
