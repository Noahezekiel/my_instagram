// // Navbar.js
// import React from 'react';
// import './Navbar.css';

// export default function Navbar() {
//   return (
//     <nav className="navbar">
//       <div className="navbar-logo">MyInstagram</div>
//       <input className="navbar-search" placeholder="Search" />
//       <div className="navbar-icons">
//         <span>🏠</span>
//         <span>💬</span>
//         <span>➕</span>
//         <span>❤️</span>
//         <span>👤</span>
//       </div>
//     </nav>
//   );
// }


import React from 'react';
import './Navbar.css';
// import InstagramLogoText from '../assets/instagram_logo_text.png'; // For the text logo
// import HomeIcon from '../assets/home_icon.svg';
// import SearchIcon from '../assets/search_icon.svg';
// import CompassIcon from '../assets/compass_icon.svg';
// import ReelsIcon from '../assets/reels_icon.svg';
// import MessageIcon from '../assets/message_icon.svg';
// import HeartIcon from '../assets/heart_icon.svg';
// import CreateIcon from '../assets/create_icon.svg';
// import UserAvatarPlaceholder from '../assets/default_avatar.png'; // Placeholder

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="navbar-left">
          <img src={InstagramLogoText} alt="Instagram" className="navbar-logo-text" />
        </div>
        <div className="navbar-center">
          <div className="search-container">
            <img src={SearchIcon} alt="Search" className="search-icon" />
            <input type="text" className="search-input" placeholder="Search" />
          </div>
        </div>
        <div className="navbar-right">
          <div className="nav-item">
            <img src={HomeIcon} alt="Home" />
          </div>
          <div className="nav-item">
            <img src={MessageIcon} alt="Messages" />
          </div>
          <div className="nav-item">
            <img src={CreateIcon} alt="Create" />
          </div>
          <div className="nav-item">
            <img src={CompassIcon} alt="Explore" />
          </div>
          <div className="nav-item">
            <img src={HeartIcon} alt="Notifications" />
          </div>
          <div className="nav-item">
            <img src={UserAvatarPlaceholder} alt="Profile" className="profile-avatar" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;