import React from 'react'
import Announcements from '../components/Announcements'
import Footer from '../components/Footer'
import Information from '../components/Information'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Slider from '../components/Slider'



const Home = () => {
  return (
    <div>
        <Announcements/>
        <Navbar/>
        <Slider/>
        <Information/>
        <Products/>
        <Footer/>
    </div>
  )
}

export default Home