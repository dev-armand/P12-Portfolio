// This is the "Error 404 page"

import './_error.scss'
import Footer from '../../components/footer/footer'
import Header from '../../components/header/header'

function Error() {
  return (
    <div>
      <Header />
    <section className="error">
      <h1>Erreur 404</h1>
      <h2> Cette page est introuvable </h2>
    </section>
    <Footer />
    </div>
  )
}

export default Error