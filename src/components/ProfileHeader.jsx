import React from 'react';
import './ProfileHeader.css';
import FollowButton from './FollowButton';

export default function ProfileHeader() {
  return (
    <div className="profile-header">
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        className="profile-avatar"
      />
      <div className="profile-info">
        <div className="profile-top">
          <h2>username</h2>
          <FollowButton />
        </div>
        <div className="profile-stats">
          <span><strong>12</strong> posts</span>
          <span><strong>340</strong> followers</span>
          <span><strong>180</strong> following</span>
        </div>
        <div className="profile-bio">
          <p>This is a short bio about the user.</p>
        </div>
      </div>
    </div>
  );
}
