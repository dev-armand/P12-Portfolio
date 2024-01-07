// This is the "About" section with a description of myself

import './_about.scss'
import Photo from '../../assets/profilePic.jpg'
import useScrollVisibility from '../scroll/scroll';

function About() {
  const thresholds = [window.innerHeight * 0.6, window.innerHeight * 0.5];
  const [currentSectionRef, isVisible] = useScrollVisibility(thresholds);
  
  return(
    <div id='about' className={`about ${isVisible ? 'visible' : ''}`} ref={currentSectionRef}>
      <div className='about__section-container'>
        <div className='about__left-section'>
          <p className='about__name'>Armand Bredean</p>
          <img className='about__profile-pic' src={Photo} alt="profile pic" />
        </div>
        <div className='about__right-section'>
         
          <p className='about__subtitle'>My name is Armand I am 26 years old and I am from 
          <span  className='about__span-fr'> FR</span>
          <span  className='about__span-an'>AN</span>
          <span  className='about__span-ce'>CE</span>
          .</p>
         <br />
          <span  className='about__span'>In 2023,</span>
          <p>
            I was curious about how can I make a website and I went on youtube to found out. I watch some tutorials about HTML, CSS to recreate the youtube home page, with javascript I made a "to do" list and then I created a portfolio. Shortly after I applied for an online web developer school "Openclassrooms".
          </p>
          
          <span  className='about__span'>In 2024,</span>
          <p>
          
I graduated from "Openclassrooms" (web developer school) were I have built 12 projects and this is some of the things I have learned from building those projects:
          </p>
          <br />
          <p className='about__list-title'><span  className='about__span'>HTML and CSS </span>to create basic websites:</p>
          <ul className='about__list'>
            <li>semantic tag</li>
            <li>center a div (flexbox)</li>
            <li>responsive website </li>
            <li>media queries (mobile, tablet, desktop)</li>
            <li>CSS animation (use of keyframes)</li>
          </ul>

          <p className='about__list-title'><span  className='about__span'>Javascript </span> for a dynamic website:</p>
          <ul className='about__list'>
            <li>making API calls (get, post, put, patch, delete)</li>
            <li>login/logout function </li>
            <li>slideshow (carousel) function</li>
          </ul>
          <p className='about__list-title'><span  className='about__span'>React </span> to create a single page application:</p>
          <ul className='about__list'>
            <li>React router (routes management)</li>
            <li>Reusable component (use of props)</li>
            <li>Redux (state management)</li>
          </ul>
          <p className='about__list-title'><span  className='about__span'>SASS </span> for CSS optimization</p>
          <ul className='about__list'>
            <li>Structure 7-1</li>
            <li>Mixins</li>
            <li>Variables</li>
          </ul>
          <p className='about__list-title'><span  className='about__span'>SEO </span> to improve website visibility:</p>
          <ul className='about__list'>
            <li>Adding a title, meta description, opengraph and twitter</li>
            <li>Correct tags sementic (h1,h2,h3...)</li>
            <li>Landmarks (nav, header, main)</li>
            <li>Use of Lighthouse and wave (tools for performance, accessibility and seo)</li>
          </ul>
          <p className='about__list-title'><span  className='about__span'>Debugging :</span>:</p>
          <ul className='about__list'>
            <li>Dev Tools</li>
            <li>Unit test</li>
          </ul>
          <br />
          
        </div>
      </div>
    </div>
  )
}

export default About