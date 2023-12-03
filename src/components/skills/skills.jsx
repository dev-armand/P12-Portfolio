import './skills.scss';
import PhotoCSS from '../../assets/CSS3_logo_and_wordmark.svg.png';
import PhotoHTML from '../../assets/HTML5_logo_and_wordmark.svg.png';
import PhotoReact from '../../assets/React-icon.svg.png';
import PhotoJavascript from '../../assets/Unofficial_JavaScript_logo_2.svg.png';
import PhotoSASS from '../../assets/2560px-Sass_Logo_Color.svg.png';
import React, { useState, useEffect, useRef } from 'react';

function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const currentSectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const { top, bottom } = currentSectionRef.current.getBoundingClientRect();
      const thresholdAppear = window.innerHeight * 0.5;
      const thresholdDisappear = window.innerHeight * 0.5; // Adjust this value for disappearance

      if (top < thresholdAppear && bottom > thresholdDisappear) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      id='skills'
      className={`skills-section ${isVisible ? 'visible' : ''}`}
      ref={currentSectionRef}
    >
      <h2>Skills</h2>
      <h3>This is the stack that I use</h3>
      <div className='skills-section__container'>
        <img src={PhotoCSS} alt='icon CSS' className='skills-section__container__img' />
        <img src={PhotoHTML} alt='icon HTML' className='skills-section__container__img' />
        <img src={PhotoJavascript} alt='icon Javascript' className='skills-section__container__img' />
        <img src={PhotoReact} alt='icon React' className='skills-section__container__img' />
        <img src={PhotoSASS} alt='icon SASS' className='skills-section__container__img' />
      </div>
    </div>
  );
}

export default Skills;
