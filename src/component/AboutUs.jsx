import React from 'react'
import About from '../assets/About.png'

const AboutUs = () => {
    return (
        <section className='max-w-6xl mx-auto px-5 mt-22 mb-22'>

            <div className='grid md:grid-cols-2 mb-4 border bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 rounded-lg justify-between'>
                {/* Left Section */}
                <div className='rounded-lg pt-8'>
                    <img src={About}
                     alt="" 
                     className='w-full h-80 object-contain'
                     />
                </div>

                {/* Right Section */}
                <div className='text-white py-5 px-14'>
                    <h1 className='font-bold text-xl'>About us</h1>

                    <p className='py-2'> <span className='font-semibold text-2xl'>Our motive is to make shopping easy </span><br /><br />

                    Our Digital shop is a way to make you <br /> shop easy and Digitally <br />

                    we offers you all the products on the very <br /> lowest price
                    </p>

                    <div className='py-3 grid grid-cols-2 gap-2'>
                        <div className='px-4 py-3 border rounded-lg bg-transparent'>
                            <p className='text-blue-950 font-bold'>10K+</p>
                            <p>Happy Customer</p>
                        </div>

                        <div className='px-4 py-3 border rounded-lg bg-transparent'>
                            <p className='text-blue-950 font-bold'>500+</p>
                            <p>Premium Products</p>
                        </div>

                        <div className='px-4 py-3 border rounded-lg bg-transparent'>
                            <p className='text-blue-950 font-bold'>100+</p>
                            <p>Trusted Brands</p>
                        </div>

                        <div className='px-4 py-3 border rounded-lg bg-transparent'>
                            <p className='text-blue-950 font-bold'>24/7</p>
                            <p>Customer Support</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs
