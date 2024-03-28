import React from 'react'
import WhySlides from './WhySlides'
import { reasons } from '../utils/constants'
import WhyReasons from './WhyReasons'

const WhyGiddaa = () => {
  return (
    <div className='py-16 bg-[#F3FAF2]'>
      <div className="container mx-auto relative space-y-8">
        <h1 className='text-1.8rem md:text-[2rem] text-[#335F32] font-bold'>Why Giddaa?</h1>
        <div className='absolute bg-[#335F32] h-[.1rem] ml-4 top-3 w-[9rem]' />
        <p className='mx-auto max-w-[700px] text-center'>
          Too many Nigerians at home and abroad have complained about scams, inavailabilty of flexible payment options, how stressful, ambiguous, and manual the property purchase process is, we heard you all, <span className='font-bold'> over 100+ of you!</span>
        </p>
        <WhySlides />
        <h1 className='text-1.8rem md:text-[2rem] text-[#335F32] font-bold text-center'>Here's Why</h1>
        <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
          {reasons.map((reason, index) => (
            <div key={index}>
              <WhyReasons reason={reason} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WhyGiddaa