import React from 'react'

const WhyReasons = ({ reason }) => {
  return (
    <div className=' md:min-h-[350px] px-4 py-6 bg-white rounded-lg flex flex-col items-center gap-4'>
        <div className='border-[1px] border-[#335F32] h-16 w-16 bg-[#F3FAF2] rounded-full flex justify-center'>
            <img src={reason.icon} alt="svg" className='' style={{ color: '#335F32' }} />
        </div>
        <h4 className='text-center text-[1.15rem] text-[#335F32] font-bold'>{reason.title}</h4>
        <p className='text-start text-[.9rem]'>{reason.description}</p>
    </div>
  )
}

export default WhyReasons