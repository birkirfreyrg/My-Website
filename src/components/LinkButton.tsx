import React from 'react';
import '../styles/LinkButton.css';

type LinkButtonProps = {
  text: string;
  href: string;
  target?: string;
  rel?: string;
  className?: string;
  icon: string;
};

const LinkButton: React.FC<LinkButtonProps> = ({
  text,
  href,
  target = '_self',
  rel = 'noopener noreferrer',
  className = '',
  icon,
}) => {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={`link-button ${className}`}
    >
      <span className="link-button-icon">
        <img src={icon} alt="Link button icon" />
      </span>
      {text}
    </a>
  );
};

export default LinkButton;
