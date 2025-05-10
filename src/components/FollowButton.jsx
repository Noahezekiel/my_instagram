import React, { useState } from 'react';

export default function FollowButton() {
  const [isFollowing, setIsFollowing] = useState(false);

  const toggleFollow = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <button onClick={toggleFollow}>
      {isFollowing ? 'Unfollow' : 'Follow'}
    </button>
  );
}
