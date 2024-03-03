import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer-content">
        <ul>
          <li><a href="/contact">CONTACT</a></li>
          <li><a href="/terms">CONDITIONS GENERALES ET POLITIQUE DE CONFIDENTIALITE</a></li>
          <li><a href="/help">BESOIN D’AIDE?</a></li>
        </ul>
    </div>
    <div className="footer-bottom">
        <p>BeSkilled Corporation © 2024</p>
        <div className="logo-container">      
          <a href="/link1"><img src="/assets/facebook.png" alt="facebook" /></a>
          <a href="/link2"><img src="/assets/twitter.png" alt="twitter" /></a>
          <a href="/link3"><img src="/assets/instagram.png" alt="instagram" /></a>
        </div>
    </div>
    </footer>
  );
}

export default Footer;
