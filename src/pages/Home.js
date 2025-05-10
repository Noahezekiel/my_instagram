import React from 'react';
import './Home.css';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-feed">
        <h2>Welcome to MyInstagram Feed!</h2>
        {/* Posts will go here */}
      </div>
    </div>
  );
}
