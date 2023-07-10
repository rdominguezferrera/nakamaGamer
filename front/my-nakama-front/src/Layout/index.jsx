import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
function Root() {
  return (
    <div>
      <Header />
      <section>
        <Outlet />
      </section>
      <Footer/>
    </div>
  )
}

export default Root
