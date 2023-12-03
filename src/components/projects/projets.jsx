import './projects.scss'
import Kasa from '../../assets/kasa.png'
import Stack1 from '../skills/skills-components/stack1/stack1'
import Stack2 from '../skills/skills-components/stack2/stack2'
import Stack3 from '../skills/skills-components/stack3/stack3'
import GitHub from '../../assets/github-mark-white.png'
import Sophie from '../../assets/sophiebluel.png'
import Ohmyfood from '../../assets/ohmyfood.png'
import React, { useState, useEffect, useRef } from 'react';

function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const currentSectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const { top, bottom } = currentSectionRef.current.getBoundingClientRect();
      const thresholdAppear = window.innerHeight * 0.6;
      const thresholdDisappear = window.innerHeight * 0.4; // Adjust this value for disappearance

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
    <div id='projects' className={`projects ${isVisible ? 'visible' : ''}`} ref={currentSectionRef}>
      <h2 id='projects-title'> Projects</h2>
      <div className='projects__container'>
        <div className='projects__container__left-section'> 
          <img src={Kasa} alt="img" className='projects__container__left-section__img' />
          <h3>Kasa</h3>
          <p>Kasa is rental property app that I created with React and React Router</p>
          <Stack1 />
          <a href="https://github.com/dev-armand/P8-Kasa" target="_blank" rel="noopener noreferrer">
            <img src={GitHub} alt="icon github" className='gitHub' />
          </a>
        </div>

        <div className='projects__container__center-section'> 
        <img src={Sophie} alt="img" className='projects__container__left-section__img' />
          <h3>Sophie Bluel</h3>
          <p>For her Portfolio I had to create a Login function that handles user input (email and password),
            sends it to a server-side API for authentication. Once connected she can add or delete a project.
          </p>
          <Stack2 />
          <a href="https://github.com/dev-armand/P6-Sophie-Bluel" target="_blank" rel="noopener noreferrer">
            <img src={GitHub} alt="icon github" className='gitHub' />
          </a>
        </div>

        <div className='projects__container__right-section'> 
        <img src={Ohmyfood} alt="img" className='projects__container__left-section__img' />
          <h3>Ohmyfood</h3>
          <p>I had to create a food menu completely responsive for all devices and I started with mobile first. I also added a loader 
            and some CSS animations for choosing a menu and the like button.
          </p>
          <Stack3 />
          <a href="https://github.com/dev-armand/P4-ohmyfood" target="_blank" rel="noopener noreferrer">
            <img src={GitHub} alt="icon github" className='gitHub' />
          </a>
        </div>

      </div>
    </div>
  )
}

export default Projects