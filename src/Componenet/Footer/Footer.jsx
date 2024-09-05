import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>Product</h3>
        <ul>
          <li><a href="/#">Overview</a></li>
          <li><a href="/#">Features</a></li>
          <li><a href="/#">Tutorials</a></li>
          <li><a href="/#">Pricing</a></li>
          <li><a href="/#">Releases</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Company</h3>
        <ul>
          <li><a href="/#">About Us</a></li>
          <li><a href="/#">Press</a></li>
          <li><a href="/#">Careers</a></li>
          <li><a href="/#">Contact Us</a></li>
          <li><a href="/#">Partners</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Legal</h3>
        <ul>
          <li><a href="/#">Cookies Policy</a></li>
          <li><a href="/#">Privacy Policy</a></li>
          <li><a href="/#">Terms of Service</a></li>
          <li><a href="/#">Law Enforcement</a></li>
          <li><a href="/#">Status</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Follow Us</h3>
        <ul>
          <li><a href="/#">Facebook</a></li>
          <li><a href="/#">Twitter</a></li>
          <li><a href="/#">Dribbble</a></li>
          <li><a href="/#">Instagram</a></li>
          <li><a href="/#">LinkedIn</a></li>
        </ul>
      </div>

      <div className="footer-bottom">
        <p>© 2024 B2B EComm</p>
      </div>
    </footer>
  );
};

export default Footer;
