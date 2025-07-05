import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Services from '../component/Services'

export default function page() {
  return (
    <div>
      <Navbar></Navbar>
      <main  >
      <Services></Services>
      </main>

      <Footer></Footer>
    </div>
  )
}
