// This is the "Error 404 page"

import './_error.scss'

function Error() {
  return (
    <div className='error'>
    <section className="error__card">
      <h1>Error 404</h1>
      <h2> This page does not exist. </h2>
    </section>
    </div>
  )
}

export default Error