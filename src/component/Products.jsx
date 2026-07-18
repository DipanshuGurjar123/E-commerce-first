import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
    axios.get("https://dummyjson.com/products")
    .then((response) => {
        setProducts(response.data.products)
        console.log("product data", response.data.products)
    })
    .catch((error) => {
        console.log("Error occurce", error);
        
    })
}, [])


  return (
    <section className='max-w-6xl mx-auto px-5 mt-12 py-3'>

        <div>
            <h2 className='font-bold text-2xl '>Featured Products</h2>

            <p className='mt-4 mb-4'>Explore our latest collection</p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8'>
            {products.map((product) => (
                <div key={product.id}
                className='bg-gray-300 rounded-2xl hover:-translate-y-2 border transition duration-300'
                >
                    
                    <div className='border m-4 rounded-4xl bg-white'>
                        <img src={product.thumbnail}
                         alt={product.name}
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

                    <div className='px-5 py-2'>
                       <button className='bg-green-400 w-full rounded-lg p-4 cursor-pointer'>Buy at Rs. {product.price}</button>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Products
