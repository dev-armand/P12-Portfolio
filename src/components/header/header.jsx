// This is the "Header" of this application

import './header.scss'
import VideoBackhole from '../video/blackhole'
import { Link, animateScroll as scroll } from 'react-scroll';
import HomeIcon from '../../assets/homeicon.png'
import GitHub from '../../assets/github-mark-white.png'

function Header() {
  const scrollToTop = () => {
    scroll.scrollToTop({
      smooth: true,
      duration: 500
    });
  };
  return (
    <div> 
      <VideoBackhole />
      <nav className="nav">
      
      <div className='nav__left-section'>
        <div className='nav__left-section__name-container'>
          <h2>Armand Bredean</h2>
        </div>
      
      </div>
      <div className='nav__center-section'>
        <div className='nav__center-section__navbar'>
          <Link to='about' smooth={true} duration={500}  offset={-150}>About</Link>
          <Link to='skills' smooth={true} duration={500}  offset={-250}>Skills</Link>
          <Link to='projects' smooth={true} duration={500}  offset={-300}>Projects</Link>
          <Link to='contact' smooth={true} duration={500}  offset={-190}>Contact</Link>
        </div>
          <Link to='top' smooth={true} duration={500}>
              <img src={HomeIcon} alt="home" className='nav__center-section__home-icon' onClick={scrollToTop} />
          </Link>
      </div>
      <div className='nav__right-section'>
      <a href="https://github.com/dev-armand" target="_blank" rel="noopener noreferrer">
        <img src={GitHub} alt="icon git" className='nav__right-section__Github' />
        </a>
      </div>
      </nav>
    </div>
  )
}

export default Header