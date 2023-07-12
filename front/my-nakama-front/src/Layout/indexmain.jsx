import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import Body from '../Components/Body/Body'

function Main() {

  const displayHeader = () => {
    
  }
  return (
    <div>
      <Header />
      <Body />
        <Outlet />
      
      <Footer />
    </div>
  )
}

export default Main
