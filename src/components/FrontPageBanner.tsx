import React from 'react';
import '../styles/FrontPageBanner.css'
import springWater from '../images/springwater.png';
import LinkButton from './LinkButton';
import LinkIcon from '../images/box-arrow-up-right.svg';

function FrontPageBanner() {
  const text = "There are countless reasons why Gorilla Water should be on your shopping list. Gorilla Water includes all the vitamins you can think of, every bottle is filled with Icelandic spring water. Find a bottle near you now and experience Icelandic Power in a unique way.";

  return (
    <div className="front-page-banner-container">
        <img src={springWater} alt="Spring Water" className='front-page-banner'></img>
        <div className='spring-water-text-container'>
          <p className='spring-water-text-header'>Gorilla Water</p>
          <p className='spring-water-text' >{text}</p>
          <LinkButton
          text="Read more"
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          icon={LinkIcon}
          />        
        </div>
    </div>
  );
}

    

export default FrontPageBanner;
