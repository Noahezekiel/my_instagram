import React, { useState } from 'react';
import './Home.css';
import Sidenav from '../components/Navbar/Side_Navbar';
import Timeline from '../components/Timeline/Timeline';
import PostPage from '../components/Timeline/PostPage/Post';
import ProfilePage from '../components/Timeline/ProfilePage/Profile';
import SearchBar from '../components/SearchBar/SearchBar';
import Suggestions from '../components/Suggestions/Suggestions';
import { Routes, Route, Navigate } from 'react-router-dom';

function Homepage({ currentUserId }) {
  const [searchResults, setSearchResults] = useState(null);

  console.log('Homepage currentUserId:', currentUserId); // Debug

  const handleSearchResults = (results) => {
    setSearchResults(results);
  };

  return (
    <div className="homepage">
      <div className="homepage__nav">
        <Sidenav />
      </div>
      <div className="homepage__main">
        <SearchBar onSearchResults={handleSearchResults} />
        {searchResults ? (
          <div className="search-results">
            <h2>Search Results</h2>
            <h3>Users</h3>
            {searchResults.users?.map(user => (
              <p key={user.id}>{user.username}</p>
            ))}
            <h3>Posts by Tag</h3>
            {searchResults.postsByTag?.map(post => (
              <p key={post.id}>{post.text} (Tags: {post.tags?.join(', ')})</p>
            ))}
          </div>
        ) : (
          <div className="homepage__content">
            <div className="homepage__timeline">
              <Routes>
                <Route path="/" element={<Timeline />} />
                <Route path="/create-post" element={<PostPage />} />
                <Route path="/profile/:userId" element={<ProfilePage />} />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </div>
            <div className="homepage__suggestions">
              <Suggestions currentUserId={currentUserId} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Homepage;