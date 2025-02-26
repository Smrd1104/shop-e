import React from 'react'
import Advertisement from '../Components/Advertisement/Advertisement'
import Hero from '../Components/Hero/Hero'
import Products from '../Components/Products/Products'
import TopProducts from '../Components/TopProducts/TopProducts'
import Banner from '../Components/Banner/Banner'
import Subscribe from '../Components/Subscribe/Subscribe'
import Testimonials from '../Components/Testimonials/Testimoinals'
import BannerHero from '../Components/Banner/BannerHero'

const Home = () => {
    return (
        <div className='bg-gray-50 dark:bg-gray-800'>
            <Advertisement />
            <div className='shadow-lg  '>
            <Hero />
            </div>
            <BannerHero/>
            <div className='-mt-10'>
            <Products />
            <TopProducts />
            <Banner />
            <Subscribe />
            
            <Testimonials />
            </div>
          
        </div>
    )
}

export default Home