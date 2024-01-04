// This is the "Error 404 page"

import './_error.scss'
import Footer from '../../components/footer/footer'
import Header from '../../components/header/header'

function Error() {
  return (
    <div className='error'>
    <section className="error__card">
      <h1>Erreur 404</h1>
      <h2> Cette page est introuvable </h2>
    </section>
    </div>
  )
}

export default Error