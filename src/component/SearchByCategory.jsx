import React, { useEffect, useState } from 'react'
import axios from 'axios';

const SearchByCategory = () => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        axios.get("https://dummyjson.com/products/categories")
        .then(response => {
            console.log(response.data)
            setProduct(response.data)
        })
        .catch(error => {
            console.log("API error", error)
        })
    }, [])

    return (
        <div>
            {product.map((item) => (
                <div key={item.slug}>
                    {item.name}
                </div>
            ))}
        </div>
    )
}

export default SearchByCategory
