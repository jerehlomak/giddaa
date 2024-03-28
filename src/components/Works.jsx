import React from 'react'
import { IoIosPlayCircle } from 'react-icons/io'

const Works = ({ work }) => {
  return (
    <div className='works flex gap-2'>
        <div className='h-[3rem] w-[2.5rem] flex items-center justify-center rounded-full p-4 text-[#335F32] bg-[#f5f5de]'>
            <span className='text-[1.3rem] font-bold'>{work.id}</span>
        </div>
        <div className='space-y-4 p-4 shadow-sm hover:bg-[#f3faf2] rounded-lg hover:shadow-lg duration-500'>
            <h4 className='font-bold text-[1.3rem] text-[#335F32]'>{work.title}</h4>
            <p className='text-[0.85rem]'>{work.description}</p>
            <button className='flex items-center bg-white mx-auto gap-2 border-[1.5px] border-[#335F32] px-3 py-[0.7rem] rounded-full'>
                <IoIosPlayCircle size={20} color='335F32' />
                <span className='uppercase text-[0.6rem]'>watch the video to learn more</span>
            </button>
        </div>
    </div>
  )
}

export default Works