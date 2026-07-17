import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { categoryImages } from '../data/productImages';

const SearchByCategory = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        axios.get("https://dummyjson.com/products/categories")
            .then(response => {
                console.log(response.data)
                setCategories(response.data)
            })
            .catch(error => {
                console.log("API error", error)
            })
    }, [])

    const colors = [
        "bg-red-100",
        "bg-blue-100",
        "bg-green-100",
        "bg-yellow-100",
        "bg-pink-100",
        "bg-purple-100",
        "bg-orange-100",
        "bg-indigo-100",
        "bg-cyan-100",
        "bg-emerald-100",
    ];

    // const randomColor = colors[Math.floor(Math.random() * colors.length)]
    // console.log("random color", randomColor);
    

    return (
        <div className='max-w-6xl mx-auto px-5 mt-12'>
            <h1 className='pt-5 pb-8 text-2xl font-bold'>Search By Category</h1>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-8'>
                {categories.map((category) => {
                    const categoryImage = categoryImages.find((categoryImg) => {
                        return categoryImg.slug === category.slug
                    })
                    return <div key={category.slug}
                        className='p-4 flex flex-col items-center justify-center border rounded-lg cursor-pointer mx-auto hover:shadow-lg transition-all duration-300 hover:scale-102'
                    >
                        <img src={categoryImage.image} alt="category image"
                        className='flex items-center justify-center w-56 h-48 bg-transparent object-contain rounded-[50%] border'
                        />
                        <h1 className='flex items-center justify-center font-semibold pt-7 text-xl duration-150'>{category.name}</h1>

                        <button
                        className='group w-57 h-12 mt-5 border rounded-full flex items-center justify-center bg-black text-white cursor-pointer'
                        ><span>Explore {category.slug}</span> <span className='transition-transform duration-300 group-hover:translate-x-2 transform text-3xl'>→</span></button>
                    </div>
                })}
            </div>
        </div>
    )
}

export default SearchByCategory
