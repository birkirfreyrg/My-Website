import React from 'react';
import '../styles/Footer.css'
import Socials from '../components/Socials';
import Info from '../components/Info';
import OpeningHours from './OpeningHours';

function Footer() {
  return (
    <div className="footer-container">
        <div className='footer'>
            <Socials />
            <Info />
            <OpeningHours />
        </div>
    </div>
  );
}

export default Footer;
