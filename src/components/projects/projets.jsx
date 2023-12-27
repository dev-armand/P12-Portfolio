// This is the "Project" section, it will contains the project cards

import './projects.scss'
import Kasa from '../../assets/kasa.png'
import Sophie from '../../assets/sophiebluel.png'
import Ohmyfood from '../../assets/ohmyfood.png'
import useScrollVisibility from '../scroll/scroll'
import Card from '../card/card'
import PhotoCSS from '../../assets/CSS3_logo_and_wordmark.svg.png'
import PhotoHTML from '../../assets/HTML5_logo_and_wordmark.svg.png'
import PhotoReact from '../../assets/React-icon.svg.png'
import PhotoJavascript from '../../assets/Unofficial_JavaScript_logo_2.svg.png'
import PhotoSASS from '../../assets/2560px-Sass_Logo_Color.svg.png'


function Projects() {
  const thresholds = [window.innerHeight * 0.6, window.innerHeight * 0.4];
  const [currentSectionRef, isVisible] = useScrollVisibility(thresholds);

  return(
    <div id='projects' className={`projects ${isVisible ? 'visible' : ''}`} ref={currentSectionRef}>
      <h2 id='projects-title'> Projects</h2>
      <div className='projects__container'>
        <Card
          githubLink="https://github.com/dev-armand/P8-Kasa"
          image= {Kasa} 
          title= "Kasa"
          text= "Kasa is rental property app that I created with React and React Router"
          icon1= {PhotoCSS}
          icon2= {PhotoHTML}
          icon3= {PhotoReact}
          icon4= {PhotoJavascript}
          icon5= {PhotoSASS}
        />
        <Card
          githubLink="https://github.com/dev-armand/P6-Sophie-Bluel"
          image= {Sophie} 
          title= "Sophie Bluel"
          text= "For her Portfolio I had to create a Login function that handles user input (email and password), sends it to a server-side API for authentication. Once connected she can add or delete a project."
          icon1= {PhotoCSS}
          icon2= {PhotoHTML}
          icon3= {PhotoReact}
        />
        <Card
          githubLink="https://github.com/dev-armand/P4-ohmyfood"
          image= {Ohmyfood} 
          title= "Ohmyfood"
          text= "I had to create a food menu completely responsive for all devices and I started with mobile first. I also added a loader and some CSS animations for choosing a menu and the like button."
          icon1= {PhotoCSS}
          icon2= {PhotoHTML}
        />
      </div>
    </div>
  )
}

export default Projects