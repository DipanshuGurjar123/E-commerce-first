import React, { useState } from 'react'
import { TiThMenu } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import { Link } from 'react-router';
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false)
    const { totalItems } = useContext(CartContext);

    return (
        <nav className='bg-white shadow-md'>
            <div className='max-w-6xl mx-auto p-5'>
                <div className='flex justify-between items-center'>
                    <Link to='/'>
                        <h1 className='font-bold text-2xl cursor-pointer'>
                            DigitalShop
                        </h1>
                    </Link>
                    <div className='hidden md:flex gap-8 md:gap-14 '>
                        <Link to='/'><p className='cursor-pointer hover:text-blue-600'>Home</p></Link>
                        <Link to='categories'><p className='cursor-pointer hover:text-blue-600'>Category</p></Link>
                        <Link to='products'><p className='cursor-pointer hover:text-blue-600'>Proucts</p></Link>
                        <Link to='about'><p className='cursor-pointer hover:text-blue-600'>About</p></Link>
                        <Link to='contact'><p className='cursor-pointer hover:text-blue-600'>Contact</p></Link>
                        {/* Cart */}
                        <Link to="/cart" className="relative">
                            <FaShoppingCart className="text-3xl text-gray-700 hover:text-blue-600 transition" />

                            {totalItems > 0 && (
                                <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex justify-center items-center">
                                    {totalItems}
                                </span>
                            )}
                        </Link>
                    </div>

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
