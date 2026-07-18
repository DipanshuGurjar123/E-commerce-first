import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
import { AiOutlineLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className='bg-black text-white shadow-md'>

        <div className='max-w-6xl mx-auto p-5'>

            <div className='grid grid-cols-2 md:grid-cols-3 justify-start items-cente pt-10 h-80'>

                <div className='pb-22'>
                    <p className='underline'>Social Media</p>
                    <div className='text-2xl flex gap-4 pt-6'>
                        <FaInstagram />
                        <CiFacebook />
                        <AiOutlineLinkedin />
                    </div>
                </div>

                <div >
                    <p className='font-bold  underline pb-3'>Services -</p>
                    <div className='grid grid-col pt-3 gap-4'>      
                        <li className='cursor-pointer hover:text-blue-600 list-none'>Home</li>
                        <li className='cursor-pointer hover:text-blue-600 list-none'>About</li>
                        <li className='cursor-pointer hover:text-blue-600 list-none'>Category</li>
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
