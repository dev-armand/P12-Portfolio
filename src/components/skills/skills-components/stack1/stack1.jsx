import './stack1.scss'
import PhotoCSS from '../../../../assets/CSS3_logo_and_wordmark.svg.png'
import PhotoHTML from '../../../../assets/HTML5_logo_and_wordmark.svg.png'
import PhotoReact from '../../../../assets/React-icon.svg.png'
import PhotoJavascript from '../../../../assets/Unofficial_JavaScript_logo_2.svg.png'
import PhotoSASS from '../../../../assets/2560px-Sass_Logo_Color.svg.png'


function Stack1() {
  return(
    <div className='stack-section__container'>
      <img src={PhotoCSS} alt="icon CSS" className='stack-section__container__img' />
      <img src={PhotoHTML} alt="icon HTML" className='stack-section__container__img'/>
      <img src={PhotoJavascript} alt="icon Javascript" className='stack-section__container__img' />
      <img src={PhotoReact} alt="icon React" className='stack-section__container__img' />
      <img src={PhotoSASS} alt="icon SASS" className='stack-section__container__img' />
    </div>
  )
}

export default Stack1 