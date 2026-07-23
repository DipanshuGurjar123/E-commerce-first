import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
import { AiOutlineLinkedin } from "react-icons/ai";
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className='bg-slate-900 text-slate-300 shadow-md'>

        <div className='max-w-6xl mx-auto p-5'>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between pt-10 h-auto pb-6 gap-20'>

                <div className='pb-22'>
                    <p className='font-bold underline'>Social Media -</p>
                    <div className='text-2xl flex gap-4 pt-6 cursor-pointer'>
                        <button className="p-2 rounded-full hover:bg-slate-100 text-slate-400 transition-colors duration-200">
                            <FaInstagram />
                        </button>
                        <button className="p-2 rounded-full hover:bg-slate-100 text-slate-400 transition-colors duration-200">
                            <CiFacebook />
                        </button>
                        <button className="p-2 rounded-full hover:bg-slate-100 text-slate-400 transition-colors duration-200">
                            <AiOutlineLinkedin />
                        </button>   
                    </div>
                </div>

                <div >
                    <p className='font-bold  underline pb-3'>Services -</p>
                    <div className='grid grid-col pt-3 gap-5'>      
                        <Link to='/'><p className='cursor-pointer'>Home</p></Link>
                        <Link to='categories'><p className='cursor-pointer'>Category</p></Link>
                        <Link to='products'><p className='cursor-pointer'>Products</p></Link>
                        <Link to='about'><p className='cursor-pointer'>About</p></Link>
                        <Link to='contact'><p className='cursor-pointer'>Contact</p></Link>
                    </div>
                </div>

                <div>
                    <h1 className='font-bold pb-3 underline'>Products -</h1>
                     <div className='grid grid-col pt-3 gap-5 list-none'>
                        <p>Grocery</p>
                        <p>Beauty</p>
                        <p>Fragrances</p>
                        <p>Furniture</p>
                        <p>Smart-Phones</p>
                        <p></p>
                    </div>
                </div>

                <div>
                    <h1 className='font-bold pb-3 underline'>Contact -</h1>
                    <div className='grid grid-col pt-3 gap-5 list-none'>
                       <p>📞 +91 9303659488</p>
                       <p>📮 support@digitalshop.com</p> 
                       <p>📍 Indore, Madhya Pradesh</p> 
                    </div>
                </div> 
            </div>
            <hr className='border-gray-400 opacity-30 my-6'/>
            <div className='flex justify-between p-4'>
                <p>@2026 DigitalShop All Rights Reserved</p>
                <p className='flex gap-8'><span className='hover:underline'>Privacy policy</span> <span className='hover:underline'>Terms & Conditions</span></p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
