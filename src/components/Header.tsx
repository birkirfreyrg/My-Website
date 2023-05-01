import React from 'react';
import '../styles/Header.css'
import Logo from '../components/Logo';

function Header() {
  return (
    <div className="header-container">
        <div className='header'>
            <Logo />
        </div>
    </div>
  );
}

export default Header;
