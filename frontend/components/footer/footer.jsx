import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="footer-links">
        <i className="fab fa-linkedin" />
        <i className="fab fa-angellist" />
        <i className="fab fa-github" />
        <i className="fas fa-user-tie" />
      </div>
      <div className="creator-name"> 
        <p>Created By Gustavo Gutierrez</p>
      </div>
      <div className="lower-footer">
        <p>All Artists</p>
        <ul>
          <li>links for alphabet of artist</li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;