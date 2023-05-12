import React from 'react';
import '../styles/NavBar.css';

type Link = {
  text: string;
  href: string;
};

type NavBarProps = {
  links: Link[];
  className?: string;
};

const NavBar: React.FC<NavBarProps> = ({ links, className = '' }) => {
  return (
    <nav className={`nav-bar ${className}`}>
      <ul className="nav-links">
        {links.map((link) => (
          <li key={link.href} className="nav-link">
            <a href={link.href}>{link.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;