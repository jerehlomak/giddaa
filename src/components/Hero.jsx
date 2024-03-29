import React from 'react'
import { hero_bg } from '../assets'

const Hero = () => {
  return (
    <div className='h-full w-full flex pb-20 md:pb-0 flex-col-reverse lg:flex-row justify-center'>
      <div className="container mt-10 w-full md:w-1/2">
        <div className="space-y-4 flex flex-col justify-center items-center md:items-start text-cente lg:text-start">
          <h1 className='text-[1.7rem] sm:text-[2rem] tracking-wider md:leading-[2.8rem] font-bold text-black'>
            Securely and Affordably Own a Home in Nigeria. <br />
          </h1>
          <h1 className='text-[1.7rem] sm:text-[2rem] tracking-wider md:leading-[2.8rem] font-bold text-[#335F32]'>We Serve Nigerians Across the Globe.</h1>
          <p className='text-[1rem] tracking-wider'>
            Experience confidence when buying a home in Nigeria whether you’re in Nigeria or Abroad! Enjoy peace of mind with legitimate transactions, straightfoward processes, and a variety of flexible payment options directly from top developers and banks.
          </p>
          <div className='flex flex-col-reverse md:flex-row justify-center items-center gap-8'>
            <button className='w-[70%] bg-[#335F32] md:tracking-widest text-[1.3rem] rounded-full text-white py-2 px-2 md:px-4'>
              Find a Home
            </button>
            <span className='border-[2px] border-[#335F32] py-2 px-4 rounded-md'>
              10,000 People Have Seen This
            </span>
          </div>
        </div>
        
      </div>
      <div className="w-full h-full">
       <img src={hero_bg} className='h-full w-full object-cover' alt="" />
      </div>
    </div>
  )
}

export default Hero