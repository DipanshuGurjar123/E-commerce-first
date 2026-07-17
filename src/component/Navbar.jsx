import React, { useState } from 'react'
import { TiThMenu } from "react-icons/ti";
import { ImCross } from "react-icons/im";

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav className='bg-white shadow-md'>
            <div className='max-w-6xl mx-auto p-5'>
                <div className='flex justify-between items-center'>
                    <h1 className='font-bold text-2xl'>
                        DigitalShop 
                    </h1>

                    <ul className='hidden md:flex gap-8 md:gap-14 '>
                        <li className='cursor-pointer hover:text-blue-600'>Home</li>
                        <li className='cursor-pointer hover:text-blue-600'>About</li>
                        <li className='cursor-pointer hover:text-blue-600'>Category</li>
                    </ul>

                    <button className='md:hidden'
                        onClick={() => {
                            setMenuOpen(!menuOpen)
                        }}
                    >
                        {!menuOpen ? <TiThMenu /> : <ImCross />}
                    </button>
                </div>
            </div>

            <div>
                {menuOpen && (
                    <div className='md:hidden mt-2 p-5 rounded-lg bg-transparent'>
                        <ul className='flex flex-col gap-5 font-medium'>
                            <li className='cursor-pointer hover:text-blue-600'>Home</li>
                            <li className='cursor-pointer hover:text-blue-600'>About</li>
                            <li className='cursor-pointer hover:text-blue-600'>Category</li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar
