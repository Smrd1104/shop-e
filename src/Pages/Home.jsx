import React from 'react'
import Advertisement from '../Components/Advertisement/Advertisement'
import Hero from '../Components/Hero/Hero'
import Products from '../Components/Products/Products'
import TopProducts from '../Components/TopProducts/TopProducts'
import Banner from '../Components/Banner/Banner'
import Subscribe from '../Components/Subscribe/Subscribe'
import Testimonials from '../Components/Testimonials/Testimoinals'

const Home = () => {
    return (
        <div>
            <Advertisement />
            <Hero />
            <Products />
            <Products />
            <TopProducts />
            <Products />
            <Products />
            <TopProducts />
            <Banner />
            <Subscribe />
            <Products />
            <Testimonials />
        </div>
    )
}

export default Home