import React from 'react'
import shoes from "../assets/shoes.jpg"

const HeroSection = () => {
  return (
    <div className='max-w-6xl mx-auto px-5 mt-8'>
      <div className='bg-[#111827] rounded-3xl overflow-hidden grid md:grid-cols-2 items-center'>

        {/* left section */}
        <div className='p-8 md:p-16 leading-tight'>
          <h1 className='text-white text-4xl md:text-6xl font-bold'>
            Curated Goods
            <br />
            Timeless Design
          </h1>
          <p className='text-gray-300 mt-6'>
            Describe premium quality products with modern
            design with affordable prices
          </p>
          <button className='mt-8 bg-green-500 px-7 py-3 rounded-full font-medium'>
            Shop now
          </button>
        </div>

        <div>
          <img src={shoes} alt="" />
        </div>
      </div>
    </div>
  )
}

export default HeroSection
