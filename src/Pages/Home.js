import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Footer from '../Components/Footer'
import Steps from '../Components/Steps'
import Details from './Details'
import Faq from '../Components/Faq'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Steps/>
        <Faq/>
        <Footer/>
    </div>
  )
}

export default Home