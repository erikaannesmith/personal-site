import React from 'react'
import '../styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <div className="page">
      <div>
        <Header />
        <div className="content">
          <Component {...pageProps} />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default MyApp
