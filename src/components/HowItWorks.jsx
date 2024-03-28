import React from 'react'
import { works } from '../utils/constants'
import Works from './Works'

const HowItWorks = () => {
  return (
    <div className='py-16'>
      <div className="container mx-auto relative space-y-8">
        <h1 className='text-[2rem] font-bold text-[#335F32]'>How It Works</h1>
        <div className='absolute bg-[#335F32] h-[.1rem] ml-4 top-3 w-[9rem]' />
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {works.map((work) => (
            <Works work={work} key={work.id} /> 
          ))}
        </div>
      </div>
    </div>
  )
}

export default HowItWorks