import React from 'react'
import HeroSection from '../components/HeroSection'
import BookingForm from '../components/BookingForm'
import FeaturesSection from '../components/FeaturesSection'
import HowItWorks from '../components/HowItWorks'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'


const Home = () => {
  return (
    <div className='home'>
        <Navbar/>
        
      <HeroSection/>
      <BookingForm/>
      <FeaturesSection/>
      <HowItWorks/>
      <Footer/>
    </div>
  )
}

export default Home
