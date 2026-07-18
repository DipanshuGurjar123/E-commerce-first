import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
import { AiOutlineLinkedin } from "react-icons/ai";
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className='bg-black text-white shadow-md'>

        <div className='max-w-6xl mx-auto p-5'>

            <div className='grid grid-cols-2 md:grid-cols-3 justify-start items-cente pt-10 h-auto pb-6'>

                <div className='pb-22'>
                    <p className='underline'>Social Media</p>
                    <div className='text-2xl flex gap-4 pt-6 cursor-pointer'>
                        <FaInstagram />
                        <CiFacebook />
                        <AiOutlineLinkedin />
                    </div>
                </div>

                <div >
                    <p className='font-bold  underline pb-3'>Services -</p>
                    <div className='grid grid-col pt-3 gap-4'>      
                        <Link to='/'><p className='cursor-pointer hover:text-blue-600'>Home</p></Link>
                        <Link to='categories'><p className='cursor-pointer hover:text-blue-600'>Category</p></Link>
                        <Link to='products'><p className='cursor-pointer hover:text-blue-600'>Products</p></Link>
                        <Link to='about'><p className='cursor-pointer hover:text-blue-600'>About</p></Link>
                        <Link to='contact'><p className='cursor-pointer hover:text-blue-600'>Contact</p></Link>
                    </div>
                </div>

                <div>
                    <h1 className='font-bold pb-3 underline'>Trendings -</h1>
                    <div className='grid grid-col pt-3 gap-5 list-none'>
                        <li>Girls Top</li>
                        <li>Womens Stylish Bags</li>
                        <li>Kitchen Stylish Accessories</li>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
