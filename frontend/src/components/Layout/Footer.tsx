// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <p style={{ margin: 0 }}>
          &copy; {new Date().getFullYear()} Notable. All rights reserved.
        </p>
        <p> God loves you and Jesus is the Christ </p>
        
      </div>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#255c99',
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


export default Footer;