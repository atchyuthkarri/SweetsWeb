import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero/Hero'
import Product from '../components/Products/Product'
import SweetCollection from '../components/SweetTraditionCollection/SweetCollection'
import SpecialCollection from '../components/SpecialCollections/SpecialCollections'
import TraditionBanner from '../components/TraditionBanner/TraditionBanner'
import Blogs from '../components/Blogs/Blogs'
import Footer from '../components/Footer/Footer'
import PageWrapper from '../components/PageWrapper'

const Home = () => {
  return (
    <PageWrapper>
        <Navbar/>
        <Hero/>
        <Product/>
        <SweetCollection/>
        <SpecialCollection/>
        <TraditionBanner/>
        <Blogs/>
        <Footer/>
    </PageWrapper>
  )
}

export default Home