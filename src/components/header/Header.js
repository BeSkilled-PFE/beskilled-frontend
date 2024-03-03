import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <nav>
        <div className="logo">
          <a href="/">
            <img src="/assets/Logo.png" alt="Logo" className='logo-img' />
          </a>
        </div>
        <div className="userlogo">
          <div className="logo-user" onClick={toggleMenu}>
            <img src="/assets/user_logo.png" alt="userLogo" className='logo-user' />
          </div>
          {menuOpen && (
            <div className="dropdown-menu">
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li><a href="/login">Connexion</a></li>
                <li><a href="/register">Inscription</a></li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
