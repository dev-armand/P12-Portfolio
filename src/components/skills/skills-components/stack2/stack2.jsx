import './stack2.scss'
import PhotoCSS from '../../../../assets/CSS3_logo_and_wordmark.svg.png'
import PhotoHTML from '../../../../assets/HTML5_logo_and_wordmark.svg.png'
import PhotoJavascript from '../../../../assets/Unofficial_JavaScript_logo_2.svg.png'


function Stack2() {
  return(
    <div className='stack-section__container2'>
      <img src={PhotoCSS} alt="icon CSS" className='stack-section__container2__img' />
      <img src={PhotoHTML} alt="icon HTML" className='stack-section__container2__img'/>
      <img src={PhotoJavascript} alt="icon Javascript" className='stack-section__container2__img' />
    </div>
  )
}

export default Stack2 