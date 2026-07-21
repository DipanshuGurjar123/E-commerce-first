import React from 'react'
import Home from './pages/Home'
import Navbar from './component/Navbar'
import { Outlet, Route, Routes } from 'react-router'
import SearchByCategory from './component/SearchByCategory'
import Products from './component/Products'
import AboutUs from './component/AboutUs'
import ContactUs from './component/ContactUs'
import Footer from './component/Footer'
import ProductDetails from './component/ProductDetails'
import Cart from "./pages/Cart";



const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='products' element={<Products />}/>
        <Route path='about' element={<AboutUs />}/>
        <Route path='contact' element={<ContactUs />}/>

        <Route path='categories' element={<Outlet/>}>
        <Route index element={<SearchByCategory />}/>
        <Route path=':id' element={<ProductDetails />}/>
        </Route>
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
