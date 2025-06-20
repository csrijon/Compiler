import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h3 className="footer-title">CompileX</h3>
          <p>© {new Date().getFullYear()} All rights reserved.</p>
        </div>

        <div className="footer-links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Projects</a>
          <a href="#">Contact</a>
        </div>

        <div className="footer-social">
          <a href="#"><i className="fa-brands fa-github"></i></a>
          <a href="#"><i className="fa-brands fa-linkedin"></i></a>
          <a href="#"><i className="fa-brands fa-twitter"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
