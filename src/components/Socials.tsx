import React from "react";
import "../styles/Socials.css";
import facebookLogo from "../images/fb-icon.png";
import instagramLogo from "../images/ig-icon.png";
import twitterLogo from "../images/twitter-logo.avif";

function Socials() {
  const socialsData = [
    { platform: "Facebook", logo: facebookLogo, url: "/" },
    { platform: "Instagram", logo: instagramLogo, url: "/" },
    { platform: "Twitter", logo: twitterLogo, url: "/" },
  ];

  return (
    <div className="socials-container">
      <div className="socials">Get Social with Us!</div>
      <div className="socials-logos">
        {socialsData.map((social) => (
          <a
            key={social.platform}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={social.logo} alt={`${social.platform} Logo`} />
          </a>
        ))}
      </div>
    </div>
  );
}

export default Socials;
//
