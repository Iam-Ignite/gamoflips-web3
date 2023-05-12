import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../../footer/Footer'

function Layout({children}) {
  return (
    <main className='bg-image relative h-[100dvh] overflow-scroll'>
      <Navbar/>
      {children}
      <Footer/>
    </main>
  )
}

export default Layout