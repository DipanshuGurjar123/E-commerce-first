import React from 'react'
import Navbar from '../component/Navbar'
import HeroSection from '../component/HeroSection'
import SearchByCategory from '../component/SearchByCategory'
import Products from '../component/Products'
import AboutUs from '../component/AboutUs'



const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <SearchByCategory />
      <Products />
      <AboutUs />
    </div>
  )
}

export default Home