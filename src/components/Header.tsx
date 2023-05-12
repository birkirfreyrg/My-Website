import React from 'react';
import '../styles/Header.css'
import Logo from '../components/Logo';
import NavBar from '../components/NavBar';

function Header() {
  const links = [
    { text: 'Home', href: '/' },
    { text: 'About', href: '/about' },
    { text: 'Contact', href: '/contact' },
  ];

  return (
    <div className="header-container">
        <div className='header'>
            <Logo />
            <NavBar links={links} />
        </div>
    </div>
  );
}

export default Header;
