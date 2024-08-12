// This is the "Front-page" it will be the first section to be seen on this application

import './_front-page.scss'
import { Link } from 'react-scroll';
import useScrollVisibility from '../scroll/scroll';

function FrontPage() {
  const thresholds = [window.innerHeight * 0.5, window.innerHeight * 0.5];
  const [currentSectionRef, isVisible] = useScrollVisibility(thresholds);

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