import React from 'react'
import PartnerCard from './PartnerCard'

import { ourPartners } from '../utils/constants'
import Slides from './Slides'
import { handshake } from '../assets'
import SlideContainer from './SlideContainer'

const Partners = () => {
  
  return (
    <>
      <div className='bg-[#F3FAF2] py-8'>
        <div className="container mx-auto uppercase flex flex-col md:flex-row gap-8 justify-between items-center text-center">
          <span>
            <p className='text-[2rem] text-[#335F32] font-[900]'>180</p>
            <p className=' text-xs'>no of properties</p>
          </span>
          <span>
            <p className='text-[2rem] text-[#335F32] font-[900]'>1,800</p>
            <p className='text-xs'>no of units</p>
          </span>
          <span>
            <p className='text-[2rem] text-[#335F32] font-[900]'>32</p>
            <p className='text-xs'>PLANS/METHODS YOU CAN PURCHASE YOUR HOME</p>
          </span>
        </div>
      </div>
      <div className='bg-[#F5F5DE] py-8'>
      <div className="container mx-auto relative space-y-8">
        <h1 className='text-[2rem] font-bold'>Our Partners</h1>
        <div className='absolute bg-[#335F32] h-[.1rem] ml-4 top-3 w-[9rem]' />
          <div className=''>
              <Slides />
          </div>
        </div>
        <div className="absolute left-[50%] -translate-x-[50%] flex px-4 py-2 rounded-full items-center -skew-y-[6deg] shadow-shadow justify-center gap-2 border-[1px] border-[#335F32]">
          <img src={handshake} alt="" />
          <span className='capitalize text-xs font-bold text-[#335F32]'>If they trust us, so can you</span>
        </div>
      </div>
      <div className='bg-[#F3FAF2] py-16 '>
        <div className='ml-4 md:ml-12 lg:ml-28'>
          <SlideContainer />
          {/* {ourPartners.map((partner, idx) => (
            <PartnerCard key={idx} img={partner.img} name={partner.name} position={partner.position} />
          ))} */}
        </div>
      </div>
    </>
  )
}

export default Partners