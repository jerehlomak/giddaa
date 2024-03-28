import React from 'react'
import { Navbar, Hero, Partners,PurchaseOptions, WhyGiddaa, WhoWeServe, NaijaRemote, PrivateSector, Government, HowItWorks, FAQ, Footer } from '../components'

const Home = () => {
  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <Hero />
      <Partners />
      <PurchaseOptions />
      <WhyGiddaa />
      <WhoWeServe />
      <NaijaRemote />
      <PrivateSector />
      <Government />
      <HowItWorks />
      <FAQ />
      <Footer />
    </div>
  )
}

export default Home