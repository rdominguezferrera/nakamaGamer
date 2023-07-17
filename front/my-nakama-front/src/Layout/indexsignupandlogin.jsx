import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderSignupAndLogin from '../Components/HeaderSignupAndLogin/HeaderSignupAndLogin'
import Footer from '../Components/Footer/Footer'


function Root() {
  return (
    <div>
      <HeaderSignupAndLogin />
      
      <Outlet />
      
      <Footer />
    </div>
  )
}

export default Root
