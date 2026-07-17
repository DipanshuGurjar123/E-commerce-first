import React from 'react'
import About from '../assets/AboutUs.png'

const AboutUs = () => {
    return (
        <section className='max-w-6xl mx-auto px-5 mt-12'>

            <div className='grid md:grid-cols-2 mb-4 border bg-[#111827] rounded-lg justify-between'>
                {/* Left Section */}
                <div className='rounded-lg '>
                    <img src={About}
                     alt="" 
                     className='w-full h-80 object-contain'
                     />
                </div>

                {/* Right Section */}
                <div className='text-white py-5 px-14'>
                    <h1 className='font-bold text-2xl'>About us</h1>

                    <p className='py-10'> <span className='font-semibold'>Our motive is to make shopping easy </span><br /><br />

                    Our Digital shop is a way to make you <br /> shop easy and Digitally <br />

                    we offers you all the products on the very <br /> lowest price
                    </p>
                </div>
            </div>
        </section>
    )
}

export default AboutUs
