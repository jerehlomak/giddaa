import React from 'react'
import PurchaseOption from './PurchaseOption'
import { options } from '../utils/constants'


const PurchaseOptions = () => {
  
  return (
    <div className='py-16'>
      <div className="container relative w-full mx-auto space-y-8">
        <h1 className='text-[2rem] font-semibold text-[#335F32]'>Your Purchase Options</h1>
        <div className='absolute bg-[#335F32] h-[.1rem] ml-12 top-3 w-[12rem] rounded-b-[50%]' />
        <p className='mx-auto text-center max-w-[600px]'>
          Buying a home isn’t a one-size fits all kind of purchase — we know!. So…we give you all the options the market has to offer to choose from!
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {options.map((option, idx) => (
            <PurchaseOption key={idx} img={option.img} title={option.title} features={option.features} description={option.description} subTitle={option.subTitle}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PurchaseOptions