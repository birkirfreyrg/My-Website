import React from 'react';
import '../styles/Logo.css'
import logo from '../images/logo.png';

function Logo() {
  return (
    <div className="logo-container">
      <a href="/" >
        <img src={logo} alt="Logo" className='logo'></img>
      </a>
    </div>
  );
}

export default Logo;
