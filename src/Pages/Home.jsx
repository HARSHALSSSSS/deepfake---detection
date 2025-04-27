import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import SampleVideo from '../components/SampleVideo'
import Details from '../components/Details'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <SampleVideo/>
      <Details/>
      <Footer/>
    </div>
  )
}

export default Home
