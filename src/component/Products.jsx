import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Products = () => {
    const [products, setProducts] = useState([])
    const { addToCart } = useContext(CartContext);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        axios.get("https://dummyjson.com/products")
            .then((response) => {
                setProducts(response.data.products)
                console.log("product data", response.data.products)
            })
            .catch((error) => {
                console.log("Error occurce", error);
            })
            .finally(() => {
                setLoading(false);
            })
    }, [])


    return (
        <section className='max-w-6xl mx-auto px-5 mt-12 py-3'>

            <div>
                <h2 className='font-bold text-2xl '>Featured Products</h2>

                <p className='mt-4 mb-4'>Explore our latest collection</p>
            </div>

            {loading ? (
                <div className="flex flex-col justify-center items-center h-[70vh]">
                    <div className="relative w-14 h-14">
                        <div className="absolute inset-0 rounded-full border-4 border-gray-200"></div>
                        <div className="absolute inset-0 rounded-full border-4 border-blue-600 border-t-transparent animate-spin"></div>
                    </div>

                    <p className="mt-4 text-gray-600 font-medium animate-pulse">
                        Loading Products...
                    </p>
                </div>
            ) : (
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8'>
                    {products.map((product) => (
                        <div key={product.id}
                            className='bg-gray-300 rounded-2xl hover:-translate-y-2 border transition duration-300'
                        >

                            <div className='border m-4 rounded-4xl bg-white'>
                                <img src={product.thumbnail}
                                    alt={product.title}
                                    className='w-full h-56 object-contain rounded-lg'
                                />
                            </div>

                            <div className='px-5 pt-4'>
                                <p className='underline font-bold text-xl'>Rs.:- {product.price} only</p>
                            </div>

                            <div className='px-5 py-3'>
                                <p className='text-blue-800 font-medium capitalize text-xl'>{product.category}</p>

                                <h2>{product.title}</h2>
                            </div>

                            <div className='pb-2 px-5 flex justify-between'>
                                <p className='bg-yellow-200 p-2 rounded-lg'>Rating: {product.rating} ⭐️</p>

                                <p className='bg-purple-200 p-2 rounded-lg'>Stock: {product.stock}</p>
                            </div>

                            <div className='px-5 py-2 flex flex-col gap-2'>
                                <button className='bg-green-400 w-full rounded-lg p-4 cursor-pointer'>Buy at Rs. {product.price}</button>
                                <button
                                    onClick={() => addToCart(product)}
                                    className="bg-blue-400 w-full rounded-lg p-4 cursor-pointer hover:bg-blue-500 transition"
                                >
                                    Add To Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

        </section>
    )
}

export default Products
