import React from 'react';
import './Profile.css';
import Navbar from '../components/Navbar';
import ProfileHeader from '../components/ProfileHeader';
import PostCard from '../components/PostCard';

export default function Profile() {
  return (
    <div className="profile-page">
      <Navbar />
      <div className="profile-main">
        <ProfileHeader />
        <div className="profile-posts">
          {/* Sample posts */}
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
      </div>
    </div>
  );
}
