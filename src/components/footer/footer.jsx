// This is the "Footer" for my application

import { Link } from 'react-router-dom';
import './_footer.scss'

function Footer() {
  return(
    <footer className='footer'>
    <p className="footer__text">Made by Armand Bredean - 2023</p>
    <Link to="/legal">Legal Information</Link>
  </footer>
)
}

export default Footer