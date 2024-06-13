// Navbar.js

import React from 'react';
import './styles.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Logo" />
      </div>
      <div className="search">
        <input type="text" placeholder="Search..." />
        <button type="button">Search</button>
      </div>
      <div className="links">
        <a href="#">Hello, Sign in</a>
        <a href="#">Returns & Orders</a>
        <a href="#" className="cart">
          <img src="https://image.shutterstock.com/image-vector/shopping-cart-icon-260nw-600243019.jpg" alt="Cart" />
          Cart
        </a>
      </div>
    </div>
  );
};

export default Navbar;
