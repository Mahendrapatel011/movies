
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Welcome to Mahen's streaming!</h3>
        </div>

        <div className="footer-section">
          <h3>Streaming</h3>
          <ul>
            <li><a href="#">Computer Store</a></li>
            <li><a href="#">Laptop Store</a></li>
            <li><a href="#">Accessories</a></li>
            <li><a href="#">Sales & Discount</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Experience</h3>
          <ul>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Payment Method</a></li>
            <li><a href="#">Delivery</a></li>
            <li><a href="#">Return and Exchange</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Piracy first</h3>
          <p>Be the first to watch new arrivals, Movies<br/> and series!</p>
          <div className="newsletter">
            <input type="email" placeholder="Your Email" />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Code by Mahendra Patel</p>
      </div>
    </footer>
  );
};

export default Footer;
