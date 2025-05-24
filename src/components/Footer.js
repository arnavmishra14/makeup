// src/components/Footer.js
import React from 'react';
import './Footer.css'; // Optional: create CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Makeup by Yana Gupta. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
