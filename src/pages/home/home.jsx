import Footer from '../../components/footer/footer'
import Header from '../../components/header/header'
import FrontPage from '../../components/front-page/front-page'
import About from '../../components/about/about'
import Skills from '../../components/skills/skills'
import Projects from '../../components/projects/projets'
import Contact from '../../components/contact/contact'
import Loader from '../../components/loader/loader'
import './home.scss'

function Home() {
  return(
    <div className='home-page'>
      <Loader />
      <Header />
      <FrontPage />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home