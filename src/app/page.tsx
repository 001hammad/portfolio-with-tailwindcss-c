import React from 'react'
import Navbar from './Components/Header'
import Hero from './Components/Hero'
import Contact from './Components/Contact'
import About from './Components/About'
import Footer from './Components/Footer'

const Home = () => {
  return (
    <div id='Home'>
      <Navbar/>
      <Hero/>
      <About/>
      <Contact/>
      <Footer/>

    </div>
  )
}

export default Home
