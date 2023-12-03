import './stack3.scss'
import PhotoCSS from '../../../../assets/CSS3_logo_and_wordmark.svg.png'
import PhotoHTML from '../../../../assets/HTML5_logo_and_wordmark.svg.png'


function Stack3() {
  return(
    <div className='stack-section__container3'>
      <img src={PhotoCSS} alt="icon CSS" className='stack-section__container2__img' />
      <img src={PhotoHTML} alt="icon HTML" className='stack-section__container2__img'/>
    </div>
  )
}

export default Stack3 