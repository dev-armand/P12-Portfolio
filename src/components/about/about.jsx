import './about.scss'
import Photo from '../../assets/profilePic.jpg'
import React, { useState, useEffect, useRef } from 'react';

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const currentSectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const { top, bottom } = currentSectionRef.current.getBoundingClientRect();
      const thresholdAppear = window.innerHeight * 0.8;
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
    <div id='about' className={`about ${isVisible ? 'visible' : ''}`} ref={currentSectionRef}>
      <div className='about__section-container'>
        <div className='about__section-container__left-section'>
          <p className='about__section-container__left-section__name'>Armand Bredean</p>
          <img className='about__section-container__left-section__profile-pic' src={Photo} alt="profile pic" />
        </div>
        <div className='about__section-container__right-section'>
          <p>Hello! My name is <span  className='about__section-container__right-section__span'>Armand</span> I am 26 years old and I am from France.</p>
          <p>
          My interest for web developement started when I wanted know how to create a website and the best way to understand it is by creating one! I went on youtube and I started with some tutorial for HTML, CSS and Javascript and after watching a couples videos it was clear to me, I will become a frontend web developer. 
          Shorly after I applied for an online web developer school.
          </p>
          <p>Then on my journey begins...</p>
        </div>
      </div>
    </div>
  )
}

export default About