import './front-page.scss'
import { Link, animateScroll as scroll } from 'react-scroll';
import React, { useState, useEffect, useRef } from 'react';



function FrontPage() {
  const [isVisible, setIsVisible] = useState(true);
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

  return(
    <div id='front-page' className={`front-page ${isVisible ? 'visible' : ''}`} ref={currentSectionRef}>
      <h1>I am a <span className='front-page__title-span'>Frontend </span> web developer.</h1>
      <h2>I built things for the internet, but mostly websites.</h2>
      <h3>This is my Portfolio</h3>
      <button>
        <Link to='contact' smooth={true} duration={500}  offset={-220}>Contact</Link>
      </button>
    </div>
  )
}

export default FrontPage