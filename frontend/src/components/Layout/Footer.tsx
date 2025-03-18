// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <p style={{ margin: 0 }}>
          &copy; {new Date().getFullYear()} Notable. All rights reserved.
        </p>
        <div style={socialStyle}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>
            Facebook
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>
            Twitter
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '1rem 0',
  textAlign: 'center',
};

const containerStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 1rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const socialStyle = {
  marginTop: '0.5rem',
};

const linkStyle = {
  color: '#fff',
  margin: '0 0.5rem',
  textDecoration: 'none',
};

export default Footer;