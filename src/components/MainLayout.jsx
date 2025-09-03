import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import Home from './Home'
import ScrollToTop from './ScrollToTop'
const Mainlayout = () => {
  return (
    <div>
      <ScrollToTop />
        <NavBar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Mainlayout