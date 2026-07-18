import React from 'react'
import Navbar from '../component/Navbar'
import HeroSection from '../component/HeroSection'
import SearchByCategory from '../component/SearchByCategory'
import Products from '../component/Products'
import AboutUs from '../component/AboutUs'
import ContactUs from '../component/ContactUs'
import Footer from '../component/Footer'



const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <SearchByCategory />
      <Products />
      <AboutUs />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default Home