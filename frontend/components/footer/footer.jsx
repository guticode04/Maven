import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="footer-links">
        <a
          href="https://www.linkedin.com/in/gustavo-gutierrez-7379141a8/"
          className="icon-links"
        >
          <i className="fab fa-linkedin" />
        </a>
        <a
          href="https://angel.co/u/gustavo-gutierrez-9"
          className="icon-links"
        >
          <i className="fab fa-angellist" />
        </a>
        <a
          href="https://github.com/guticode04"
          className="icon-links"
        >
          <i className="fab fa-github" />
        </a>
        <a
          href="https://gusgutierrez.com"
          className="icon-links"
        >
          <i className="fas fa-user-tie" />
        </a>
      </div>
      <div className="creator-name"> 
        <p>Created By Gustavo Gutierrez</p>
      </div>
      <div className="lower-footer">
        {/* <p>All Artists:</p>
        <ul>
          <li>links for alphabet of artist</li>
        </ul> */}
      </div>
    </footer>
  )
}

export default Footer;