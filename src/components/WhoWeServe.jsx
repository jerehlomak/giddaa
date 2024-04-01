import React, { useState, useEffect } from 'react'
import { airplane, diaspora, family_3, family_1, family_4 } from '../assets'
import { GrStatusGood } from "react-icons/gr";

const WhoWeServe = () => {
  const [offsetY, setOffSetY] = useState(0)
  const handleScroll = () => setOffSetY(window.pageYOffset)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  },[])
  const texts = [
    'No Agency Fees. Giddaa is Free!',
    'We Eliminate Price Discrimination',
    'Giddaa is Scam Proof!',
    'Relevant Information to Boost Your Confidence!',
    'We are Responsive!'
  ]

  return (
    <div className='py-16'>
      <div className="container mx-auto relative space-y-8">
        <h1 className='text-1.8rem md:text-[2rem] text-[#335F32] font-bold'>Who We Serve</h1>
        <div className='absolute bg-[#335F32] h-[.1rem] ml-4 top-3 w-[9rem]' />
        <div className='w-full flex flex-col gap-4 md:flex-row'>
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            <div className='bg-[#f5f5de] rounded-full h-24 w-24 flex justify-center items-center'>
              <img src={airplane} alt="airplne" className='h-[70%] w-[70%]' />
            </div>
            <h1 className='text-[2rem] md:text-[2.2rem] lg:text-[2.8rem] font-[900] text-[#0A7E32] opacity-[0.3]'>The Diaspora</h1>
            <p>
              Living outside Nigeria? Thinking about buying a place <span className='font-bold capitalize'>back home</span> for viists (No need for hotels, Airbnbs, or your parent’s house), Investment, or is it a personal goal of yours? Or maybe you see yourself spending more time back home. If any of those sounds like you, we can help you along your home purchase journey.  
            </p>  
            <div className='flex gap-8 flex-wrap'>
              {texts.map((text) => (
                <span key={text} className='flex items-center gap-2 text-[#335F32]'>
                  <GrStatusGood />
                  <p className='text-sm'>
                    {text}
                  </p>
                </span>
              ))}
            </div>        
          </div>
          <div className="w-full lg:w-1/2 flex">
              {/* <img src={diaspora} className='w-full h-full object-cover' 
              style={{ transform: `translateY${offsetY * 0.5}px` }} alt="" /> */}
              <div className='flex w-full gap-4'>
                <div className='w-1/2 flex flex-col gap-4'>
                  <img className='rounded-[50%]' src={family_1} alt="" />
                  <img className='rounded-[50%] w-52 h-52' src={family_3} alt="" />
                </div>
                <img className='w-1/2 rounded-[50%]' src={family_4} alt="" />
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhoWeServe