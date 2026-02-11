import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero/Hero'
import Product from '../components/Products/Product'
import SweetCollection from '../components/SweetTraditionCollection/SweetCollection'
import SpecialCollection from '../components/SpecialCollections/SpecialCollections'
import TraditionBanner from '../components/TraditionBanner/TraditionBanner'
import Blogs from '../components/Blogs/Blogs'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Product/>
        <SweetCollection/>
        <SpecialCollection/>
        <TraditionBanner/>
        <Blogs/>
        <Footer/>
    </div>

  )
}

export default Home