import React from 'react';
import './Explore.css';

const Explore = () => {
  return (
    <div className="explore">
      <h1>Explore</h1>
      <div className="grid">
        {[...Array(12)].map((_, i) => (
          <img key={i} src={`/assets/sample${(i % 6) + 1}.jpg`} alt="Explore" />
        ))}
      </div>
    </div>
  );
};

export default Explore;