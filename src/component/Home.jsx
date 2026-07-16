import React from 'react'
import Navbar from "./Navbar"
import HeroSection from './HeroSection'
import SearchByCategory from './SearchByCategory'


const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <SearchByCategory />
    </div>
  )
}

export default Home
