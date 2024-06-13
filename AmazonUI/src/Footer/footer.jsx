// Footer.js

import React from 'react';
import './styles.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="column">
          <h3>Get to Know Us</h3>
          <a href="#">About Us</a>
          <a href="#">Careers</a>
          <a href="#">Press Releases</a>
          <a href="#">Amazon Cares</a>
          <a href="#">Gift a Smile</a>
        </div>
        <div className="column">
          <h3>Connect with Us</h3>
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
        </div>
        <div className="column">
          <h3>Make Money with Us</h3>
          <a href="#">Sell on Amazon</a>
          <a href="#">Sell under Amazon Accelerator</a>
          <a href="#">Amazon Global Selling</a>
          <a href="#">Become an Affiliate</a>
          <a href="#">Fulfilment by Amazon</a>
        </div>
        <div className="column">
          <h3>Let Us Help You</h3>
          <a href="#">COVID-19 and Amazon</a>
          <a href="#">Your Account</a>
          <a href="#">Returns Centre</a>
          <a href="#">100% Purchase Protection</a>
          <a href="#">Amazon App Download</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>&copy; 2024, YourCompany.com, Inc. or its affiliates</span>
      </div>
    </div>
  );
};

export default Footer;
