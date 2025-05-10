import React from 'react';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">MyInstagram</div>
      <input className="navbar-search" placeholder="Search" />
      <div className="navbar-icons">
        <span>🏠</span>
        <span>💬</span>
        <span>➕</span>
        <span>❤️</span>
        <span>👤</span>
      </div>
    </nav>
  );
}
