import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/HeroSection'
import Introduction from './components/Introduction'
import OurPrograms from './components/OurPrograms'
import WhyChooseUs from './components/WhyChossesUs'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonals'
import ContactSection from './components/Contact'
import Footer from './components/Footer'
const App = () => {
  return (
    <div className=''>
      <Navbar/>
      <Hero/>
      <Introduction/>
      <OurPrograms/>
      <WhyChooseUs/>
      <Gallery/>
      <Testimonials/>
      <ContactSection/>
      <Footer/>
    </div>
  )
}

export default App
